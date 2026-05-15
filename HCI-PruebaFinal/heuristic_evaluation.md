# Evaluación Heurística — Global Dashboard

Se ha realizado una evaluación de usabilidad basada en las **10 Heurísticas de Jakob Nielsen** sobre el aplicativo "Usability Test Dashboard 2.0", enfocándose en el Dashboard Global, el flujo de autenticación y la gestión de planes.

## Resumen de Hallazgos
Se identificaron **10 problemas de usabilidad** clasificados por nivel de severidad:
*   **Críticos:** 2
*   **Moderados:** 5
*   **Leves:** 3

---

## Detalle de Evaluación

### 1. Visibilidad del Estado del Sistema (H1)
*   **Problema:** Al aplicar filtros o realizar búsquedas en el Dashboard, no hay un indicador de carga visual (spinner/esqueleto) que confirme que el sistema está procesando la solicitud, solo el cambio abrupto de la lista.
*   **Severidad:** Moderada.
*   **Recomendación:** Implementar un estado de "Loading" visual o retroalimentación inmediata (Feedback Visual Dinámico).

### 2. Relación entre el Sistema y el Mundo Real (H2)
*   **Problema:** Algunos términos técnicos en los KPIS como "Resolved Rate" o "Success Rate" podrían no ser claros para usuarios no técnicos.
*   **Severidad:** Leve.
*   **Recomendación:** Añadir tooltips explicativos para las métricas complejas.

### 3. Control y Libertad del Usuario (H3)
*   **Problema:** El modal de eliminación de planes no tiene un atajo de teclado (Esc) para cerrarse rápidamente, obligando al uso del ratón.
*   **Severidad:** Leve.
*   **Recomendación:** Habilitar cierre de modales con la tecla Escape y mejorar la navegación por teclado.

### 4. Consistencia y Estándares (H4)
*   **Problema:** El botón de "Nuevo Plan" en el Dashboard utiliza un icono de `Plus`, pero en otras vistas las acciones de creación tienen estilos diferentes (variación de color de botones).
*   **Severidad:** Moderada.
*   **Recomendación:** Estandarizar los botones de acción principal (Primary Buttons) en toda la aplicación.

### 5. Prevención de Errores (H5)
*   **Problema:** Al crear un nuevo plan, el sistema permite enviar el formulario con campos vacíos que luego generan "Sin nombre" en el Dashboard, lo que ensucia la base de datos.
*   **Severidad:** Crítica.
*   **Recomendación:** Implementar validaciones en tiempo real que bloqueen el envío si los campos obligatorios (Producto/Módulo) están vacíos.

### 6. Reconocimiento en lugar de Recuerdo (H6)
*   **Problema:** En la lista de planes, el estado del plan (Borrador, Activo, Completado) se muestra solo con texto/color, pero no hay una leyenda o guía rápida que explique qué implica cada estado.
*   **Severidad:** Moderada.
*   **Recomendación:** Mejorar la visibilidad de los estados y añadir una breve descripción contextual.

### 7. Flexibilidad y Eficiencia de Uso (H7)
*   **Problema:** No existen "Acciones Rápidas" en la lista de planes. Para editar un plan, el usuario debe entrar obligatoriamente a la vista detallada.
*   **Severidad:** Moderada.
*   **Recomendación:** Añadir un menú contextual de "Acciones Rápidas" (Navegación Contextual) en cada fila de la tabla.

### 8. Estética y Diseño Minimalista (H8)
*   **Problema:** El Hero Global del Dashboard tiene un diseño muy cargado con gradientes y animaciones flotantes que pueden distraer de las métricas numéricas principales (KPIs).
*   **Severidad:** Leve.
*   **Recomendación:** Simplificar el fondo del Hero para priorizar la legibilidad de la "Tasa de Éxito".

### 9. Ayudar a los usuarios a reconocer, diagnosticar y recuperarse de errores (H9)
*   **Problema:** Si el `git push` o una operación de base de datos falla, el sistema no muestra un mensaje de error descriptivo al usuario final, solo falla silenciosamente en consola.
*   **Severidad:** Crítica.
*   **Recomendación:** Implementar un sistema de notificaciones (Toasts) que informen errores de red o de servidor.

### 10. Ayuda y Documentación (H10)
*   **Problema:** No existe una sección de "Primeros Pasos" o ayuda integrada para nuevos UX Engineers que utilicen la plataforma por primera vez.
*   **Severidad:** Moderada.
*   **Recomendación:** Integrar un pequeño tour guiado o una sección de FAQ/Ayuda.

---
**Evaluador:** Gemini CLI (UX Engineer)
**Fecha:** 15 de mayo de 2026
