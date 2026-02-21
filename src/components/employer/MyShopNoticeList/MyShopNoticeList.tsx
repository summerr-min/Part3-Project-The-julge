import {
  MyShopNotice,
  MyshopNoticeContainer,
  MainTitle,
  MyshopNoticeListWrap,
  MyshopNoticeCard,
  MyshopNoticeCardImgGroup,
  MyShopNoticeCardImg,
  FinishedBadge,
  MyshopNoticeCardTxtGroup,
  SubTitle,
  MyShopNoticeCardTimeGroup,
  MyShopNoticeCardAddressGroup,
  MyshopNoticeCardPriceGroup,
  PayTitle,
  MyshopNoticeCardPriceGapTxt,
  MyshopNoticeNoList,
  DotWrapper,
  Dot,
} from './MyShopNoticeList.styles';

import LocatedIcon from '@/assets/icons/icon_located.svg?react';
import ClockIcon from '@/assets/icons/icon_clock.svg?react';
import ShopButton from '../Button/ShopButton';
import { Link } from 'react-router-dom';
import formatNoticeTime from '@/utils/formatNoticeTime';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { ShopInfo, ShopNoticeR } from '@/types/shop.types';
import {
  getStatusNotice,
  handleImgError,
  isExpiredTime,
} from '@/utils/shopUtils';
import WageText from '../Wage/WageText';

interface Props {
  shopNoticeList: ShopNoticeR[];
  shopInfo: ShopInfo;
  handleLoadMore: () => void;
  hasNext: boolean;
  isNoticeMoreLoading: boolean;
}

function MyShopNoticeList({
  shopNoticeList,
  shopInfo,
  handleLoadMore,
  hasNext,
  isNoticeMoreLoading,
}: Props) {
  if (!shopInfo.id) return null;

  const observerRef = useInfiniteScroll({
    onIntersect: handleLoadMore,
    enabled: hasNext,
    loading: isNoticeMoreLoading,
    rootMargin: '150px',
  });

  if (!shopNoticeList) return null;

  return (
    <MyShopNotice>
      <MyshopNoticeContainer>
        <MainTitle>등록한 공고</MainTitle>
        <MyshopNoticeListWrap>
          {shopNoticeList.map((shopNotice: ShopNoticeR) => (
            <MyshopNoticeCard
              as={Link}
              to={`/shops/${shopInfo.id}/notices/${shopNotice.item.id}`}
              $disabled={
                shopNotice.item.closed ||
                isExpiredTime(shopNotice.item.startsAt)
              }
              key={shopNotice.item.id}
            >
              <MyshopNoticeCardImgGroup>
                <MyShopNoticeCardImg
                  id="myShopImg"
                  src={shopInfo.imageUrl}
                  onError={handleImgError}
                  alt="공고 내가게 이미지"
                />
                {getStatusNotice(shopNotice) === 'expired' ? (
                  <FinishedBadge>지난 공고</FinishedBadge>
                ) : (
                  <FinishedBadge>마감 완료</FinishedBadge>
                )}
              </MyshopNoticeCardImgGroup>
              <MyshopNoticeCardTxtGroup>
                <SubTitle>{shopInfo.name}</SubTitle>
                <MyShopNoticeCardTimeGroup>
                  <ClockIcon className="clock-icon" />
                  <p>
                    {`${formatNoticeTime(shopNotice.item.startsAt, shopNotice.item.workhour)}`}
                  </p>
                </MyShopNoticeCardTimeGroup>
                <MyShopNoticeCardAddressGroup>
                  <LocatedIcon className="location-icon" />
                  <p>{shopInfo.address1}</p>
                </MyShopNoticeCardAddressGroup>
                <MyshopNoticeCardPriceGroup>
                  <PayTitle>
                    {shopNotice.item.hourlyPay.toLocaleString()}원
                  </PayTitle>
                  <MyshopNoticeCardPriceGapTxt>
                    <WageText
                      original={shopInfo.originalHourlyPay}
                      current={shopNotice.item.hourlyPay}
                    />
                  </MyshopNoticeCardPriceGapTxt>
                </MyshopNoticeCardPriceGroup>
              </MyshopNoticeCardTxtGroup>
            </MyshopNoticeCard>
          ))}
        </MyshopNoticeListWrap>
        {!isNoticeMoreLoading && shopNoticeList.length === 0 && (
          <MyshopNoticeNoList>
            <p>공고를 등록해 보세요.</p>
            <ShopButton as={Link} to={`/shops/${shopInfo.id}/notices`}>
              공고등록하기
            </ShopButton>
          </MyshopNoticeNoList>
        )}
        <div
          ref={observerRef}
          style={{
            height: '120px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/* TODO: 스피너 or 스켈레톤 */}
          {isNoticeMoreLoading && (
            <div style={{ marginTop: '30px' }}>
              <DotWrapper>
                <Dot $delay="-0.32s" />
                <Dot $delay="-0.16s" />
                <Dot $delay="-0.01s" />
              </DotWrapper>
            </div>
          )}
        </div>
      </MyshopNoticeContainer>
    </MyShopNotice>
  );
}

export default MyShopNoticeList;
