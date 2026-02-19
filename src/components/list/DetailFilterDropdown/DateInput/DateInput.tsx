import { ChangeEvent } from 'react';
import convertDate from '@/utils/convertDate';
import { Wrapper, Name, Input } from './DateInput.styles';

interface Props {
  startsAt: string;
  setStartsAt: (startsAt: string) => void;
}

function DateInput({ startsAt, setStartsAt }: Props) {
  const minDateTime = convertDate(new Date()).slice(0, 16);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStartsAt(convertDate(new Date(event.target.value)));
  };

  return (
    <Wrapper>
      <Name>시작일</Name>
      <Input
        placeholder="선택"
        type="datetime-local"
        value={startsAt.slice(0, 16)}
        min={minDateTime}
        onChange={handleChange}
      />
    </Wrapper>
  );
}

export default DateInput;
