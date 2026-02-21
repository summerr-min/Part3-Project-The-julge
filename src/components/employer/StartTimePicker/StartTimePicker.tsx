import { useState, useRef, useEffect } from 'react';
import { DateInput, DateShowDiv, DateShowWrap } from './StartTimePicker.styles';

interface StartTimePickerProps {
  onSelect: (date: string) => void;
  initialDate?: string;
}

function StartTimePicker({ onSelect, initialDate = '' }: StartTimePickerProps) {
  const [displayDate, setDisplayDate] = useState('날짜를 선택하세요');
  const inputRef = useRef<HTMLInputElement>(null);

  const formatToDateTimeLocal = (isoString: string): string => {
    if (!isoString) return '';

    const date = new Date(isoString);

    const offset = date.getTimezoneOffset() * 60000;
    const localISOTime = new Date(date.getTime() - offset)
      .toISOString()
      .slice(0, 16);

    return localISOTime;
  };

  const formatViewChange = (dateTimeLocalValue: string): string => {
    const [date, time] = dateTimeLocalValue.split('T');
    const [y, m, d] = date.split('-');
    return `${y}-${m}-${d} ${time}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value) return;

    setDisplayDate(formatViewChange(value));

    const dateValue = new Date(value).toISOString();
    onSelect(dateValue);
  };

  const handleWrapperClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker();
    }
  };

  useEffect(() => {
    if (initialDate && initialDate !== '날짜를 선택하세요') {
      const localTime = formatToDateTimeLocal(initialDate);
      if (localTime) {
        setDisplayDate(formatViewChange(localTime));
      }
    } else {
      setDisplayDate('날짜를 선택하세요');
    }
  }, [initialDate]);

  return (
    <DateShowWrap onClick={handleWrapperClick}>
      <DateShowDiv $default={displayDate}>{displayDate}</DateShowDiv>
      <DateInput
        ref={inputRef}
        type="datetime-local"
        value={formatToDateTimeLocal(initialDate)}
        onChange={handleChange}
        style={{
          colorScheme: 'dark',
        }}
      />
    </DateShowWrap>
  );
}

export default StartTimePicker;
