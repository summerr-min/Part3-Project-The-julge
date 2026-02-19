import { useEffect, useState } from 'react';
import WageBadge from '@/components/list/WageBadge/WageBadge';
import separatorWage from '@/utils/separatorWage';
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
  WageContainer,
  WageName,
  WageDescriptionContainer,
  WageDescription,
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
  defaultWage: number;
  currentWage: number;
  shopDescription: string;
  noticeDescription: string;
  startsAt: string;
  workHour: number;
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
  defaultWage,
  currentWage,
  shopDescription,
  noticeDescription,
  startsAt,
  workHour,
  onApply,
}: Props) {
  const formattedWorkTime = formatWorkTime({ startsAt, workHour });
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
          <WageContainer>
            <WageName>시급</WageName>
            <WageDescriptionContainer>
              <WageDescription>{separatorWage(currentWage)}원</WageDescription>
              <WageBadge
                defaultWage={defaultWage}
                currentWage={currentWage}
                isClosed={isClosed}
              />
            </WageDescriptionContainer>
          </WageContainer>
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
