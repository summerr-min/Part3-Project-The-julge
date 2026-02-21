import { useState } from 'react';

export const useShopConfirmModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [onConfirmAction, setOnConfirmAction] = useState<(() => void) | null>(
    null
  );

  const openConfirm = (msg: string, onConfirm: () => void) => {
    setOnConfirmAction(() => onConfirm);
    setMessage(msg);
    setIsOpen(true);
  };

  const closeConfirm = () => {
    setOnConfirmAction(null);
    setMessage('');
    setIsOpen(false);
  };

  const handleConfirm = () => {
    if (onConfirmAction) onConfirmAction();
    closeConfirm();
  };

  return {
    isOpen,
    message,
    openConfirm,
    closeConfirm,
    handleConfirm,
  };
};
