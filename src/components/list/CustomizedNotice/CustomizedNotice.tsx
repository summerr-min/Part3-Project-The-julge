import { MouseEvent, ReactNode, useRef, useState } from 'react';
import CustomizedNoticeUI from './CustomizedNoticeUI';

interface Props {
  children: ReactNode;
}

function CustomizedNotice({ children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [dragging, setDragging] = useState(false);
  const [clickPoint, setClickPoint] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDownEvent = (e: MouseEvent<HTMLDivElement>) => {
    setDragging(true);

    if (containerRef.current) {
      setClickPoint(e.pageX);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleMouseMoveEvent = (e: MouseEvent<HTMLDivElement>) => {
    if (!dragging) return;

    e.preventDefault();

    if (containerRef.current) {
      const walk = e.pageX - clickPoint;

      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <CustomizedNoticeUI
      containerRef={containerRef as React.RefObject<HTMLDivElement>}
      onMouseDown={handleMouseDownEvent}
      onMouseLeave={() => setDragging(false)}
      onMouseUp={() => setDragging(false)}
      onMouseMove={handleMouseMoveEvent}
    >
      {children}
    </CustomizedNoticeUI>
  );
}

export default CustomizedNotice;
