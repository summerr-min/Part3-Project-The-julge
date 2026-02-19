import DetailFilterSectionName from '@/components/list/DetailFilterDropdown/DetailFilterSection/DetailFilterSectionName';
import DateInput from '@/components/list/DetailFilterDropdown/DateInput/DateInput';
import { Wrapper } from './DetailFilterStartsAt.styles';

interface Props {
  startsAt: string;
  setStartsAt: (startsAt: string) => void;
}

function DetailFilterStartsAt({ startsAt, setStartsAt }: Props) {
  return (
    <Wrapper>
      <DetailFilterSectionName>시작일</DetailFilterSectionName>
      <DateInput startsAt={startsAt} setStartsAt={setStartsAt} />
    </Wrapper>
  );
}

export default DetailFilterStartsAt;
