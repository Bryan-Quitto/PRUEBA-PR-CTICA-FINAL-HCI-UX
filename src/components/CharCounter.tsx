import React from 'react';
import { MAX_CHARS } from './validation';

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
