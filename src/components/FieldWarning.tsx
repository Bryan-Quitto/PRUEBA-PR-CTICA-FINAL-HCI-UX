import React from 'react';
import { AlertTriangle, XCircle } from 'lucide-react';


interface FieldWarningProps {
  message: string;
  show: boolean;
  /** 'error' = rojo (campo obligatorio), 'warning' = amarillo (recomendado). Default: 'warning' */
  variant?: 'error' | 'warning';
}

/**
 * Aviso de validación debajo de un campo.
 * - variant='error'   → rojo  (campo obligatorio vacío o dato inválido)
 * - variant='warning' → amarillo (campo recomendado vacío)
 *
 * [Fase 3 — Contraste] El fondo tenue del mensaje crea contraste figura-fondo
 * explícito, reforzando la jerarquía visual: el mensaje de error "emerge" sobre
 * el campo. Ratio texto: #b91c1c sobre #fef2f2 = ~5.2:1 (WCAG AA ✓).
 */
export const FieldWarning: React.FC<FieldWarningProps> = ({ message, show, variant = 'warning' }) => {
  if (!show) return null;

  const isError = variant === 'error';

  return (
    <div
      role="alert"
      aria-live="polite"
      className={`flex items-center gap-1.5 mt-1 px-2 py-1 rounded-md text-[0.75rem] font-semibold animate-in fade-in slide-in-from-top-1 duration-200 ${
        isError
          ? 'text-red-700 bg-red-50 border border-red-200'
          : 'text-amber-700 bg-amber-50 border border-amber-200'
      }`}
    >
      {isError
        ? <XCircle size={13} className="text-red-500 shrink-0" aria-hidden="true" />
        : <AlertTriangle size={13} className="text-amber-500 shrink-0" aria-hidden="true" />
      }
      <span>{message}</span>
    </div>
  );
};