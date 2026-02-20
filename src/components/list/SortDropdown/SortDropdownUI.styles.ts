import styled from 'styled-components';
import SortDropdownIcon from '@/assets/icons/sort_dropdown_icon.svg?react';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 10.5rem;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const SortButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 3rem;
  padding: 1.2rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.gray10};
  border-radius: 0.5rem;
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  right: 1.2rem;
  transform: translateY(-50%);
`;

export const UpArrowIcon = styled(SortDropdownIcon)<{ $isOpen: boolean }>`
  ${({ $isOpen }) => $isOpen && 'transform: scaleY(-1);'}
`;
