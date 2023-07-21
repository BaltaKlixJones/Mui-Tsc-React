import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRouter } from "./Router";
import { NotificationProvider } from "./context/notification.context";
import { Suspense } from "react";

function App() {
  return (
    <div>
      <NotificationProvider>
        <BrowserRouter>
        <Suspense fallback={'Cargando ...'}>
          <AppRouter />
        </Suspense>
        </BrowserRouter>
      </NotificationProvider>
    </div>
  );
}

export default App;
