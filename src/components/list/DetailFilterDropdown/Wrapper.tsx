import { MouseEvent, ReactNode, useRef } from 'react';
import { FilterWrapper, FilterContainer } from './Wrapper.styles';

interface Props {
  onClose: () => void;
  children: ReactNode;
}

function Wrapper({ onClose, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent<HTMLDivElement>) => {
    if (ref.current && !ref.current.contains(event.target as Node)) onClose();
  };

  return (
    <FilterWrapper onClick={handleOutsideClick}>
      <FilterContainer ref={ref} onClick={(e) => e.stopPropagation()}>
        {children}
      </FilterContainer>
    </FilterWrapper>
  );
}

export default Wrapper;
