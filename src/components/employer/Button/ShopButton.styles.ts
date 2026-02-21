import styled, { css } from 'styled-components';

interface ButtonShopProps {
  $variant?: 'primary' | 'outline';
}

export const StyledShopButton = styled.button<ButtonShopProps>`
  width: 100%;
  padding: 14px;
  border-radius: 6px;
  ${({ theme }) => theme.fonts.body1Bold}

  line-height: 20px;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  margin-bottom: 0;
  /* text-decoration: none; */

  &:disabled {
    background: ${({ theme }) => theme.colors.gray40};
    cursor: not-allowed;
  }

  ${({ $variant, theme }) =>
    $variant === 'outline'
      ? css`
          background: ${theme.colors.white};
          border: 1px solid ${theme.colors.primary};
          color: ${theme.colors.primary};
        `
      : css`
          background: ${theme.colors.primary};
          color: ${theme.colors.white};
          border: none;
        `};
`;
