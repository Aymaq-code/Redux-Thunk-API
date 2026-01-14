import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./applayout.css";

export default function AppLayout() {
  return (
    <main className="appLayout">
      <Header />
      <div className="containt">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
