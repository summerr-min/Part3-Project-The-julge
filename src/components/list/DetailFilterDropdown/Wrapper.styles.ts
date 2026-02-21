import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 2.4rem 2rem;
  overflow-y: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};

  @media (min-width: 768px) {
    border: 0.1rem solid ${({ theme }) => theme.colors.gray20};
    box-shadow: 0 0.2rem 0.8rem 0 rgba(120, 116, 134, 0.25);
    position: absolute;
    top: 3.75rem;
    right: 0rem;
    left: initial;
    width: 39rem;
    height: 84.2rem;
    border-radius: 1.2rem;
  }

  @media (min-width: 1200px) {
    border: 0.1rem solid ${({ theme }) => theme.colors.gray20};
    box-shadow: 0 0.2rem 0.8rem 0 rgba(120, 116, 134, 0.25);
    width: 39rem;
    height: 84.2rem;
    border-radius: 1rem;
  }

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
