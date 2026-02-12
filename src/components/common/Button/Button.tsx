// import * as S from './Button.styles';

// export type ButtonVariant = 'primary' | 'outline';
// export type ButtonPreset = 'default' | 'small' | 'modal';

// type ButtonProps = {
//   preset?: ButtonPreset;
//   variant?: ButtonVariant;
//   children: React.ReactNode;
// } & React.ButtonHTMLAttributes<HTMLButtonElement>;

// const Button = ({
//   preset = 'default',
//   variant = 'primary',
//   disabled = false,
//   children,
//   ...rest
// }: ButtonProps) => {
//   // disabled 상태면 강제로 disabled로 처리
//   const resolvedVariant = disabled ? 'disabled' : variant;

//   return (
//     <S.ButtonStyles
//       $preset={preset}
//       $variant={resolvedVariant}
//       disabled={disabled}
//       {...rest}
//     >
//       {children}
//     </S.ButtonStyles>
//   );
// };

// export default Button;
