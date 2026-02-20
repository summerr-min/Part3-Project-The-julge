import { getRecentNotices } from '@/utils/noticeRecentViewed';
import NoticeList from '@/components/list/NoticeList/NoticeList';
import { Wrapper, SectionName } from './NoticeRecentViewed.styles';

function NoticeRecentViewed() {
  const items = getRecentNotices();
  return (
    <Wrapper>
      <SectionName>최근에 본 공고</SectionName>
      <NoticeList type="entire" count={6} items={items} />
    </Wrapper>
  );
}

export default NoticeRecentViewed;
