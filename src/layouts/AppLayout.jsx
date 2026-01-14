import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "./applayout.css";

export default function AppLayout() {
  return (
    <main className="appLayout">
      <div className="containt">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
