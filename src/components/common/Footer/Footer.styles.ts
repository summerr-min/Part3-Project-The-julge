import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  padding: 2rem 1.25rem 1rem 1.25rem;

  background: ${(props) => props.theme.colors.gray10};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  color: ${(props) => props.theme.colors.gray50};
  grid-template-areas:
    'm r'
    'l .';
  grid-gap: 2.5rem;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-self: stretch;
    padding: 2.3125rem 2rem;
    font-size: 1rem;
    line-height: 1.625rem;
  }

  @media (min-width: 1200px) {
    padding: 2.3125rem 14.875rem;
  }
`;

export const LeftWrapper = styled.div`
  grid-area: l;
`;

export const MiddleWrapper = styled.div`
  display: flex;
  gap: 1.875rem;
  grid-area: m;
`;

export const RightWrapper = styled.div`
  display: flex;
  gap: 0.62rem;
  justify-content: flex-end;
  grid-area: r;
`;

export const Icon = styled.div`
  width: 1.5625rem;
  height: 1.5625rem;
`;
