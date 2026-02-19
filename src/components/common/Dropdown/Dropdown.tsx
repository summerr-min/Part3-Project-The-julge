import { useRef, useState } from 'react';
import Dropdown_down_icon from '@/assets/icons/dropdown_down_icon.svg?react';
import * as S from '@/components/common/Dropdown/Dropdown.style';

interface DropdownProps {
  id?: string;
  options: string[];
  placeholder?: string;
  onSelect: (item: string) => void;
  isBlack?: boolean;
  value?: string;
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
 *@param {string} [props.value] -  외부에서 주입받는 현재 선택된 값 (기존 데이터 로드용)
 */
const Dropdown = ({
  id,
  options,
  placeholder = '선택',
  onSelect,
  isBlack = false,
  value,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 클릭 시 외부로 값을 전달
  const handleItemClick = (item: string) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <S.dropdownWrapper ref={dropdownRef} $isBlack={isBlack}>
      <S.selectBox
        id={id}
        onClick={() => setIsOpen(!isOpen)}
        $hasValue={!!value}
        $isBlack={isBlack}
        type="button"
      >
        {value || placeholder}
        <S.ArrowIcon $isBlack={isBlack} $isOpen={isOpen}>
          <Dropdown_down_icon />
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
