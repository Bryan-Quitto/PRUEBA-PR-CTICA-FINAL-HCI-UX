import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  width?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ text, children, width = "210px" }) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ left: 0, top: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tipId = useRef(`tip-${Math.random().toString(36).slice(2)}`);

  useEffect(() => {
    if (visible && triggerRef.current) {
      const r = triggerRef.current.getBoundingClientRect();
      setCoords({ left: r.left + r.width / 2, top: r.top + window.scrollY - 8 });
    }
  }, [visible]);

  return (
    <div
      ref={triggerRef}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      className="relative inline-flex items-center cursor-help"
      aria-describedby={visible ? tipId.current : undefined}
    >
      {children}
      {visible && createPortal(
        <div
          id={tipId.current}
          role="tooltip"
          className="absolute bg-slate-900 text-white px-3 py-2 rounded-lg text-[0.72rem] leading-snug z-[99999] shadow-xl text-center pointer-events-none font-medium animate-in fade-in zoom-in-95 duration-200"
          style={{ 
            left: coords.left, 
            top: coords.top, 
            transform: 'translate(-50%,-100%)',
            width: width
          }}
        >
          {text}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-transparent border-t-4 border-t-slate-900" aria-hidden="true" />
        </div>,
        document.body,
      )}
    </div>
  );
};
