import { createRoot } from "react-dom/client";
import { App } from "./app.index";
import "@/locale/init.locale";

createRoot(document.getElementById("root")!).render(
    <App />
);
