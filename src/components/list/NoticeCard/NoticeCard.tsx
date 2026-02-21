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
import { getStatusNotice } from '@/utils/shopUtils';

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
  startsAt: string;
  workhour: number;
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
  startsAt,
  workhour,
}: Props) {
  const shopNotice = {
    item: {
      closed: isClosed,
      description: '',
      hourlyPay: currentHourlyPay,
      id: noticeId,
      startsAt: startsAt,
      workhour: workhour,
    },
  };
  const noticeStatus = getStatusNotice(shopNotice);

  const isActuallyClosed = isClosed || noticeStatus === 'expired';

  return (
    <Link
      to={
        isActuallyClosed ? '#' : `/shops/${shopId}/notices/${noticeId}/detail`
      }
      onClick={(e) => isActuallyClosed && e.preventDefault()}
      style={{
        cursor: isActuallyClosed ? 'default' : 'pointer',
        textDecoration: 'none',
      }}
    >
      <Wrapper $isClosed={isActuallyClosed}>
        <ImageContainer>
          <CardImage
            src={cardImageUrl}
            alt={restaurantName}
            $isClosed={isActuallyClosed}
          />

          <LastNoticeText $isClosed={isActuallyClosed}>
            {getStatusNotice(shopNotice) === 'expired'
              ? '지난 공고'
              : '마감 완료'}
          </LastNoticeText>
        </ImageContainer>

        <ContentContainer>
          <DescriptionContainer>
            <RestaurantName $isClosed={isActuallyClosed}>
              {restaurantName}
            </RestaurantName>
            <NoticeCardDescription
              type="duration"
              description={duration}
              isClosed={isActuallyClosed}
            />
            <NoticeCardDescription
              type="address"
              description={address}
              isClosed={isActuallyClosed}
            />
          </DescriptionContainer>
          <HourlyPayContainer>
            <HourlyPay $isClosed={isActuallyClosed}>
              {separatorHourlyPay(currentHourlyPay)}원
            </HourlyPay>
            <HourlyPayBadge
              defaultHourlyPay={defaultHourlyPay}
              currentHourlyPay={currentHourlyPay}
              isClosed={isActuallyClosed}
            />
          </HourlyPayContainer>
        </ContentContainer>
      </Wrapper>
    </Link>
  );
}

export default NoticeCard;
