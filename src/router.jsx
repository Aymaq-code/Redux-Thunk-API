import { createHashRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Card from "./pages/Card";

const router = createHashRouter([
  { element: <AppLayout />, children: [{ path: "/", element: <Card /> }] },
]);

export default router;
