# Project Notes

## 🏗️ Architectural Choices

- **Tailwind CSS 4**: Utilizes the latest CSS-first engine for faster builds and a modern developer experience. The project leverages Tailwind's new `@theme` block for a centralized design system.

- **TanStack Query (React Query)**: Used for state management of asynchronous data. This ensures cached, synchronized data across the dashboard with built-in loading and error states, minimizing `useEffect` complexity.

- **Recharts**: Selected for its declarative React-native approach to charting. It fits seamlessly into the component-based architecture and is highly customizable for premium dashboard aesthetics.

- **Centralized Typing**: All dashboard-related types are consolidated in `src/types/dashboard.ts`. This ensures strict type safety across charts, metrics, and data-fetching hooks, reducing runtime errors.

## 📁 Structure & Organization

- **Atomic-ish Components**: The `components` directory is split into `ui` (primitives), `layout` (structural), and `dashboard` (composite features). This promotes reusability and clear separation of concerns.

- **Mock API Layer**: A simulated backend is implemented in `src/lib/mockData.ts` using asynchronous functions (delays) to mimic real-world network latency, allowing for realistic testing of loading states.

- **Glassmorphism & Micro-animations**: The UI design incorporates subtle gradients and transitions to provide a premium, interactive feel, aligned with modern design trends.
