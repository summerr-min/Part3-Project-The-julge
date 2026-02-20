import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import SortDropdownUI from './SortDropdownUI';
import Category from '@/types/category.types';

interface Prop {
  item: string[];
  toggleSortDropdown: () => void;
  isOpenSortDropdown: boolean;
  closeSortDropdown: () => void;
  setCategory: Dispatch<SetStateAction<Category>>;
  selectedLocation: string;
  setSelectedLocation: Dispatch<SetStateAction<string>>;
}

function SortDropdown({
  item,
  isOpenSortDropdown,
  toggleSortDropdown,
  closeSortDropdown,
  setCategory,
  selectedLocation,
  setSelectedLocation,
}: Prop) {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        closeSortDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeSortDropdown]);

  const handleInputClick = () => {
    toggleSortDropdown();
  };

  return (
    <SortDropdownUI
      dropdownRef={dropdownRef}
      item={item}
      selectedLocation={selectedLocation}
      handleInputClick={handleInputClick}
      isOpenSortDropdown={isOpenSortDropdown}
      toggleSortDropdown={toggleSortDropdown}
      closeSortDropdown={closeSortDropdown}
      setSelectedLocation={setSelectedLocation}
      setCategory={setCategory}
    />
  );
}

export default SortDropdown;
