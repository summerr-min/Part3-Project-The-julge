import React from 'react';
import * as S from './Button.styles';

export type ButtonVariant = 'primary' | 'outline' | 'disabled';
export type ButtonPreset = 'default' | 'middle' | 'small';

type ButtonProps = {
  preset?: ButtonPreset;
  variant?: ButtonVariant;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  preset = 'default',
  variant = 'primary',
  disabled = false,
  children,
  ...rest
}: ButtonProps) => {
  // disabled면 스타일도 disabled로 보이게 처리
  const buttonVariant: ButtonVariant = disabled ? 'disabled' : variant;

  return (
    <S.ButtonStyles
      $preset={preset}
      $variant={buttonVariant}
      disabled={disabled}
      {...rest}
    >
      {children}
    </S.ButtonStyles>
  );
};

export default Button;
