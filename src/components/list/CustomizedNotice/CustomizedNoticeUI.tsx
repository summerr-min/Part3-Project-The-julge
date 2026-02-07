import { MouseEvent, ReactNode } from 'react';
import {
  Wrapper,
  SectionContainer,
  SectionName,
  CardsContainer,
} from './CustomizedNoticeUI.styles';

interface Props {
  containerRef: React.RefObject<HTMLDivElement>;
  onMouseDown: (e: MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: () => void;
  onMouseUp: () => void;
  onMouseMove: (e: MouseEvent<HTMLDivElement>) => void;
  children: ReactNode;
}

function CustomizedNoticeUI({
  containerRef,
  onMouseDown,
  onMouseLeave,
  onMouseUp,
  onMouseMove,
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
      >
        {children}
      </CardsContainer>
    </Wrapper>
  );
}

export default CustomizedNoticeUI;
