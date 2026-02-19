import styled from 'styled-components';

export const NoticeEntireContainer = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  flex-direction: column;
  padding: 4rem 0 8rem;

  @media (min-width: 768px) {
    gap: 4rem;
    padding: 6rem 0;
  }

  @media (min-width: 1200px) {
    gap: 4rem;
    padding: 6rem 0;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const FilterDropdownContainer = styled.div`
  position: relative;
`;
