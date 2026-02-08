import { Button } from './DetailFilterButton.styles';

interface Props {
  count: number | null;
  onClick: () => void;
}

function DetailFilterButton({ count, onClick }: Props) {
  const countText = count ? ` (${count})` : '';

  return (
    <Button type="button" onClick={onClick}>
      상세필터{countText}
    </Button>
  );
}

export default DetailFilterButton;
