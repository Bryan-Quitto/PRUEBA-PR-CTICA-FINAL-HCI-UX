# Evidencia de Uso de IA — HCI / UX Final Exam

Se ha utilizado la herramienta **Gemini CLI (vía Google Gemini)** como asistente de UX Engineering para acelerar las fases de planificación, diseño y desarrollo de la Prueba Práctica Final.

## Herramientas Utilizadas
*   **IA:** Gemini CLI (Agentic AI)
*   **Modelo:** Gemini 1.5 Pro
*   **Capacidades Aplicadas:** Análisis de código, generación de documentación técnica, diseño de wireframes HTML/Tailwind y refactorización de componentes React.

## Prompts Clave y Flujo de Trabajo

### 1. Fase de Análisis y Planificación
**Prompt:** *"Analiza el archivo instruccion.md y diseña un plan de ejecución detallado para completar las 6 fases del examen, cumpliendo con la estructura de repositorio solicitada."*
**Resultado:** Generación de un plan de acción estructurado y creación automática de los archivos de Scrum (`product_backlog.md`, `sprint_planning.md`).

![Prompt para leer la instrucción](./Evidencias/Evidencia-IA/Prompt%20para%20leer%20la%20instruccion.jpg)
![Inicio de trabajo de la IA](./Evidencias/Evidencia-IA/Inicio%20de%20trabajo%20de%20la%20IA.jpg)

### 2. Evaluación Heurística
**Prompt:** *"Realiza una evaluación heurística de 10 puntos sobre el archivo GlobalDashboard.tsx basándote en los principios de Nielsen. Clasifica por severidad y propón recomendaciones."*
**Resultado:** Identificación precisa de problemas como la falta de visibilidad del estado (H1) y prevención de errores (H5), documentados en `heuristic_evaluation.md`.

![Prompt Inicial](./Evidencias/Evidencia-IA/Prompt%20inicial.jpg)

### 3. Rediseño con Wireframes
**Prompt:** *"Construye tres niveles de wireframes (Lo-Fi, Mid-Fi, Hi-Fi) en HTML usando Tailwind CSS que resuelvan los problemas detectados, especialmente mejorando la jerarquía visual del Hero y añadiendo placeholders para notificaciones."*
**Resultado:** Creación de prototipos progresivos que sirvieron de base visual para la implementación final.

![Inicio de la fase 3](./Evidencias/Evidencia-IA/Inicio%20de%20la%20fase%203.jpg)

### 4. Implementación de Mejora Funcional
**Prompt:** *"Implementa un componente Toast en React y úsalo en GlobalDashboard.tsx para proporcionar feedback visual dinámico cuando el usuario aplica filtros o realiza búsquedas."*
**Resultado:** Desarrollo del componente `Toast.tsx` e integración de lógica de estados en la vista principal, mejorando significativamente la comunicación sistema-usuario.

![Inicio de la fase 4 y 5](./Evidencias/Evidencia-IA/Inicio%20de%20la%20fase%204%20y%20fase%205.jpg)

## Impacto en el Diseño UX
La IA permitió:
1.  **Reducir el tiempo de prototipado:** Generando código HTML limpio para wireframes en segundos.
2.  **Objetividad en la Evaluación:** Aplicando de forma rigurosa las heurísticas de Nielsen sobre el código fuente real.
3.  **Calidad Técnica:** Asegurando que las nuevas implementaciones sigan la arquitectura MVC y los estándares de Tailwind v4 establecidos en el proyecto.
