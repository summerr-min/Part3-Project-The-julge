import styled, { css } from 'styled-components';

interface BadgeProps {
  averageWage: number;
  isClosed: boolean;
}

const baseStyles = css`
  font-size: 1.2rem;
  font-weight: 400;
`;

const tabletStyles = css`
  @media (min-width: 768px) {
    display: inline-flex;
    align-items: center;
    padding: 1.2rem;
    height: 3.6rem;
    font-size: 1.4rem;
    font-weight: 700;
    border-radius: 2rem;
  }
`;

const desktopStyles = css`
  @media (min-width: 1200px) {
    display: inline-flex;
    align-items: center;
    padding: 1.2rem;
    height: 3.6rem;
    font-size: 1.4rem;
    font-weight: 700;
    border-radius: 2rem;
  }
`;

const red40Styles = css`
  color: ${(props) => props.theme.colors.red40};

  @media (min-width: 768px) {
    background-color: ${(props) => props.theme.colors.red40};
    color: ${(props) => props.theme.colors.white};
  }

  @media (min-width: 1200px) {
    background-color: ${(props) => props.theme.colors.red40};
    color: ${(props) => props.theme.colors.white};
  }
`;

const red30Styles = css`
  color: ${(props) => props.theme.colors.red30});
  
  @media (min-width: 768px) {
    background-color: ${(props) => props.theme.colors.red30};
    color: ${(props) => props.theme.colors.white};
  }
  
  @media (min-width: 1200px) {
    background-color: ${(props) => props.theme.colors.red30};
    color: ${(props) => props.theme.colors.white};
  }
`;

const closedStyles = css`
  color: ${(props) => props.theme.colors.gray20};

  @media (min-width: 768px) {
    background-color: ${(props) => props.theme.colors.gray20};
    color: ${(props) => props.theme.colors.white};
  }

  @media (min-width: 1200px) {
    background-color: ${(props) => props.theme.colors.gray20};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const WageBadge = styled.div<BadgeProps>`
  ${baseStyles}
  ${tabletStyles}
  ${desktopStyles}
  
  ${({ averageWage, isClosed }) => {
    if (isClosed) return closedStyles;
    return averageWage >= 50 ? red40Styles : red30Styles;
  }}
`;
