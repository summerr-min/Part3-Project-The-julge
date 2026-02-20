import { Description, Title, Wrapper } from './NoticeDescription.styles';

interface Props {
  description: string;
}

function NoticeDescription({ description }: Props) {
  return (
    <Wrapper>
      <Title>공고 설명</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
}

export default NoticeDescription;
