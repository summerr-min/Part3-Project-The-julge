import styled from 'styled-components';

export const Wrapper = styled.ul<{ type: 'customized' | 'entire' }>`
  display: flex;
  gap: 0.4rem;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (min-width: 768px) {
    gap: 1.4rem;
  }

  @media (min-width: 1200px) {
    gap: 1.4rem;
  }

  /* entire 타입일 때만 grid 레이아웃 적용 */
  ${({ type }) =>
    type === 'entire' &&
    `
    display: grid;
    grid-template-columns: 17.1rem 17.1rem;
    column-gap: 0.8rem;
    row-gap: 1.6rem;

    @media (min-width: 768px) {
      grid-template-columns: 31.2rem 31.2rem;
      column-gap: 1.4rem;
      row-gap: 3.2rem;
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 1.4rem;
      row-gap: 3.2rem;
    }
  `}
`;
