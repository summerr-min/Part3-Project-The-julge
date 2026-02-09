import { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import { Wrapper, ButtonContainer, Button } from './SortDropdownList.styles';

type Category = 'time' | 'pay' | 'hour' | 'shop';

interface Props {
  item: string[];
  onClick: (value: string) => void;
  onClose: () => void;
  setCategory: Dispatch<SetStateAction<Category>>;
}

function SortDropdownList({ item, onClick, onClose, setCategory }: Props) {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const value = event.currentTarget.textContent || '';
    onClick(value);
    onClose();

    switch (value) {
      case '마감임박순':
        setCategory('time');
        break;
      case '시급많은순':
        setCategory('pay');
        break;
      case '시간적은순':
        setCategory('hour');
        break;
      case '가나다순':
        setCategory('shop');
        break;
      default:
        setCategory('time');
    }
  };

  return (
    <Wrapper>
      {item.map((value) => (
        <ButtonContainer key={value}>
          <Button type="button" onClick={handleClick}>
            {value}
          </Button>
        </ButtonContainer>
      ))}
    </Wrapper>
  );
}

export default SortDropdownList;
