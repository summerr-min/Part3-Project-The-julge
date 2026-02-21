import { ReactNode, ButtonHTMLAttributes, ElementType } from 'react';
import { StyledShopButton } from './ShopButton.styles';
import { LinkProps } from 'react-router-dom';

interface ShopButtonProps extends Partial<
  ButtonHTMLAttributes<HTMLButtonElement>
> {
  children: ReactNode;
  $variant?: 'primary' | 'outline';
  as?: ElementType;
  to?: LinkProps['to'];
}

function ShopButton({
  children,
  $variant = 'primary',
  ...rest
}: ShopButtonProps) {
  return (
    <StyledShopButton $variant={$variant} {...rest}>
      {children}
    </StyledShopButton>
  );
}

export default ShopButton;
