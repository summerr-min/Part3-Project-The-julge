import styled from 'styled-components';
import React from 'react';

export const dropdownWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const selectBox = styled.button<
  {
    $hasValue: boolean;
    $isBlack?: boolean;
  } & React.ButtonHTMLAttributes<HTMLButtonElement> //htmlFor와 id 연결 타입 붙이기 위해
>`
  width: 100%;

  border: 1px solid ${({ theme }) => theme.colors.gray30};
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  ${({ theme, $isBlack }) =>
    $isBlack ? theme.fonts.body2Bold : theme.fonts.body1Regular};

  background-color: ${({ theme, $isBlack }) =>
    $isBlack ? theme.colors.gray10 : theme.colors.white};

  color: ${({ theme, $hasValue, $isBlack }) =>
    $isBlack || $hasValue ? theme.colors.black : theme.colors.gray30};
`;
// 목록  전체
export const MenuList = styled.ul`
  margin: 0;
  margin-top: 8px;
  padding: 0;
  width: 100%; // 부모넓이와 크기 맟춤
  top: 100%;
  text-align: center;
  ${({ theme }) => theme.fonts.body1Regular};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  position: absolute;
  box-shadow: 0px 4px 25px 0px #0000001a;
  border-radius: 6px;

  /* 스크롤 설정 */
  max-height: 230px;
  overflow-y: auto; // 내용이 넘칠 때만 스크롤바
  list-style: none;

  /* 스크롤바 디자인 */
  &::-webkit-scrollbar {
    width: 12px; /* 막대 4px 여백 4px*/
  }
  &::-webkit-scrollbar-thumb {
    /* padding/margin 작동안함 */
    background: ${({ theme }) => theme.colors.gray50};
    border-radius: 40px;

    min-height: 64px;
    /*오른쪽 여백 */
    background-clip: padding-box;
    border: 4px solid transparent; /*투명한 박스*/
    border-left: 4px solid transparent;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

// 드롭다운 개별 항목
export const MenuItem = styled.li`
  ${({ theme }) => theme.fonts.body2Regular};
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
  height: 16px;
`;
