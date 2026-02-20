import NoticeCard from '@/components/list/NoticeCard/NoticeCard';
import formatWorkTime from '@/utils/formatWorkTime';
import { Notice } from '@/types/notice.types';
import { Wrapper } from './NoticeList.styles';
import NotFoundNotice from '@/components/list/NotFoundNotice/NotFoundNotice';

interface Props {
  type: 'customized' | 'entire';
  items?: Notice[];
  count: number;
}

function NoticeList({ type, items, count }: Props) {
  return (
    <Wrapper type={type}>
      {items && items?.length > 0 ? (
        items?.slice(0, count).map((notice) => {
          const { id, HourlyPay, startsAt, workhour, closed, shop } =
            notice.item;
          const { name, address1, imageUrl, originalHourlyPay } = shop.item;

          const formattedWorkTime = formatWorkTime({
            startsAt,
            workhour: workhour,
          });

          return (
            <li key={id}>
              <NoticeCard
                cardImageUrl={imageUrl}
                restaurantName={name}
                duration={formattedWorkTime}
                address={address1}
                defaultHourlyPay={originalHourlyPay}
                currentHourlyPay={HourlyPay}
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
