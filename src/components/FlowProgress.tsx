import React from 'react';
import { DashboardTab } from '../models/types';
import { Check } from 'lucide-react';

interface FlowProgressProps {
  activeTab: DashboardTab;
  testPlan: { product?: string; objective?: string; moderator?: string };
  tasksCount: number;
  observationsCount: number;
  findingsCount: number;
}

const steps = [
  { id: 'plan',         label: 'Plan',          },
  { id: 'script',       label: 'Guion',         },
  { id: 'observations', label: 'Observaciones', },
  { id: 'findings',     label: 'Hallazgos',     },
  { id: 'reports',      label: 'Reporte',       },
];

export const FlowProgress: React.FC<FlowProgressProps> = ({
  activeTab, testPlan, tasksCount, observationsCount, findingsCount,
}) => {
  const isStepComplete = (id: string): boolean => {
    if (id === 'plan')         return !!(testPlan.product && testPlan.objective && testPlan.moderator);
    if (id === 'script')       return tasksCount > 0;
    if (id === 'observations') return observationsCount > 0;
    if (id === 'findings')     return findingsCount > 0;
    if (id === 'reports')      return observationsCount > 0 && findingsCount > 0;
    return false;
  };

  const completedCount = steps.filter(s => isStepComplete(s.id)).length;
  const progressPct    = Math.round((completedCount / steps.length) * 100);

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 mb-4 shadow-sm">
      {/* Encabezado */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-[0.72rem] font-extrabold text-slate-500 uppercase tracking-widest">
          Progreso del plan
        </span>
        <span className="text-[0.72rem] font-extrabold text-navy">
          {completedCount} de {steps.length} · {progressPct}%
        </span>
      </div>

      {/* Barra global */}
      <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden mb-4">
        <div 
          className="h-full rounded-full bg-gradient-to-r from-navy to-blue-500 transition-all duration-700"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Pasos */}
      <div className="flex items-center w-full">
        {steps.map((step, idx) => {
          const complete = isStepComplete(step.id);
          const active   = activeTab === step.id;
          const isLast   = idx === steps.length - 1;
          const statusText = complete ? 'completado' : active ? 'activo' : 'pendiente';

          return (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-[0.7rem] font-extrabold border-2 transition-all ${
                    complete 
                      ? 'bg-emerald-600 border-emerald-600 text-white' 
                      : active 
                        ? 'bg-navy border-navy text-white' 
                        : 'bg-slate-100 border-slate-300 text-slate-800'
                  }`}
                  role="img"
                  aria-label={`Paso ${idx + 1}: ${step.label} - ${statusText}`}
                >
                  {complete ? <Check size={14} strokeWidth={3} aria-hidden="true" /> : idx + 1}
                </div>
                <span className={`text-[0.6rem] font-bold whitespace-nowrap ${
                  complete ? 'text-emerald-600' : active ? 'text-navy' : 'text-slate-800'
                }`}>
                  {step.label}
                </span>
              </div>

              {!isLast && (
                <div className={`flex-1 h-0.5 mx-1 mb-4 rounded-full transition-all duration-500 ${
                  complete ? 'bg-emerald-600' : 'bg-slate-200'
                }`} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};