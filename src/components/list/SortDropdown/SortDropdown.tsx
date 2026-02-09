import { useEffect, useRef, useState } from 'react';
import useSortDropdown from '@/hooks/useSortDropdown';
import SortDropdownUI from './SortDropdownUI';

interface Prop {
  item: string[];
}

function SortDropdown({ item }: Prop) {
  const { isOpenDropdown, toggleDropdown, closeDropdown, setCategory } =
    useSortDropdown();
  const [selectedLocation, setSelectedLocation] = useState('마감임박순');
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
