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
import { postApply } from '@/api/notice';
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
}: Props) {
  const formattedWorkTime = formatWorkTime({ startsAt, workhour });
  const { execute } = useAsync(postApply);
  const [token, setToken] = useState<string>('');

  const Props = {
    authorazition: { token },
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
    fetch();
    onApply();
  };

  const applyStatusSwitch = () => {
    if (isClosed) return <InActiveButton />;

    switch (applyStatus) {
      case 'pending':
        return <SecondaryButton text="취소하기" />;
      case 'accepted':
        return <InActiveButton />;
      case 'cancelled':
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
  );
}

export default NoticeInfo;
