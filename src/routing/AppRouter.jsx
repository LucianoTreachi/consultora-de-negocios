import { Route, Routes } from "react-router-dom";
import LayoutRoutes from "./LayoutRoutes";
import Main from "../page/main/Main";
import ServiceDetail from "../page/serviceDetail/ServiceDetail";
import Error404 from "../page/error404/Error404";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<LayoutRoutes />}>
        <Route path="/" element={<Main />} />
      </Route>

      <Route path="/servicio/:url" element={<ServiceDetail />} />

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
