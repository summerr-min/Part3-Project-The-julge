import styled from 'styled-components';

export const Wrapper = styled.div<{ isClosed: boolean }>`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
  padding: 1.2rem;
  border: 0.1rem solid
    ${({ theme, isClosed }) =>
      isClosed ? theme.colors.gray30 : theme.colors.gray20};
  width: 17.1rem;
  background-color: ${({ theme }) => theme.colors.white}
  border-radius: 1.2rem;

  @media (min-width: 768px) {
    gap: 2rem;
    width: 31.2rem;
  }

  @media (min-width: 1200px) {
    gap: 2rem;
    width: 31.2rem;
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 8.4rem;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 1.2rem;

  @media (min-width: 768px) {
    height: 16rem;
  }

  @media (min-width: 1200px) {
    height: 16rem;
  }
`;

export const CardImage = styled.img<{ isClosed: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: ${({ isClosed }) => (isClosed ? 0.3 : 1)};
`;

export const LastNoticeText = styled.p<{ isClosed: boolean }>`
  display: ${({ isClosed }) => (isClosed ? 'block' : 'none')};
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 2rem;
  font-weight: 700;
  white-space: nowrap;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.gray30};
  letter-spacing: 0.056rem;

  @media (min-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-direction: column;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
`;

export const RestaurantName = styled.h2<{ isClosed: boolean }>`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2rem;
  color: ${({ theme, isClosed }) =>
    isClosed ? theme.colors.gray30 : theme.colors.black};
  opacity: ${({ isClosed }) => (isClosed ? 0.3 : 1)};
`;

export const WageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.4rem;

  @media (min-width: 768px) {
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    align-items: center;
    justify-content: space-between;
  }
`;

export const Wage = styled.h2<{ isClosed: boolean }>`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme, isClosed }) =>
    isClosed ? theme.colors.gray30 : theme.colors.black};
  opacity: ${({ isClosed }) => (isClosed ? 0.3 : 1)};

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }

  @media (min-width: 1200px) {
    font-size: 2.4rem;
  }
`;
