import { Button } from './PrimaryButton.styles';

interface Props {
  text: string;
  onClick?: () => void;
}

function PrimaryButton({ text, onClick }: Props) {
  return <Button onClick={onClick}>{text}</Button>;
}

export default PrimaryButton;
