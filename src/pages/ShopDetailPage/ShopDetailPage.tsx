import {
  FullPageWrapper,
  LoadingText,
  MyShopNotFound,
  PulseCircle,
} from '@/pages/ShopDetailPage/ShopDetailPage.styles';
import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getShopById, getShopNoticeList } from '@/api/employer';
import MyShopNoticeList from '@/components/employer/MyShopNoticeList/MyShopNoticeList';
import MyShop from '@/components/employer/MyShop/MyShop';
import useShopAsync from '@/hooks/useShopAsync';
import { ShopInfo, ShopNoticeR } from '@/types/shop.types';
import { SingleResponse } from '@/types/api.types';

function ShopDetailPage() {
  const params = useParams<{ shopId: string }>();
  const shopId = params.shopId;
  const [shopNoticeList, setShopNoticeList] = useState<ShopNoticeR[]>([]);
  const [isNoticeMoreLoading, setIsNoticeMoreLoading] = useState(false);
  const [hasNext, setHasNext] = useState(true);
  const pageSize = 7;

  const pageRef = useRef(1);
  const isFetching = useRef(false);

  if (!shopId) return null;

  const {
    exec: getShop,
    data: shopInfo,
    isLoading: isShopLoading,
  } = useShopAsync<[string], SingleResponse<ShopInfo>>(getShopById);

  const getShopNotice = useCallback(async (id: string, page: number) => {
    if (!id || isFetching.current) return false;

    try {
      isFetching.current = true;
      setIsNoticeMoreLoading(true);

      const offset = (page - 1) * pageSize;

      const [res] = await Promise.all([
        getShopNoticeList(id, { offset, limit: pageSize }),
        new Promise((resolve) => setTimeout(resolve, 800)),
      ]);
      // console.log(
      //   `현재 페이지: ${page}, 가져온 개수: ${res.items.length}, 전체 hasNext: ${res.hasNext}`
      // );

      setShopNoticeList((prev: ShopNoticeR[]) => {
        const existingIds = new Set(prev.map((notice) => notice.item.id));
        const uniqueNewItems = res.items.filter(
          (newItem: ShopNoticeR) => !existingIds.has(newItem.item.id)
        );
        return [...prev, ...uniqueNewItems];
      });

      setHasNext(res.hasNext);
    } catch (e) {
      console.error('getShopNotice..에러 발생:::', e);
    } finally {
      isFetching.current = false;
      setIsNoticeMoreLoading(false);
    }
  }, []);

  useEffect(() => {
    if (shopId) {
      setShopNoticeList([]);
      pageRef.current = 1;
      setHasNext(true);

      getShop(shopId);
      getShopNotice(shopId, 1);
    }
  }, [shopId, getShop, getShopNotice]);

  const handleLoadMore = useCallback(() => {
    if (isFetching.current || !hasNext) return;

    pageRef.current += 1;
    getShopNotice(shopId, pageRef.current);
  }, [shopId, hasNext, getShopNotice]);

  if (isShopLoading)
    return (
      <MyShopNotFound>
        <FullPageWrapper style={{ flexDirection: 'column' }}>
          <PulseCircle />
          <PulseCircle style={{ animationDelay: '-1s' }} />
          <LoadingText>더 나은 기회를 찾는 중...</LoadingText>
        </FullPageWrapper>
      </MyShopNotFound>
    );

  if (!shopInfo)
    return (
      <MyShopNotFound>
        가게 정보를 불러올 수 없습니다. 아이디를 확인해주세요.
      </MyShopNotFound>
    );

  if (!shopNoticeList) return null;

  return (
    <>
      <MyShop shopInfo={shopInfo.item} shopId={shopId}></MyShop>
      <MyShopNoticeList
        shopNoticeList={shopNoticeList}
        shopInfo={shopInfo.item}
        handleLoadMore={handleLoadMore}
        hasNext={hasNext}
        isNoticeMoreLoading={isNoticeMoreLoading}
      />
    </>
  );
}

export default ShopDetailPage;
