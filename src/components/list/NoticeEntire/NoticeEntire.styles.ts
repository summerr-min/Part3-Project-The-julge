import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 1.5rem;
<<<<<<< HEAD
  align-items: flex-start;
=======
  align-items: center;
>>>>>>> 33f716660a58d2cceb0c4b96e3dff562e65f933e
  flex-direction: column;
  min-width: 35.1rem;

  @media (min-width: 768px) {
    gap: 3.2rem;
    min-width: 68rem;
  }

  @media (min-width: 1200px) {
    gap: 3.2rem;
    min-width: 96.4rem;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
<<<<<<< HEAD
=======
  gap: 1.6rem;
>>>>>>> 33f716660a58d2cceb0c4b96e3dff562e65f933e
  align-items: flex-start;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const SectionName = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--black);
  letter-spacing: 0.056rem;
`;
