import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { SidebarProvider } from "./context/SidebarContext.tsx";
import AuthContextProvider from "./context/AuuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <AuthContextProvider>
    <StrictMode>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </StrictMode>
  </AuthContextProvider>
);
