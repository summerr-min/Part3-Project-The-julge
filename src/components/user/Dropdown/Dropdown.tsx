import { useEffect, useRef, useState } from 'react';
import Dropdown_up_icon from '@/assets/icons/dropdown_up_icon.svg?react';
import Dropdown_down_icon from '@/assets/icons/dropdown_down_icon.svg?react';
import * as S from '@/components/user/Dropdown/Dropdown.style';

interface DropdownProps {
  options: string[];
  placeholder?: string;
  onSelect: (item: string) => void;
  isBlack?: boolean;
}

const Dropdown = ({
  options,
  placeholder = '선택',
  onSelect,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false); // 드롭다운 열려있는지 상태관리
  const [selected, setSelected] = useState(''); // 선택 옵션
  const dropdownRef = useRef<HTMLDivElement>(null); // 드롭다운 외부 클릭 감지를 위한 ref
  console.log(dropdownRef.current);
  useEffect(() => {
    const handleOutSideClick = (e: MouseEvent) => {
      // 클릭한 곳이 드롭다운 내부가 아니라면 닫음

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutSideClick);
    console.log(dropdownRef.current);
    return () => document.removeEventListener('mousedown', handleOutSideClick);
  }, []);

  const handleItemClick = (item: string) => {
    setSelected(item);
    onSelect(item); // 선택된값
    setIsOpen(false); // 선택 후 닫기
  };
  return (
    <S.dropdownWrapper ref={dropdownRef}>
      <S.selectBox
        onClick={() => setIsOpen(!isOpen)}
        $hasValue={selected !== ''}
      >
        {selected || placeholder}
        <S.ArrowIcon>
          {isOpen ? <Dropdown_up_icon /> : <Dropdown_down_icon />}
        </S.ArrowIcon>
      </S.selectBox>

      {isOpen && (
        <S.MenuList>
          {options.map((option, index) => (
            <S.MenuItem key={index} onClick={() => handleItemClick(option)}>
              {option}
            </S.MenuItem>
          ))}
        </S.MenuList>
      )}
    </S.dropdownWrapper>
  );
};
export default Dropdown;
