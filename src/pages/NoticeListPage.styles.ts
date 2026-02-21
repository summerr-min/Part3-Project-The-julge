import styled from 'styled-components';

export const NoticeEntireContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  zoom: 0.8;

  @media (min-width: 375px) {
    zoom: 0.8;
    gap: 4rem;
    margin: 100px 0;
  }

  @media (min-width: 768px) {
    zoom: 0.8;
    gap: 4rem;
    margin: 100px 0;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const FilterDropdownContainer = styled.div`
  position: relative;
`;
