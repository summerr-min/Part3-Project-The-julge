import styled, { css } from 'styled-components';

// 미디어 쿼리
const hideColumnsResponsive = css`
  @media (max-width: 1024px) {
    &:nth-child(3) {
      display: none;
    }
  }

  @media (max-width: 767px) {
    &:nth-child(2),
    &:nth-child(3) {
      display: none;
    }
  }
`;

export const WrapperStyles = styled.div`
  width: 100%;
  max-width: 964px;

  background: ${({ theme }) => theme.colors.white};

  border: 1px solid ${({ theme }) => theme.colors.gray20};
  border-radius: 10px;
`;

export const TableStyles = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TheadStyles = styled.thead`
  background: ${({ theme }) => theme.colors.red10};
`;

export const ThStyles = styled.th`
  height: 50px;
  padding: 14px 12px;

  text-align: left;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray20};

  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.black};

  ${hideColumnsResponsive}
`;

export const TdStyles = styled.td`
  height: 64px;
  padding: 20px 12px;

  text-align: left;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray20};

  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.black};

  ${hideColumnsResponsive}
`;
