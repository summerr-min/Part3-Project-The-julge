import React, { useEffect } from 'react';
import { OverlayStyles } from './Modal.styles';

type BaseModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

// 공통 모달 레이아웃
const BaseModal = ({ onClose, children }: BaseModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <OverlayStyles role="dialog" aria-modal="true" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </OverlayStyles>
  );
};

export default BaseModal;
