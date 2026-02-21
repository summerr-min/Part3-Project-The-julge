import styled from 'styled-components';

export const MainWrapper = styled.main`
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

export const MainContent = styled.main`
  flex: 1;
`;
