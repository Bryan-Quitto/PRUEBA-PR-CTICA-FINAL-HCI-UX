import React from 'react';
import { AlertTriangle, XCircle } from 'lucide-react';
import { MAX_CHARS } from './validation';

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

/**
 * Contador de caracteres que se vuelve rojo cuando supera el límite.
 * [Fase 3 — Contraste] text-slate-400 (#94a3b8) es el mínimo para texto decorativo;
 * al acercarse al límite sube a amber (#d97706) y al superarlo a red (#dc2626),
 * creando una escala de urgencia perceptible sin leer el número.
 */
export const CharCounter: React.FC<{ value: string | undefined }> = ({ value }) => {
  const len = value?.length ?? 0;
  const over = len > MAX_CHARS;
  return (
    <div className={`text-right text-[0.7rem] font-semibold mt-0.5 transition-colors ${over ? 'text-red-600' : len > MAX_CHARS * 0.8 ? 'text-amber-600' : 'text-slate-400'}`}>
      {len}/{MAX_CHARS}
      {over && <span className="ml-1">⚠ Límite superado</span>}
    </div>
  );
};

/**
 * Devuelve las clases CSS del input según el tipo de aviso.
 * variant='error'   → borde rojo + fondo rojo tenue
 * variant='warning' → borde amarillo + fondo amarillo tenue
 *
 * [Fase 3 — Contraste] El borde coloreado + fondo tenue actúan como
 * señal pre-atentiva: el ojo detecta el cambio de color antes de leer
 * el texto del error (principio de pre-atención visual, Ware 2004).
 */
export function fieldClass(
  hasWarning: boolean,
  baseClass: string,
  variant: 'error' | 'warning' = 'warning'
): string {
  if (!hasWarning) return baseClass;

  if (variant === 'error') {
    return baseClass
      .replace(/border-slate-200/g, 'border-red-400')
      .replace(/border-transparent/g, 'border-red-400')
      .replace(/bg-white/g, 'bg-red-50')
      .replace(/bg-slate-50/g, 'bg-red-50') + ' border-red-400';
  }

  // warning (amarillo)
  return baseClass
    .replace(/border-slate-200/g, 'border-amber-400')
    .replace(/border-transparent/g, 'border-amber-400')
    .replace(/bg-white/g, 'bg-amber-50')
    .replace(/bg-slate-50/g, 'bg-amber-50') + ' border-amber-400';
}