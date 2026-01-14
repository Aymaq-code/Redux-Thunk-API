import { FaStore } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "./logo.css";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <div className="logo">
      <div className="logo__icon">
        <FaStore />
      </div>
      <h2 className="logo__text" onClick={() => navigate("/")}>
        <span className="logo__text--primary">Redux</span>{" "}
        <span className="logo__text--secondary">Store</span>
      </h2>
    </div>
  );
}
