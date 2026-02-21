import axios from 'axios';
import { useState } from 'react';

interface UseSubmitProps<V, R> {
  initialValues: V;
  validate?: (v: V) => boolean;
  submitFn: (v: V) => Promise<R>;
  successMsg?: string;
  onSuccess?: (response: R) => void;
  onSuccessClose?: () => void;
}

export function useShopForm<V, R>({
  initialValues,
  validate,
  submitFn,
  successMsg,
  onSuccess,
  onSuccessClose,
}: UseSubmitProps<V, R>) {
  const [values, setValues] = useState<V>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setValues((prev) => ({ ...prev, [id]: value }));
  };

  const setFieldValue = (id: string, value: any) => {
    setValues((prev) => ({ ...prev, [id]: value }));
  };

  const exec = async () => {
    if (isSubmitting) return;
    if (validate && !validate(values)) return;

    try {
      setIsSubmitting(true);
      setIsSuccess(false);

      const res = await submitFn(values);

      if (successMsg) {
        setIsSuccess(true);
        setModalMessage(successMsg);
        setIsOpenModal(true);
      }

      if (onSuccess) onSuccess(res);
      return res;
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        const status = e.response?.status;
        const message =
          e.response?.data?.message || e.message || '문제가 발생했습니다.';
        console.error('e status::::', status);
        console.error('e message::::', message);

        setIsSuccess(false);
        setModalMessage(message);
        setIsOpenModal(true);
      } else {
        console.error('normal e:::', e);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const isSubmitDisabled = (validate && !validate(values)) || isSubmitting;

  const closeModal = () => {
    setIsOpenModal(false);
    if (isSuccess && onSuccessClose) {
      onSuccessClose();
    }
  };

  return {
    exec,
    isSubmitting,
    handleChange,
    setFieldValue,
    values,
    setValues,
    isOpenModal,
    modalMessage,
    isSuccess,
    isSubmitDisabled,
    closeModal,
  };
}
