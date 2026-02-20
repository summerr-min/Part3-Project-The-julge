import { useEffect, useRef } from 'react';
import * as S from './Noti.styles';
import CloseIcon from '@/assets/icons/close_icon.svg?react';
import { getTimeAgo } from '@/utils/timeAgo'; // 시간계산
import { AlertItem } from '@/types/user.types';
import { formatNotiDate } from '@/utils/userDate';

export type NoticeResult = 'approved' | 'rejected';

type NotiProps = {
  id: string;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
  onClose: () => void;
  alerts: AlertItem[]; // user.types
  onRead?: (alertId: string) => void;
};

const Noti = ({ id, buttonRef, onClose, alerts, onRead }: NotiProps) => {
  const panelRef = useRef<HTMLDivElement>(null);

  const countText = `알림 ${alerts.length}개`;

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
  const renderMessage = (message: string, result: 'accepted' | 'rejected') => {
    if (!result) return message;

    const keyword = result === 'accepted' ? '승인' : '거절';
    const resultStatus = result === 'accepted' ? 'approved' : 'rejected';
    const index = message.indexOf(keyword);

    if (index === -1) return message;

    const before = message.slice(0, index);
    const after = message.slice(index + keyword.length);

    return (
      <>
        {before}
        <S.StatusText $status={resultStatus}>{keyword}</S.StatusText>
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
        {alerts.length === 0 ? (
          <S.MessageStyles style={{ textAlign: 'center', padding: '20px 0' }}>
            새로운 알림이 없습니다.
          </S.MessageStyles>
        ) : (
          alerts.map((alert) => {
            const data = alert.item;
            const isUnread = !data.read;
            const resultStatus =
              data.result === 'accepted' ? 'approved' : 'rejected';

            const timeText = getTimeAgo(data.createdAt);
            const shopName = data.shop.item.name;
            // 공고 시작 시간, 근무시간 가져와서 텍스트로 변경
            const { startsAt, workhour } = data.notice.item;
            const workDateText = formatNotiDate(startsAt, workhour);

            const message = `${shopName} ${workDateText} 공고 지원이 ${data.result === 'accepted' ? '승인' : '거절'} 되었어요.`;

            return (
              <S.ItemStyles
                key={data.id}
                onClick={() => {
                  if (isUnread && onRead) onRead(data.id);
                }}
                style={{ cursor: isUnread ? 'pointer' : 'default' }}
              >
                <S.MessageRowStyles>
                  {isUnread && <S.DotStyles $status={resultStatus} />}

                  <S.MessageStyles>
                    {renderMessage(message, data.result)}
                  </S.MessageStyles>

                  <S.TimeTextStyles>{timeText}</S.TimeTextStyles>
                </S.MessageRowStyles>
              </S.ItemStyles>
            );
          })
        )}
      </S.ListStyles>
    </S.PanelStyles>
  );
};

export default Noti;
