import {
  Categorytxt,
  MainTitle,
  MyShopAddressGroup,
  MyShopButtonGroup,
  MyShopContainer,
  MyShopImg,
  MyShopInfo,
  MyShopInfoTxt,
  MyShopTxtWrap,
  StyledShopButton,
} from './MyShop.styles';
import LocatedIcon from '@/assets/icons/icon_located.svg?react';
import { Link } from 'react-router-dom';
import { ShopInfo } from '@/types/shop.types';
import { handleImgError } from '@/utils/shopUtils';
import { memo } from 'react';

interface Props {
  shopInfo: ShopInfo;
  shopId: string;
}

function MyShop({ shopInfo, shopId }: Props) {
  return (
    <MyShopInfo>
      <MainTitle>내 가게</MainTitle>
      <MyShopContainer>
        <MyShopImg
          id="myShopImg"
          src={shopInfo.imageUrl}
          onError={handleImgError}
          alt="내 가게 이미지"
        />
        <MyShopTxtWrap>
          <Categorytxt>{shopInfo.category}</Categorytxt>
          <MainTitle>{shopInfo.name}</MainTitle>
          <MyShopAddressGroup>
            <LocatedIcon className="location-icon" />
            <p>{shopInfo.address1}</p>
          </MyShopAddressGroup>
          <MyShopInfoTxt>{shopInfo.description}</MyShopInfoTxt>
          <MyShopButtonGroup>
            <StyledShopButton
              $variant="outline"
              as={Link}
              to={`/shops/${shopId}/edit`}
            >
              편집하기
            </StyledShopButton>
            <StyledShopButton as={Link} to={`/shops/${shopId}/notices`}>
              공고 등록하기
            </StyledShopButton>
          </MyShopButtonGroup>
        </MyShopTxtWrap>
      </MyShopContainer>
    </MyShopInfo>
  );
}

export default memo(MyShop);
