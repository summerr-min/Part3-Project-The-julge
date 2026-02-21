import styled, { DefaultTheme } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 2.4rem;
  flex-direction: column;
  padding: 4rem 0;
  width: max-content;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
`;

export const Category = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};

  @media (min-width: 768px) {
    font-size: 1.6rem;
    line-height: 2rem;
  }
`;

export const ShopName = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};

  @media (min-width: 768px) {
    font-size: 2.8rem;
    letter-spacing: 0.56px;
  }
`;

export const ShopInfoContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
  padding: 2rem;
  margin: 0 auto;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray20};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1.2rem;

  @media (min-width: 768px) {
    gap: 1.6rem;
    padding: 2.4rem;
  }

  @media (min-width: 1200px) {
    gap: 3rem;
    flex-direction: row;
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 31.1rem;
  height: 17rem;
  background-color: #000;
  border-radius: 1.2rem;

  @media (min-width: 768px) {
    width: 63.2rem;
    height: 36rem;
  }

  @media (min-width: 1200px) {
    width: 54rem;
    height: 30.8rem;
  }
`;

export const LastNotice = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 2rem;
  font-weight: 700;
  white-space: nowrap;
  transform: translate(-50%, -50%);
  opacity: 1;
  color: ${({ theme }) => theme.colors.gray30};

  @media (min-width: 768px) {
    font-size: 2.8rem;
    letter-spacing: 0.056rem;
  }

  @media (min-width: 1200px) {
    font-size: 2.8rem;
    letter-spacing: 0.056rem;
  }
`;

export const StyledImage = styled.img<{ $isClosed?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  ${({ $isClosed, theme }: { $isClosed?: boolean; theme: DefaultTheme }) =>
    $isClosed &&
    `
    color: ${theme.colors.gray30};
  `}
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
  padding-top: 1.6rem;
`;

export const HourlyPayContainer = styled.div``;

export const HourlyPayName = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const HourlyPayDescriptionContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

export const HourlyPayDescription = styled.p`
  font-size: 2.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  letter-spacing: 0.056rem;
`;

export const Description = styled.p`
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: ${({ theme }) => theme.colors.black};
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-grow: 2;
`;

export const DisabledButtonWrapper = styled.div`
  width: 346px;
  height: 48px;
  display: flex;
  justify-content: center;

  flex: 0 0 auto;

  & > button {
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }
`;
