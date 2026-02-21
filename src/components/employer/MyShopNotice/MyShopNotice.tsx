import {
  Categorytxt,
  MainTitle,
  MainTitleWrap,
  MyShopAddressGroup,
  MyShopContainer,
  MyShopImg,
  MyShopInfoTxt,
  MyshopNoticeCardPriceGapTxt,
  MyShopNoticeCardTimeGroup,
  MyShopNoticeDescription,
  MyShopNoticeInfo,
  MyShopPayWrap,
  MyShopTxtWrap,
} from './MyShopNotice.styles';

import LocatedIcon from '@/assets/icons/icon_located.svg?react';
import ClockIcon from '@/assets/icons/icon_clock.svg?react';
import { MyShopButtonGroup } from '../MyShop/MyShop.styles';
import { StyledShopButton } from '../Button/ShopButton.styles';
import { Link } from 'react-router-dom';
import formatNoticeTime from '@/utils/formatNoticeTime';
import { ShopNotice } from '@/types/shop.types';
import { handleImgError } from '@/utils/shopUtils';
import WageText from '../Wage/WageText';
import { memo } from 'react';

interface Props {
  shopNotice: ShopNotice;
}

function MyShopNotice({ shopNotice }: Props) {
  const noticeId = shopNotice.id;
  const shopId = shopNotice.shop.item.id;

  const PriceText = memo(({ value }: { value: number }) => {
    return <span>{value.toLocaleString()}원</span>;
  });

  return (
    <MyShopNoticeInfo>
      <MainTitleWrap>
        <Categorytxt>{shopNotice.shop.item.category}</Categorytxt>
        <MainTitle>{shopNotice.shop.item.name}</MainTitle>
      </MainTitleWrap>
      <MyShopContainer>
        <MyShopImg
          src={shopNotice.shop.item.imageUrl}
          onError={handleImgError}
          alt="내 가게 이미지"
        />
        <MyShopTxtWrap>
          <Categorytxt>시급</Categorytxt>
          <MyShopPayWrap>
            {/* <MainTitle>{shopNotice.hourlyPay.toLocaleString()}원</MainTitle> */}
            <MainTitle>
              <PriceText value={shopNotice.hourlyPay} />
            </MainTitle>
            <MyshopNoticeCardPriceGapTxt>
              <WageText
                original={shopNotice.shop.item.originalHourlyPay}
                current={shopNotice.hourlyPay}
              />
            </MyshopNoticeCardPriceGapTxt>
          </MyShopPayWrap>
          <MyShopNoticeCardTimeGroup>
            <ClockIcon className="clock-icon" />
            <p>{`${formatNoticeTime(shopNotice.startsAt, shopNotice.workhour)}`}</p>
          </MyShopNoticeCardTimeGroup>
          <MyShopAddressGroup>
            <LocatedIcon className="location-icon" />
            <p>{shopNotice.shop.item.address1}</p>
          </MyShopAddressGroup>
          <MyShopInfoTxt>{shopNotice.shop.item.description}</MyShopInfoTxt>
          <MyShopButtonGroup>
            <StyledShopButton
              $variant="outline"
              as={Link}
              to={`/shops/${shopId}/notices/${noticeId}/edit`}
            >
              공고 편집하기
            </StyledShopButton>
          </MyShopButtonGroup>
        </MyShopTxtWrap>
      </MyShopContainer>
      <MyShopNoticeDescription>
        <span>공고 설명</span>
        <p>{shopNotice.description}</p>
      </MyShopNoticeDescription>
    </MyShopNoticeInfo>
  );
}

export default memo(MyShopNotice);
