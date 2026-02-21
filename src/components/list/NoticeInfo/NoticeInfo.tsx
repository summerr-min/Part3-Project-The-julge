import { useEffect, useState } from 'react';
import HourlyPayBadge from '@/components/list/HourlyPayBadge/HourlyPayBadge';
import separatorHourlyPay from '@/utils/separatorHourlyPay';
import NoticeCardDescription from '@/components/list/NoticeCard/NoticeCardDescription';
import { Address } from '@/types/address.types';
import formatWorkTime from '@/utils/formatWorkTime';
import Button from '@/components/common/Button/Button';
import PrimaryButton from './Button/PrimaryButton';
import SecondaryButton from './Button/SecondaryButton';
import { Status } from '@/types/notice.types';
import NoticeDescription from './NoticeDescription/NoticeDescription';
import useAsync from '@/hooks/useAsync';
import { postApply, updateApplication } from '@/api/notice';
import ConfirmModal from '@/components/common/Modal/ConfirmModal';
import AlertModal from '@/components/common/Modal/AlertModal';
import {
  Wrapper,
  Container,
  Category,
  ShopName,
  ShopInfoContainer,
  ImageContainer,
  LastNotice,
  StyledImage,
  ContentContainer,
  HourlyPayContainer,
  HourlyPayName,
  HourlyPayDescriptionContainer,
  HourlyPayDescription,
  Description,
  ButtonContainer,
  DisabledButtonWrapper,
} from './NoticeInfo.styles';

interface Props {
  isClosed: boolean;
  shopId: string | undefined;
  noticeId: string | undefined;
  applyStatus?: Status;
  category: string;
  shopName: string;
  address: Address;
  imageUrl: string;
  defaultHourlyPay: number;
  currentHourlyPay: number;
  shopDescription: string;
  noticeDescription: string;
  startsAt: string;
  workhour: number;
  onApply: () => void;
  applicationId?: string;
  hasProfile: boolean;
  profileChecked: boolean;
  isEmployer?: boolean;
}

function NoticeInfo({
  isClosed,
  shopId,
  noticeId,
  applyStatus,
  category,
  shopName,
  address,
  imageUrl,
  defaultHourlyPay,
  currentHourlyPay,
  shopDescription,
  noticeDescription,
  startsAt,
  workhour,
  onApply,
  applicationId,
  hasProfile,
  profileChecked,
  isEmployer,
}: Props) {
  const formattedWorkTime = formatWorkTime({ startsAt, workhour });
  const { execute } = useAsync(postApply);
  const { execute: updateExecute } = useAsync(updateApplication);

  const [isCancelModal, setIsCancelModal] = useState(false);
  const [isCancel, setIsCancel] = useState(false);

  const [isProfileModal, setIsProfileModal] = useState(false);
  const [isEmployerModal, setIsEmployerModal] = useState(false);

  const [token, setToken] = useState<string>(() => {
    if (typeof window === 'undefined') return '';
    return localStorage.getItem('token') ?? '';
  });

  const requestProps = {
    authorization: { token },
    data: {
      shopId: shopId as string,
      noticeId: noticeId as string,
    },
  };

  const fetch = async () => {
    if (shopId && noticeId) {
      await execute(requestProps);
    }
  };

  const openCancelModal = () => setIsCancelModal(true);
  const closeCancelModal = () => setIsCancelModal(false);

  const openProfileModal = () => setIsProfileModal(true);
  const closeProfileModal = () => setIsProfileModal(false);

  const openEmployerModal = () => setIsEmployerModal(true);
  const closeEmployerModal = () => setIsEmployerModal(false);

  const handleConfirmCancel = async () => {
    if (!shopId || !noticeId || !applicationId) return;

    setIsCancel(true);

    const res = await updateExecute({
      authorization: { token },
      data: {
        shopId,
        noticeId,
        applicationId,
        status: 'canceled',
      },
    });

    if (res) {
      closeCancelModal();
      onApply();
    }

    setIsCancel(false);
  };

  const handleApply = () => {
    if (isEmployer) {
      openEmployerModal();
      return;
    }

    if (!profileChecked) return;

    if (!hasProfile) {
      openProfileModal();
      return;
    }

    fetch().then(onApply);
  };

  const applyStatusSwitch = () => {
    if (isClosed)
      return (
        <DisabledButtonWrapper>
          <Button variant="disabled" disabled>
            신청 불가
          </Button>
        </DisabledButtonWrapper>
      );

    switch (applyStatus) {
      case 'pending':
        return <SecondaryButton text="취소하기" onClick={openCancelModal} />;
      case 'accepted':
      case 'canceled':
      case 'rejected':
        return (
          <DisabledButtonWrapper>
            <Button variant="disabled" disabled>
              신청 불가
            </Button>
          </DisabledButtonWrapper>
        );
      default:
        return <PrimaryButton text="신청하기" onClick={handleApply} />;
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem('token');
      if (item) setToken(item);
    }
  }, []);

  return (
    <>
      <Wrapper>
        <Container>
          <Category>{category}</Category>
          <ShopName>{shopName}</ShopName>
        </Container>
        <ShopInfoContainer>
          <ImageContainer>
            <StyledImage src={imageUrl} alt={shopName} $isClosed={isClosed} />
            {isClosed && <LastNotice>마감 완료</LastNotice>}
          </ImageContainer>
          <ContentContainer>
            <HourlyPayContainer>
              <HourlyPayName>시급</HourlyPayName>
              <HourlyPayDescriptionContainer>
                <HourlyPayDescription>
                  {separatorHourlyPay(currentHourlyPay)}원
                </HourlyPayDescription>
                <HourlyPayBadge
                  defaultHourlyPay={defaultHourlyPay}
                  currentHourlyPay={currentHourlyPay}
                  isClosed={isClosed}
                />
              </HourlyPayDescriptionContainer>
            </HourlyPayContainer>
            <NoticeCardDescription
              type="duration"
              description={formattedWorkTime}
              isClosed={isClosed}
            />
            <NoticeCardDescription
              type="address"
              description={address}
              isClosed={isClosed}
            />
            <Description>{shopDescription}</Description>
            <ButtonContainer>{applyStatusSwitch()}</ButtonContainer>
          </ContentContainer>
        </ShopInfoContainer>
        <NoticeDescription description={noticeDescription} />
      </Wrapper>

      {isEmployerModal && (
        <AlertModal
          message="사장님은 신청할 수 없습니다."
          onClose={closeEmployerModal}
          confirmText="확인"
        />
      )}

      {isProfileModal && (
        <AlertModal
          message="내 프로필을 먼저 등록해 주세요."
          onClose={closeProfileModal}
          confirmText="확인"
        />
      )}

      {isCancelModal && (
        <ConfirmModal
          message="신청을 취소하시겠어요?"
          cancelText="아니요"
          confirmText="취소하기"
          onCancel={closeCancelModal}
          onConfirm={() => {
            if (isCancel) return;
            handleConfirmCancel();
          }}
        />
      )}
    </>
  );
}

export default NoticeInfo;
