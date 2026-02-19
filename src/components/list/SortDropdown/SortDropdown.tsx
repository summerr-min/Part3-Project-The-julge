import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import SortDropdownUI from './SortDropdownUI';

type Category = 'time' | 'pay' | 'hour' | 'shop';

interface Prop {
  item: string[];
  toggleDropdown: () => void;
  isOpenDropdown: boolean;
  closeDropdown: () => void;
  setCategory: Dispatch<SetStateAction<Category>>;
  selectedLocation: string;
  setSelectedLocation: Dispatch<SetStateAction<string>>;
}

function SortDropdown({
  item,
  isOpenDropdown,
  toggleDropdown,
  closeDropdown,
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
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeDropdown]);

  const handleInputClick = () => {
    toggleDropdown();
  };

  return (
    <SortDropdownUI
      dropdownRef={dropdownRef}
      item={item}
      selectedLocation={selectedLocation}
      handleInputClick={handleInputClick}
      isOpenDropdown={isOpenDropdown}
      toggleDropdown={toggleDropdown}
      closeDropdown={closeDropdown}
      setSelectedLocation={setSelectedLocation}
      setCategory={setCategory}
    />
  );
}

export default SortDropdown;
