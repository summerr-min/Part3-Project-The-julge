import { Dispatch, RefObject, SetStateAction } from 'react';
import SortDropdownList from './SortDropdownList';
import Category from '@/types/category.types';
import {
  Wrapper,
  InputContainer,
  SortButton,
  ArrowButton,
  UpArrowIcon,
} from './SortDropdownUI.styles';

interface Props {
  dropdownRef: RefObject<HTMLDivElement | null>;
  item: string[];
  selectedLocation: string;
  isOpenSortDropdown: boolean;
  handleInputClick: () => void;
  toggleSortDropdown: () => void;
  setSelectedLocation: Dispatch<SetStateAction<string>>;
  closeSortDropdown: () => void;
  setCategory: Dispatch<SetStateAction<Category>>;
}

function SortDropdownUI({
  dropdownRef,
  item,
  selectedLocation,
  isOpenSortDropdown,
  handleInputClick,
  toggleSortDropdown,
  setSelectedLocation,
  closeSortDropdown,
  setCategory,
}: Props) {
  return (
    <Wrapper ref={dropdownRef}>
      <InputContainer>
        <SortButton type="button" onClick={handleInputClick}>
          {selectedLocation}
        </SortButton>
        <ArrowButton type="button" onClick={toggleSortDropdown}>
          <UpArrowIcon $isOpen={isOpenSortDropdown} />
        </ArrowButton>
      </InputContainer>
      {isOpenSortDropdown && (
        <SortDropdownList
          item={item}
          onClick={setSelectedLocation}
          onClose={closeSortDropdown}
          setCategory={setCategory}
        />
      )}
    </Wrapper>
  );
}

export default SortDropdownUI;
