import { RouterProvider } from "react-router-dom";
import "@/styles/global.index.css";
import { router } from "@/providers/router.providers.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
