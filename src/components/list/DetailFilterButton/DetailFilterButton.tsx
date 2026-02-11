import { useEffect, useState } from 'react';
import { Button } from './DetailFilterButton.styles';

interface Props {
  count: number | null;
  onClick: () => void;
}

function DetailFilterButton({ count, onClick }: Props) {
  const [filteredCount, setFilteredCount] = useState<number | null>(count);

  useEffect(() => {
    setFilteredCount(count);
  }, [count]);

  return (
    <Button type="button" onClick={onClick}>
      상세필터
      {filteredCount !== null && filteredCount > 0 && ` (${filteredCount})`}
    </Button>
  );
}

export default DetailFilterButton;
