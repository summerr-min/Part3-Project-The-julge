import styled from 'styled-components';
import { Link } from 'react-router-dom';

const tablet = `@media (max-width: 767px)`;
const mobile = `@media (max-width: 375px)`;

export const Header = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
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
    max-width: 767px;
    padding: 0 24px;
    gap: 16px;
  }

  ${mobile} {
    max-width: 375px;
    height: 102px;

    flex-wrap: wrap;
    row-gap: 12px;
    padding: 12px 16px;
    align-items: flex-start;
  }
`;

export const LogoLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  width: 112px;
  height: 40px;
  flex-shirnk: 0;

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
  flex: 1;
  min-width: 0;
  max-width: 450px;
  height: 40px;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.gray10};

  ${tablet} {
    max-width: 344px;
  }

  ${mobile} {
    max-width: 335px;
    width: 100%;
    height: 36px;
    padding: 8px;
    gap: 8px;
    box-sizing: border-box;
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

  ${({ theme }) => theme.fonts.body2Regular};
  color: ${({ theme }) => theme.colors.black};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray40};
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
    flex-shrink: 0;
  }

  ${mobile} {
    gap: 16px;
    width: fit-content;
    min-height: 20px;
    order: 2;
  }
`;

export const MenuLink = styled(Link)`
  ${({ theme }) => theme.fonts.body1Bold};
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;

  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  word-break: keep-all;
  overflow-wrap: normal;
`;

export const TextButton = styled.button`
  ${({ theme }) => theme.fonts.body1Bold};
  color: ${({ theme }) => theme.colors.black};

  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;

  display: inline-flex;
  align-items: center;

  white-space: nowrap;
  word-break: keep-all;
  overflow-wrap: normal;
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
    fill: ${({ theme }) => theme.colors.black};
    margin-bottom: 5.5px;
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

  flex-shrink: 0;

  ${mobile} {
    gap: 16px;
    min-height: 17px;
  }
`;

export const AuthLink = styled(Link)`
  ${({ theme }) => theme.fonts.body1Bold};
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;

  white-space: nowrap;
  word-break: keep-all;
  overflow-wrap: normal;
`;

export const NotiWrapperStyles = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`;
