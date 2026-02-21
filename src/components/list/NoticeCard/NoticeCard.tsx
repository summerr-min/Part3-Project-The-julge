import NoticeCardDescription from './NoticeCardDescription';
import HourlyPayBadge from '@/components/list/HourlyPayBadge/HourlyPayBadge';
import separatorHourlyPay from '@/utils/separatorHourlyPay';
import { Link } from 'react-router-dom';
import {
  Wrapper,
  ImageContainer,
  CardImage,
  LastNoticeText,
  ContentContainer,
  DescriptionContainer,
  RestaurantName,
  HourlyPayContainer,
  HourlyPay,
} from '@/components/list/NoticeCard/NoticeCard.styles';

interface Props {
  shopId?: string;
  noticeId: string;
  cardImageUrl: string;
  restaurantName: string;
  duration: string;
  address: string;
  defaultHourlyPay: number;
  currentHourlyPay: number;
  isClosed: boolean;
}

function NoticeCard({
  shopId,
  noticeId,
  cardImageUrl,
  restaurantName,
  duration,
  address,
  defaultHourlyPay,
  currentHourlyPay,
  isClosed,
}: Props) {
  return (
    <Wrapper $isClosed={isClosed}>
      <ImageContainer>
        <Link to={`/shops/${shopId}/notices/${noticeId}/detail`}>
          <CardImage
            src={cardImageUrl}
            alt={restaurantName}
            $isClosed={isClosed}
          />
        </Link>
        <LastNoticeText $isClosed={isClosed}>지난 공고</LastNoticeText>
      </ImageContainer>

      <ContentContainer>
        <DescriptionContainer>
          <RestaurantName $isClosed={isClosed}>{restaurantName}</RestaurantName>
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
        <HourlyPayContainer>
          <HourlyPay $isClosed={isClosed}>
            {separatorHourlyPay(currentHourlyPay)}원
          </HourlyPay>
          <HourlyPayBadge
            defaultHourlyPay={defaultHourlyPay}
            currentHourlyPay={currentHourlyPay}
            isClosed={isClosed}
          />
        </HourlyPayContainer>
      </ContentContainer>
    </Wrapper>
  );
}

export default NoticeCard;
