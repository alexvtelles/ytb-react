import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts";

export const AppRoutes = () => {
  const { toggleThme } = useAppThemeContext();

  return (
    <Routes>
      <Route
        path="/home"
        element={
          <Button variant="contained" color="primary" onClick={toggleThme}>
            Teste
          </Button>
        }
      />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
