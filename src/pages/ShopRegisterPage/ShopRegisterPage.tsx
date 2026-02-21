import ShopButton from '@/components/employer/Button/ShopButton';
import {
  MainTitle,
  MyShop,
  MyShopContainer,
} from '@/pages/ShopRegisterPage/ShopRegisterPage.styles';
import { Link } from 'react-router-dom';

function ShopRegisterPage() {
  return (
    <MyShop>
      <MainTitle>내 가게</MainTitle>
      <MyShopContainer>
        <p>내 가게를 소개하고 공고도 등록해 보세요.</p>
        <ShopButton as={Link} to={`/shops/register/form`}>
          가게 등록하기
        </ShopButton>
      </MyShopContainer>
    </MyShop>
  );
}

export default ShopRegisterPage;
