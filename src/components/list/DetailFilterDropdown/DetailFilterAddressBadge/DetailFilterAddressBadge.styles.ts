import styled from 'styled-components';

export const Badge = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1rem;
  width: fit-content;
  background: ${({ theme }) => theme.colors.red10};
  border-radius: 2rem;
`;

export const AddressText = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;
