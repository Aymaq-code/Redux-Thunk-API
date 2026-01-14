import { createHashRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Card from "./pages/Card";
import CartItem from "./components/Card/CartItem";

const router = createHashRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Card /> },
      { path: "/cartItem", element: <CartItem /> },
    ],
  },
]);

export default router;
