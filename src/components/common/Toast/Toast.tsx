import { createContext, useContext, useState, useCallback } from 'react';
import { ToastContainer, ToastBox, ToastText } from './Toast.styles';

type ToastItemType = {
  id: string;
  message: string;
};

type ToastContextType = {
  showToast: (message: string) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<ToastItemType[]>([]);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const showToast = useCallback((message: string) => {
    const id = Date.now().toString();

    setToasts((prev) => {
      const next = [...prev, { id, message }];
      return next.length > 7 ? next.slice(1) : next;
    });

    setTimeout(() => {
      removeToast(id);
    }, 2000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <ToastContainer>
        {toasts.map((toast) => (
          <ToastBox key={toast.id} onClick={() => removeToast(toast.id)}>
            <ToastText>{toast.message}</ToastText>
          </ToastBox>
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }

  return context;
};
