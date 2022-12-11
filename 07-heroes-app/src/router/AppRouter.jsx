import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      {/* Estas rutas no se reenderizan, solo indican el mapeo del front */}
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        {/* <Route
          path="login/*"
          element={
            <PublicRoute>
              <Routes> Otra forma valida de hacer lo mismo, esta es mejor si queremos agregar mas rutas publicas
                <Route path="/*" element={<LoginPage />} />
                <Route path="/*" element={<LoginPage />} />
                <Route path="/*" element={<LoginPage />} />
                <Route path="/*" element={<LoginPage />} />
                <Route path="/*" element={<LoginPage />} />
              </Routes>
            </PublicRoute>
          }
        /> */}

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
        {/* <Route path="login" element={<LoginPage />} /> */}
        {/* <Route path="/*" element={<HeroesRoutes />} /> */}
      </Routes>
    </>
  );
};
