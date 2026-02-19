import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 2.4rem;
  flex-direction: column;
  width: 100%;
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
`;
