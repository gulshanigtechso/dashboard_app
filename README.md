# Dashboard Application

A modern, high-performance dashboard built with React 19, Vite, and Tailwind CSS 4. This project features premium UI components, interactive charts, and a robust data-fetching layer.

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vite.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/) (Radix Primitives)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Data Fetching**: [React Query (TanStack Query)](https://tanstack.com/query)
- **State Management**: React Hooks & Context

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd dashboard_app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Build

Build the production-ready application:

```bash
npm run build
```

## 📂 Project Structure

- `src/components/dashboard`: Feature-specific components (Charts, Metrics, Lists).
- `src/components/layout`: Core layout components (Sidebars, Topbar, Breadcrumbs).
- `src/components/ui`: Reusable primitive components (Button, Card, Input).
- `src/lib`: Utility functions and mock data API.
- `src/types`: Centralized TypeScript definitions.
- `src/hooks`: Custom React hooks.
- `src/pages`: Top-level page components.
