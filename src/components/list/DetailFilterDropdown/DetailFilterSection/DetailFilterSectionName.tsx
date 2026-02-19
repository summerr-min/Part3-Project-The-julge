import { ReactNode } from 'react';
import { Name } from './DetailFilterSectionName.styles';

interface Props {
  children: ReactNode;
}

function DetailFilterSectionName({ children }: Props) {
  return <Name>{children}</Name>;
}

export default DetailFilterSectionName;
