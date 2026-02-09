import styled from 'styled-components';
import { Link } from 'react-router-dom';

const tablet = `@media (max-width: 1024px)`;
const mobile = `@media (max-width: 743px)`;

export const Header = styled.header`
  width: 100%;
  background: #ffffff;
  margin-top: 16px;
`;

export const Nav = styled.nav`
  max-width: 1440px;
  height: 70px;

  margin: 0 auto;
  padding: 0 24px;

  display: flex;
  align-items: center;
  gap: 30px;

  ${tablet} {
    max-width: 744px;
    padding: 0 24px 0 24px;
    gap: 16px;
  }
  ${mobile} {
    max-width: 375px;
    height: 102px;
    flex-wrap: wrap;
    row-rap: 12px;
    padding: 12px 16px;
    align-items: flex-start;
  }
`;

export const LogoLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  width: 112px;
  height: 40px;

  svg {
    width: 100%;
    height: 100%;
  }

  ${mobile} {
    width: 84px;
    height: 30px;
    order: 1;
  }
`;

export const SearchBar = styled.div`
  width: 450px;
  height: 40px;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px;
  border-radius: 10px;
  background: #f2f2f3;

  ${tablet} {
    width: 344px;
  }

  ${mobile} {
    width: 355px;
    height: 36px;
    padding: 8px;
    gap: 8px;
  }
`;

export const SearchIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  border: 0;
  background: transparent;
  outline: none;

  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0;

  &::placeholder {
    color: #a4a1aa;
  }
`;

export const Middle = styled.div`
  display: contents;

  ${tablet} {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${mobile} {
    display: block;
    flex: none;
    width: 100%;
    order: 3;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  gap: 40px;

  ${tablet} {
    gap: 12px;
    width: fit-content;
    min-height: 24px;
  }

  ${mobile} {
    gap: 16px;
    width: fit-content;
    min-height: 20px;
    order: 2;
  }
`;

export const MenuLink = styled(Link)`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0;
  color: #111322;
  text-decoration: none;

  display: inline-flex;
  align-items: center;
`;

export const TextButton = styled.button`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0;
  color: #111322;

  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
`;
export const IconButton = styled.button`
  width: 24px;
  height: 24px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;

  svg {
    width: 20.4px;
    height: 20.4px;
    fill: #000000;
  }

  ${mobile} {
    width: 17px;
    height: 17px;

    svg {
      width: 17px;
      height: 17px;
    }
  }
`;

export const AuthFrame = styled.div`
  display: flex;
  align-items: center;

  gap: 40px;
  width: fit-content;
  min-height: 20px;

  ${mobile} {
    gap: 16px;
    min-height: 17px;
  }
`;

export const AuthLink = styled(Link)`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0;
  color: #111322;

  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
