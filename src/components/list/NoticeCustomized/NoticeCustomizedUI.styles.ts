import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-direction: column;
  padding: 4rem 1.2rem;
  min-height: 40.5rem;
  background-color: ${({ theme }) => theme.colors.red10};

  zoom: 0.8;

  @media (max-width: 375px) {
  }

  @media (max-width: 768px) {
    zoom: 0.8;
    gap: 3.2rem;
    padding: 6rem 3.2rem 2rem;
    /* min-height: 53.2rem; */
  }

  @media (max-width: 1200px) {
    zoom: 0.8;
    gap: 3.2rem;
    padding: 6rem 0;
    /* min-height: 53.2rem; */
  }
`;

export const SectionContainer = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const SectionName = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  letter-spacing: 0.056rem;

  margin: 0 auto;
  width: 100%;
  max-width: 96.4rem;

  @media (max-width: 768px) {
    ${({ theme }) => theme.fonts.h1};
    padding-left: 1.6rem;
  }

  @media (max-width: 375px) {
    margin-bottom: 20px;
    ${({ theme }) => theme.fonts.h2};
  }
`;

export const CardsContainer = styled.div`
  margin: 0 auto;
  overflow-x: auto;
  width: 100%;
  max-width: 96.4rem;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;
