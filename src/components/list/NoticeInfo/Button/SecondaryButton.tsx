import { Button } from './SecondaryButton.styles';

interface Props {
  text: string;
  onClick?: () => void;
}

function SecondaryButton({ text, onClick }: Props) {
  return <Button onClick={onClick}>{text}</Button>;
}

export default SecondaryButton;
