import { useEffect, useRef, useState } from 'react';
import Dropdown_up_icon from '@/assets/icons/dropdown_up_icon.svg?react';
import Dropdown_down_icon from '@/assets/icons/dropdown_down_icon.svg?react';
import * as S from '@/components/user/Dropdown/Dropdown.style';

//props 타입정의
interface DropdownProps {
  id?: string;
  options: string[];
  placeholder?: string;
  onSelect: (item: string) => void;
  isBlack?: boolean;
}
/**
 **
 * 공통 드롭다운 컴포넌트
 *
 * 클릭하면 옵션 목록이 열리고 항목을 선택하면 부모에게 값을 전달
 * 드롭다운 바깥을 클릭하면 자동으로 닫힘
 *
 * @param {string} [id] - label 태그의 htmlFor와 연결할 id
 * @param {string[]} options - 드롭다운에 표시할 옵션 목록
 * @param {string} [placeholder='선택'] - 아무것도 선택하지 않았을 때 표시할 텍스트
 * @param {(item: string) => void} onSelect - 항목 선택 시 호출되는 콜백 함수
 * @param {boolean} [isBlack=false] - true면 다크(회색) 배경 스타일 적용
 *
 */
const Dropdown = ({
  id,
  options,
  placeholder = '선택',
  onSelect,
  isBlack = false, // 기본값 설정
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false); // 드롭다운 열려있는지 상태관리
  const [selected, setSelected] = useState(''); // 선택 옵션
  const dropdownRef = useRef<HTMLDivElement>(null);
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
        id={id}
        onClick={() => setIsOpen(!isOpen)}
        $hasValue={selected !== ''} // 선택값 있으면 true > 글씨값 변경
        $isBlack={isBlack}
        type="button"
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
