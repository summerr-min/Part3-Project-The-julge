import { Wrapper } from '@/components/list/NoticeCard/NoticeCardDescription.styles';
import { getIconByType } from '@/utils/getIconByType';

interface Props {
  type: 'duration' | 'address';
  description: string;
  isClosed: boolean;
}

function NoticeCardDescription({ type, description, isClosed }: Props) {
  const IconComponent = getIconByType({
    isClosed,
    type,
  }) as React.ComponentType;

  return (
    <Wrapper isClosed={isClosed}>
      <IconComponent />
      {description}
    </Wrapper>
  );
}

export default NoticeCardDescription;
