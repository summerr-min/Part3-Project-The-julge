import { ReactNode } from 'react';
import { Notice } from '@/types/notice.types';
import NoticeList from '@/components/list/NoticeList/NoticeList';
import { Wrapper, SectionContainer, SectionName } from './NoticeEntire.styles';

interface Props {
  items?: Notice[];
  children: ReactNode;
}

function NoticeEntire({ items, children }: Props) {
  return (
    <Wrapper>
      <SectionContainer>
        <SectionName>전체 공고</SectionName>
        {children}
      </SectionContainer>
      <NoticeList type="entire" items={items} count={6} />
    </Wrapper>
  );
}

export default NoticeEntire;
