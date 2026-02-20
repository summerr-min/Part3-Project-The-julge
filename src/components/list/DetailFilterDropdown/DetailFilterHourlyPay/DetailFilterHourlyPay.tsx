import { ChangeEvent } from 'react';
import separatorHourlyPay from '@/utils/separatorHourlyPay';
import deSeparatorHourlyPay from '@/utils/deSeparatorHourlyPay';
import DetailFilterSectionName from '@/components/list/DetailFilterDropdown/DetailFilterSection/DetailFilterSectionName';
import {
  Wrapper,
  Container,
  Input,
  Won,
  Description,
} from './DetailFilterHourlyPay.styles';

interface Props {
  hourlyPay: number;
  setHourlyPay: (hourlyPay: number) => void;
}

function DetailFilterHourlyPay({ hourlyPay, setHourlyPay }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const newValue = inputValue ? deSeparatorHourlyPay(inputValue) : 0;
    const HOURLY_PAY_LIMIT = 1000000000;

    if (newValue > HOURLY_PAY_LIMIT) {
      setHourlyPay(HOURLY_PAY_LIMIT);
      return;
    }

    setHourlyPay(newValue);
  };

  return (
    <Wrapper>
      <DetailFilterSectionName>금액</DetailFilterSectionName>
      <Container>
        <Input value={separatorHourlyPay(hourlyPay)} onChange={handleChange} />
        <Won>원</Won>
        <Description>이상부터</Description>
      </Container>
    </Wrapper>
  );
}

export default DetailFilterHourlyPay;
