import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </QueryClientProvider>
  );
}

export default App;
