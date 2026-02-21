import styled from 'styled-components';

const desktop = `@media (max-width: 930px)`;
const tablet = `@media (max-width: 744px)`;
const mobile = `@media (max-width: 375px)`;

export const MyShop = styled.div`
  width: 100%;
  max-width: 964px;
  /* min-height: 81vh; */

  margin: 60px auto 0;

  ${desktop} {
    padding: 0 30px;
  }

  ${tablet} {
    padding: 0 32px;
    margin: 60px auto 0;
  }

  ${mobile} {
    padding: 0 12px;
    margin: 40px auto 0;
  }
`;

export const MainTitle = styled.h1`
  ${({ theme }) => theme.fonts.h1}

  ${mobile} {
    ${({ theme }) => theme.fonts.h3}
  }
`;

export const MyShopContainer = styled.div`
  display: flex;
  margin-top: 24px;
  width: 100%;
  /* max-height: 217px; */
  min-height: 217px;
  gap: 24px;
  padding: 60px 24px;
  border-radius: 12px;
  flex-direction: column;
  border: 1px solid #e5e4e7;
  justify-content: center;
  align-items: center;

  p {
    ${({ theme }) => theme.fonts.body1Regular}
    color: ${({ theme }) => theme.colors.black};

    ${tablet} {
      ${({ theme }) => theme.fonts.body2Regular}
    }
  }

  button {
    width: 100%;
    max-width: 346px;
    height: 47px;
  }

  a {
    width: 100%;
    max-width: 346px;
    height: 47px;
    ${mobile} {
      padding: 9.5px 13.5px;
      width: 108px;
      height: 37px;
      ${({ theme }) => theme.fonts.body2Bold}
    }
  }
`;
