import styled, { css } from 'styled-components';
import type { ButtonPreset, ButtonVariant } from './Button';

type ButtonStyleProps = {
  $preset: ButtonPreset;
  $variant: ButtonVariant;
};

// 버튼 크기
const presetStyles = {
  default: css`
    width: 350px;
    height: 48px;
    border-radius: 6px;

    padding: 14px 136px;
    gap: 8px;

    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    white-space: nowrap;
  `,

  middle: css`
    width: fit-content;
    height: 37px;
    border-radius: 6px;

    padding: 10px 20px;
    gap: 8px;

    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    white-space: nowrap;
  `,

  small: css`
    width: fit-content;
    height: 32px;
    border-radius: 6px;

    padding: 8px 12px;
    gap: 8px;

    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    white-space: nowrap;
  `,
};

// 버튼 색상
const variantStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid transparent;
  `,

  outline: css`
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  `,

  disabled: css`
    background-color: ${({ theme }) => theme.colors.gray40};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid transparent;
    cursor: not-allowed;
  `,
};

export const ButtonStyles = styled.button<ButtonStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  user-select: none;

  ${({ $preset }) => presetStyles[$preset]}
  ${({ $variant }) => variantStyles[$variant]}

  &:disabled {
    pointer-events: none;
  }
`;
