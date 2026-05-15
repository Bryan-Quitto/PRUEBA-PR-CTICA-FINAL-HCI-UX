import React, { useEffect, useState } from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'success',
  duration = 3000,
  onClose
}) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(onClose, 300); // Match animation duration
  };

  const styles = {
    success: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-800',
      icon: <CheckCircle className="text-emerald-500" size={20} />
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-800',
      icon: <AlertCircle className="text-red-500" size={20} />
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
      icon: <Info className="text-blue-500" size={20} />
    }
  };

  const currentStyle = styles[type];

  return (
    <div 
      className={`
        fixed bottom-6 right-6 z-[3000] flex items-center gap-3 px-5 py-4 rounded-2xl border shadow-xl backdrop-blur-md
        transition-all duration-300 ease-out
        ${currentStyle.bg} ${currentStyle.border} ${currentStyle.text}
        ${isExiting ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0 animate-in slide-in-from-right-10'}
      `}
      role="alert"
    >
      <div className="shrink-0">{currentStyle.icon}</div>
      <div className="flex-1">
        <p className="text-sm font-bold leading-tight uppercase tracking-wide mb-0.5">
          {type === 'success' ? 'Éxito' : type === 'error' ? 'Error' : 'Información'}
        </p>
        <p className="text-xs font-semibold opacity-90">{message}</p>
      </div>
      <button 
        onClick={handleClose}
        className="shrink-0 p-1 hover:bg-black/5 rounded-lg transition-colors"
        aria-label="Cerrar notificación"
      >
        <X size={16} />
      </button>
    </div>
  );
};
