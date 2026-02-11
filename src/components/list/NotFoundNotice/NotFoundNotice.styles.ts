import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Description = styled.p`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.gray30};
`;
