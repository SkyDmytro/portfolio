import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./fonts/SourceSansPro-Black.otf";
import "./fonts/SourceSansPro-BlackIt.otf";
import "./fonts/SourceSansPro-Bold.otf";
import "./fonts/SourceSansPro-BoldIt.otf";
import "./fonts/SourceSansPro-ExtraLight.otf";
import "./fonts/SourceSansPro-ExtraLightIt.otf";
import "./fonts/SourceSansPro-Regular.otf";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TypingTestProjectPage } from "./pages/TypingTestProjectPage.tsx";
import { StarWarsPage } from "./pages/StarWarsPage.tsx";
import { MobileChatPage } from "./pages/MobileChatPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/typingTest",
    element: <TypingTestProjectPage />,
  },
  {
    path: "/starWars",
    element: <StarWarsPage />,
  },
  {
    path: "/chat",
    element: <MobileChatPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
