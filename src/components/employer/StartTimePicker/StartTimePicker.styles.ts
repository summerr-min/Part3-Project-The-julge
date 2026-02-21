import styled from 'styled-components';

interface DateDivProps {
  $default: string;
}

export const DateShowWrap = styled.div`
  position: relative;
  width: 100%;
  height: 58px;
  cursor: pointer;
`;

export const DateShowDiv = styled.div<DateDivProps>`
  width: 100%;
  height: 100%;
  padding: 16px 20px;
  border-radius: 6px;
  gap: 10px;
  ${({ theme }) => theme.fonts.body1Regular};
  border: 1px solid ${({ theme }) => theme.colors.gray30};
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  color: ${({ $default, theme }) =>
    $default === '날짜를 선택하세요'
      ? theme.colors.gray50
      : theme.colors.black};
`;

export const DateInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;
`;
