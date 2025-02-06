import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Layout from "./components/layout/index.tsx";
import { ThemeProvider } from "./styles/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Layout>
      <App />
    </Layout>
  </ThemeProvider>
);
