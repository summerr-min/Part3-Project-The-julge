import { useEffect, useState } from 'react';
import HourlyPayBadge from '@/components/list/HourlyPayBadge/HourlyPayBadge';
import separatorHourlyPay from '@/utils/separatorHourlyPay';
import NoticeCardDescription from '@/components/list/NoticeCard/NoticeCardDescription';
import { Address } from '@/types/address.types';
import formatWorkTime from '@/utils/formatWorkTime';
import InActiveButton from './Button/InActiveButton';
import PrimaryButton from './Button/PrimaryButton';
import SecondaryButton from './Button/SecondaryButton';
import { Status } from '@/types/notice.types';
import NoticeDescription from './NoticeDescription/NoticeDescription';
import useAsync from '@/hooks/useAsync';
import { postApply, updateApplication } from '@/api/notice';
import ConfirmModal from '@/components/common/Modal/ConfirmModal';
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
}: Props) {
  const formattedWorkTime = formatWorkTime({ startsAt, workhour });
  const { execute } = useAsync(postApply);
  const { execute: updateExecute } = useAsync(updateApplication);

  const [isCancelModal, setIsCancelModal] = useState(false);
  const [isCancel, setIsCancel] = useState(false);
  const [token, setToken] = useState<string>(() => {
    if (typeof window === 'undefined') return '';
    return localStorage.getItem('token') ?? '';
  });

  const Props = {
    authorization: { token },
    data: {
      shopId: shopId as string,
      noticeId: noticeId as string,
    },
  };

  const fetch = async () => {
    if (shopId && noticeId) {
      await execute(Props);
    }
  };

  const handleApply = () => {
    fetch().then(() => {
      onApply();
    });
  };

  const openCancelModal = () => setIsCancelModal(true);
  const closeCancelModal = () => setIsCancelModal(false);

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

  const applyStatusSwitch = () => {
    if (isClosed) return <InActiveButton />;

    switch (applyStatus) {
      case 'pending':
        return <SecondaryButton text="취소하기" onClick={openCancelModal} />;
      case 'accepted':
        return <InActiveButton />;
      case 'canceled':
        return <InActiveButton />;
      case 'rejected':
        return <InActiveButton />;
      default:
        return <PrimaryButton text="신청하기" onClick={handleApply} />;
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem('token');

      if (item) {
        setToken(item);
      }
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
