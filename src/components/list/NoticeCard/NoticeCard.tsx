import NoticeCardDescription from './NoticeCardDescription';
import WageBadge from '@/components/list/WageBadge/WageBadge';
import separatorWage from '@/utils/separatorWage';
import {
  Wrapper,
  ImageContainer,
  CardImage,
  LastNoticeText,
  ContentContainer,
  DescriptionContainer,
  RestaurantName,
  WageContainer,
  Wage,
} from '@/components/list/NoticeCard/NoticeCard.styles';

interface Props {
  cardImageUrl: string;
  restaurantName: string;
  duration: string;
  address: string;
  defaultWage: number;
  currentWage: number;
  isClosed: boolean;
}

function NoticeCard({
  cardImageUrl,
  restaurantName,
  duration,
  address,
  defaultWage,
  currentWage,
  isClosed,
}: Props) {
  return (
    <Wrapper isClosed={isClosed}>
      <ImageContainer>
        <CardImage
          src={cardImageUrl}
          alt={restaurantName}
          isClosed={isClosed}
        />
        <LastNoticeText isClosed={isClosed}>지난 공고</LastNoticeText>
      </ImageContainer>

      <ContentContainer>
        <DescriptionContainer>
          <RestaurantName isClosed={isClosed}>{restaurantName}</RestaurantName>
          <NoticeCardDescription
            type="duration"
            description={duration}
            isClosed={isClosed}
          />
          <NoticeCardDescription
            type="address"
            description={address}
            isClosed={isClosed}
          />
        </DescriptionContainer>
        <WageContainer>
          <Wage isClosed={isClosed}>{separatorWage(currentWage)}원</Wage>
          <WageBadge
            defaultWage={defaultWage}
            currentWage={currentWage}
            isClosed={isClosed}
          />
        </WageContainer>
      </ContentContainer>
    </Wrapper>
  );
}

export default NoticeCard;
