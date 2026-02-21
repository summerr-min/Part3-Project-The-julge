import { MouseEvent, useEffect, useRef, useState } from 'react';
import NoticeCustomizedUI from './NoticeCustomizedUI';
import NoticeList from '../NoticeList/NoticeList';
import convertDate from '@/utils/convertDate';
import useAsync from '@/hooks/useAsync';
import { getNoticeList } from '@/api/notice';
import { Notice } from '@/types/notice.types';
import { Address } from '@/types/address.types';
import { useAuth } from '@/hooks/useAuth';
import { getMyProfile } from '@/api/user';

interface Props {
  address: Address[];
  limit: number;
}

function NoticeCustomized({ address = ['서울시 종로구'], limit = 10 }: Props) {
  const currentDate = new Date();
  const containerRef = useRef<HTMLDivElement>(null);

  const [dragging, setDragging] = useState(false);
  const [clickPoint, setClickPoint] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [userAddress, setUserAddress] = useState('');
  const [notice, setNotice] = useState<Notice[]>();
  const { execute } = useAsync(getNoticeList);
  const { execute: useProfile } = useAsync(getMyProfile);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const Props = {
    params: {
      offset: 0,
      limit,
      address,
      startsAtGte: convertDate(currentDate),
      hourlyPayGte: 0,
      sort: 'pay' as const,
    },
  };

  const { currentUser } = useAuth();

  if (currentUser?.type && currentUser.type === 'employer') return null;

  useEffect(() => {
    const initAddress = async () => {
      if (currentUser?.id) {
        const res = await useProfile(currentUser.id);
        if (res?.item?.address) {
          setUserAddress(res.item.address);
        } else {
          setUserAddress(address[0]);
        }
      } else {
        setUserAddress(address[0]);
      }
    };

    initAddress();
  }, [currentUser?.id]);

  const fetch = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!userAddress) return;
    const response: any = await execute({
      ...Props,
      params: {
        ...Props.params,
        limit: 3,
        address: [userAddress as Address],
      },
    });
    setNotice(response.data.items);
  };

  const handleMouseDownEvent = (e: MouseEvent<HTMLDivElement>) => {
    setDragging(true);

    if (containerRef.current) {
      setClickPoint(e.pageX);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleMouseMoveEvent = (e: MouseEvent<HTMLDivElement>) => {
    if (!dragging) return;

    e.preventDefault();

    if (containerRef.current) {
      const walk = e.pageX - clickPoint;

      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseEnterEvent = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setDragging(false);
  };

  const startAutoScroll = () => {
    const intervalId: NodeJS.Timeout = setInterval(() => {
      if (!dragging && containerRef.current) {
        if (
          containerRef.current.scrollLeft >=
          containerRef.current.scrollWidth - containerRef.current.clientWidth
        ) {
          containerRef.current.scrollLeft = 0;
        } else {
          containerRef.current.scrollLeft += 400;
        }
      }
    }, 2000);

    intervalRef.current = intervalId;
  };

  const handleMouseLeaveEvent = () => {
    setDragging(false);
    if (!intervalRef.current) {
      startAutoScroll();
    }
  };

  useEffect(() => {
    startAutoScroll();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [dragging]);

  useEffect(() => {
    if (userAddress) {
      fetch();
    }
  }, [userAddress]);

  return (
    <NoticeCustomizedUI
      containerRef={containerRef as React.RefObject<HTMLDivElement>}
      onMouseDown={handleMouseDownEvent}
      onMouseLeave={handleMouseLeaveEvent}
      onMouseUp={() => setDragging(false)}
      onMouseMove={handleMouseMoveEvent}
      onMouseEnter={handleMouseEnterEvent}
    >
      <NoticeList type="customized" items={notice} count={limit} />
    </NoticeCustomizedUI>
  );
}

export default NoticeCustomized;
