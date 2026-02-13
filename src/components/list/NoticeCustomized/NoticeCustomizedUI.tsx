import { MouseEvent, ReactNode } from 'react';
import {
  Wrapper,
  SectionContainer,
  SectionName,
  CardsContainer,
} from './NoticeCustomizedUI.styles';

interface Props {
  containerRef: React.RefObject<HTMLDivElement>;
  onMouseDown: (e: MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: () => void;
  onMouseUp: () => void;
  onMouseMove: (e: MouseEvent<HTMLDivElement>) => void;
  onMouseEnter: () => void;
  children: ReactNode;
}

function NoticeCustomizedUI({
  containerRef,
  onMouseDown,
  onMouseLeave,
  onMouseUp,
  onMouseMove,
  onMouseEnter,
  children,
}: Props) {
  return (
    <Wrapper>
      <SectionContainer>
        <SectionName>맞춤 공고</SectionName>
      </SectionContainer>
      <CardsContainer
        ref={containerRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onMouseEnter={onMouseEnter}
      >
        {children}
      </CardsContainer>
    </Wrapper>
  );
}

export default NoticeCustomizedUI;
