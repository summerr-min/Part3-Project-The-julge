import styled from 'styled-components';

export const FilterWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;

  @media (min-width: 744px) {
    position: static;
    width: auto;
    height: auto;
  }
`;
export const FilterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 2.4rem 2rem;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.white};

  /*모바일 전체 화면*/
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100000;

  @media (min-width: 744px) {
    position: absolute;
    top: 100%;
    margin-top: 0.8rem;
    right: 0;
    left: initial;
    width: 39rem;
    height: 84.5rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.gray20};
    box-shadow: 0 0.2rem 0.8rem 0 rgba(120, 116, 134, 0.25);
    border-radius: 1.2rem;
  }

  /* 스크롤바 */
  &::-webkit-scrollbar {
    width: 1.3rem;
  }

  &::-webkit-scrollbar-thumb {
    border: 0.2rem solid transparent;
    background-color: hsl(0, 0%, 67%);
    background-clip: padding-box;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.red30};
  }

  &::-webkit-scrollbar-track {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;
