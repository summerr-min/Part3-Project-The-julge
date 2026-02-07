import NoticeCard from '@/components/list/NoticeCard/NoticeCard';
import formatWorkTime from '@/utils/formatWorkTime';
import { Notice } from '@/types/notice.types';
import { Wrapper } from './NoticeList.styles';

interface Props {
  type: 'customized' | 'entire';
  items: Notice[];
  count: number;
}

function NoticeList({ type, items, count }: Props) {
  return (
    <Wrapper type={type}>
      {items.slice(0, count).map((notice) => {
        const { id, wage, startsAt, workHour, closed, shop } = notice.item;
        const { name, address1, imageUrl, originalWage } = shop.item;

        const formattedWorkTime = formatWorkTime({
          startsAt,
          workHour: workHour,
        });

        return (
          <li key={id}>
            <NoticeCard
              cardImageUrl={imageUrl}
              restaurantName={name}
              duration={formattedWorkTime}
              address={address1}
              defaultWage={originalWage}
              currentWage={wage}
              isClosed={closed}
            />
          </li>
        );
      })}
    </Wrapper>
  );
}

export default NoticeList;
