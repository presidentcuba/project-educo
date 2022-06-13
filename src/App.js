import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "src/layouts";
import PrivateRoute from "./routes/PrivateRoute";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import "antd/dist/antd.css";
function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route
            path="*"
            element={
              <PrivateRoute>
                <ProtectedRoutes />
              </PrivateRoute>
            }
          />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
