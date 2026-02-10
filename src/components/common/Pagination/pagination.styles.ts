import styled from 'styled-components';

export const WrapperStyles = styled.nav`
  width: 100%;
`;

export const ContainerStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const NumberGroupStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const PageButtonStyles = styled.button<{ $active?: boolean }>`
  width: 40px;
  height: 40px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  border: none;

  font-size: 14px;
  font-weight: 400;
  line-height: 22px;

  background: ${({ theme, $active }) =>
    $active ? theme.colors.red30 : 'transparent'};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.white : theme.colors.black};

  cursor: pointer;
`;

export const ArrowButtonStyles = styled.button`
  width: 20px;
  height: 20px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: none;
  background: transparent;

  font-size: 20px;
  line-height: 1;

  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;

  &:disabled {
    cursor: default;
    color: ${({ theme }) => theme.colors.gray40};
  }
`;
