import { createRoot } from "react-dom/client";
import { App } from "./app.index";
import "@/locale/local.init";

createRoot(document.getElementById("root")!).render(<App />);
