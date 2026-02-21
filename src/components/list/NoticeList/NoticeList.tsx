import NoticeCard from '@/components/list/NoticeCard/NoticeCard';
import formatWorkTime from '@/utils/formatWorkTime';
import { Notice } from '@/types/notice.types';
import { Wrapper } from './NoticeList.styles';
import NotFoundNotice from '@/components/list/NotFoundNotice/NotFoundNotice';

interface Props {
  type: 'customized' | 'entire';
  items?: Notice[];
  count: number;
  shopId?: string;
  imageUrl?: string;
  name?: string;
  address1?: string;
  originalHourlyPay?: number;
}

function NoticeList({ type, items, count }: Props) {
  return (
    <Wrapper type={type}>
      {items && items?.length > 0 ? (
        items.slice(0, count).map((notice: Notice) => {
          const {
            id: noticeId,
            hourlyPay,
            startsAt,
            workhour,
            closed,
            shop,
          } = notice.item;
          const {
            id: shopId,
            name,
            address1,
            imageUrl,
            originalHourlyPay,
          } = shop.item;

          const formattedWorkTime = formatWorkTime({
            startsAt,
            workhour: workhour,
          });

          return (
            <li key={noticeId}>
              <NoticeCard
                shopId={shopId}
                noticeId={noticeId}
                cardImageUrl={imageUrl}
                restaurantName={name}
                duration={formattedWorkTime}
                address={address1}
                defaultHourlyPay={originalHourlyPay}
                currentHourlyPay={hourlyPay}
                isClosed={closed}
              />
            </li>
          );
        })
      ) : (
        <NotFoundNotice />
      )}
    </Wrapper>
  );
}

export default NoticeList;
