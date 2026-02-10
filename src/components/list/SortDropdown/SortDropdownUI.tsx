import { Dispatch, RefObject, SetStateAction } from 'react';
import SortDropdownList from './SortDropdownList';
import {
  Wrapper,
  SortButton,
  ArrowButton,
  UpArrowIcon,
} from './SortDropdownUI.styles';

type Category = 'time' | 'pay' | 'hour' | 'shop';

interface Props {
  dropdownRef: RefObject<HTMLDivElement | null>;
  item: string[];
  selectedLocation: string;
  isOpenDropdown: boolean;
  handleInputClick: () => void;
  toggleDropdown: () => void;
  setSelectedLocation: Dispatch<SetStateAction<string>>;
  closeDropdown: () => void;
  setCategory: Dispatch<SetStateAction<Category>>;
}

function SortDropdownUI({
  dropdownRef,
  item,
  selectedLocation,
  isOpenDropdown,
  handleInputClick,
  toggleDropdown,
  setSelectedLocation,
  closeDropdown,
  setCategory,
}: Props) {
  return (
    <Wrapper ref={dropdownRef}>
      <SortButton type="button" onClick={handleInputClick}>
        {selectedLocation}
      </SortButton>
      <ArrowButton type="button" onClick={toggleDropdown}>
        <UpArrowIcon $isOpen={isOpenDropdown} />
      </ArrowButton>
      {isOpenDropdown && (
        <SortDropdownList
          item={item}
          onClick={setSelectedLocation}
          onClose={closeDropdown}
          setCategory={setCategory}
        />
      )}
    </Wrapper>
  );
}

export default SortDropdownUI;
