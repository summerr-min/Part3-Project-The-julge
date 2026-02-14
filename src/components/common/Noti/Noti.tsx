import { useEffect, useRef } from 'react';
import * as S from './Noti.styles';
import CloseIcon from '@/assets/icons/close_icon.svg?react';

export type NoticeResult = 'approved' | 'rejected';

export type NoticeItem = {
  id: string;
  message: string;
  timeText: string;
  result?: NoticeResult;
  readAt?: string | null;
};

// mockData, api 연결하면 삭제 부탁드려요
const mockNoticeList: NoticeItem[] = [
  {
    id: '1',
    message:
      '에이바우트 첨단점 (2026-02-13 15:00~18:00) 공고 지원이 승인되었어요.',
    timeText: '1분 전',
    result: 'approved',
    readAt: null,
  },
  {
    id: '2',
    message:
      '투썸플레이스 제대병원점 (2026-02-12 15:00~18:00) 공고 지원이 승인되었어요.',
    timeText: '3분 전',
    result: 'approved',
    readAt: '2026-02-10T12:00:00',
  },
  {
    id: '3',
    message: '오멘(2026-02-11 15:00~18:00) 공고 지원이 거절되었어요.',
    timeText: '7분 전',
    result: 'rejected',
    readAt: null,
  },
];

type NotiProps = {
  id: string;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
  onClose: () => void;
};

const Noti = ({ id, buttonRef, onClose }: NotiProps) => {
  const panelRef = useRef<HTMLDivElement>(null);

  const countText = `알림 ${mockNoticeList.length}개`;

  useEffect(() => {
    // 패널 바깥 클릭하거나 ESC 누르면 닫힘
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;

      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        !buttonRef.current?.contains(target)
      ) {
        onClose();
      }
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [onClose, buttonRef]);

  // 승인/거절만 색 다르게
  const renderMessage = (message: string, result?: NoticeResult) => {
    if (!result) return message;

    const keyword = result === 'approved' ? '승인' : '거절';
    const index = message.indexOf(keyword);

    if (index === -1) return message;

    const before = message.slice(0, index);
    const after = message.slice(index + keyword.length);

    return (
      <>
        {before}
        <S.StatusText $status={result}>{keyword}</S.StatusText>
        {after}
      </>
    );
  };

  return (
    <S.PanelStyles id={id} ref={panelRef}>
      <S.HeaderStyles>
        <S.TitleStyles>{countText}</S.TitleStyles>

        <S.CloseButtonStyles type="button" onClick={onClose}>
          <CloseIcon />
        </S.CloseButtonStyles>
      </S.HeaderStyles>

      <S.ListStyles>
        {mockNoticeList.map((item) => {
          const isUnread = !item.readAt;

          return (
            <S.ItemStyles key={item.id}>
              <S.MessageRowStyles>
                {isUnread && item.result && (
                  <S.DotStyles $status={item.result} />
                )}

                <S.MessageStyles>
                  {renderMessage(item.message, item.result)}
                </S.MessageStyles>

                <S.TimeTextStyles>{item.timeText}</S.TimeTextStyles>
              </S.MessageRowStyles>
            </S.ItemStyles>
          );
        })}
      </S.ListStyles>
    </S.PanelStyles>
  );
};

export default Noti;
