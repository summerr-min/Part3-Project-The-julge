import { useState } from 'react';

import Modal from '@/components/common/Modal/Modal';
import AlertModal from '@/components/common/Modal/AlertModal';
import ConfirmModal from '@/components/common/Modal/ConfirmModal';

const ModalTestPage = () => {
  const [isLegacyOpen, setIsLegacyOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const openLegacy = () => setIsLegacyOpen(true);
  const closeLegacy = () => setIsLegacyOpen(false);

  const openAlert = () => setIsAlertOpen(true);
  const closeAlert = () => setIsAlertOpen(false);

  const openConfirm = () => setIsConfirmOpen(true);
  const cancelConfirm = () => setIsConfirmOpen(false);

  const confirmAction = () => {
    console.log('✅ confirm!');
    setIsConfirmOpen(false);
  };

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginBottom: 16 }}>Modal 테스트 페이지</h1>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <button type="button" onClick={openLegacy}>
          기존 Modal(레거시) 열기
        </button>

        <button type="button" onClick={openAlert}>
          AlertModal(신규) 열기
        </button>

        <button type="button" onClick={openConfirm}>
          ConfirmModal(신규) 열기
        </button>
      </div>

      {isLegacyOpen && (
        <Modal message="(레거시) 알림 모달 테스트" onClose={closeLegacy} />
      )}

      {isAlertOpen && (
        <AlertModal
          message="가게 정보를 먼저 등록해 주세요."
          onClose={closeAlert}
          confirmText="확인"
        />
      )}

      {isConfirmOpen && (
        <ConfirmModal
          message="신청을 거절하시겠어요?"
          onCancel={cancelConfirm}
          onConfirm={confirmAction}
          cancelText="아니오"
          confirmText="예"
        />
      )}
    </div>
  );
};

export default ModalTestPage;
