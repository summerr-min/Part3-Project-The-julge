import styled from 'styled-components';

export const dropdownWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const selectBox = styled.div<{ $hasValue: boolean }>`
  border: 1px solid ${({ theme }) => theme.colors.gray30};
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  ${({ theme }) => theme.fonts.body1Regular};
  color: ${({ theme, $hasValue }) =>
    $hasValue ? theme.colors.black : theme.colors.gray30};
`;
// 목록  전체
export const MenuList = styled.ul`
  width: 100%; // 부모넓이와 크기 맟춤
  top: 100%;
  text-align: center;
  ${({ theme }) => theme.fonts.body1Regular};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  position: absolute;
  box-shadow: 0px 4px 25px 0px #0000001a;
  border-radius: 6px;
  margin-top: 8px;

  /* 스크롤 설정 */
  max-height: 230px;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  list-style: none;

  /* 스크롤바 디자인 */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray50};
    border-radius: 10px;
  }
`;

// 드롭다운 개별 항목 (li)
export const MenuItem = styled.li`
  ${({ theme }) => theme.fonts.body2Regular};
  padding: 12px 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  padding: 12px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray10};

  /* 마지막 항목은 밑줄  제거 */
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray5};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
export const ArrowIcon = styled.div`
  width: 16px;
  hight: 16px;
`;
