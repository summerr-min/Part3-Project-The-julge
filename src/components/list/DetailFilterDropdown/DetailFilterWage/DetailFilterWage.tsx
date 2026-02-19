import { ChangeEvent } from 'react';
import separatorWage from '@/utils/separatorWage';
import deSeparatorWage from '@/utils/deSeparatorWage';
import DetailFilterSectionName from '@/components/list/DetailFilterDropdown/DetailFilterSection/DetailFilterSectionName';
import {
  Wrapper,
  Container,
  Input,
  Won,
  Description,
} from './DetailFilterWage.styles';

interface Props {
  wage: number;
  setWage: (wage: number) => void;
}

function DetailFilterWage({ wage, setWage }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const newValue = inputValue ? deSeparatorWage(inputValue) : 0;
    const WAGE_LIMIT = 1000000000;

    if (newValue > WAGE_LIMIT) {
      setWage(WAGE_LIMIT);
      return;
    }

    setWage(newValue);
  };

  return (
    <Wrapper>
      <DetailFilterSectionName>금액</DetailFilterSectionName>
      <Container>
        <Input value={separatorWage(wage)} onChange={handleChange} />
        <Won>원</Won>
        <Description>이상부터</Description>
      </Container>
    </Wrapper>
  );
}

export default DetailFilterWage;
