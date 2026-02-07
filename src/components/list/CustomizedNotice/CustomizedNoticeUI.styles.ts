import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-direction: column;
  padding: 4rem 1.2rem;
  background-color: ${({ theme }) => theme.colors.red10};

  @media (min-width: 768px) {
    gap: 3.2rem;
    padding: 6rem 3.2rem;
  }

  @media (min-width: 1200px) {
    gap: 3.2rem;
    padding: 6rem 0;
  }
`;

export const SectionContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 96.4rem;
`;

export const SectionName = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  letter-spacing: 0.056rem;
`;

export const CardsContainer = styled.div`
  margin: 0 auto;
  overflow: auto;
  width: 100%;
  max-width: 96.4rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;
