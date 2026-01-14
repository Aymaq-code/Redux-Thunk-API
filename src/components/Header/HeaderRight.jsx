import { FaBasketShopping, FaPhoneVolume, FaRegHeart } from "react-icons/fa6";
import { LuUserRound } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./headerRight.css";

export default function HeaderRight({ showCall = true, compact = false }) {
  const navigate = useNavigate();

  const cartLenght = useSelector((state) => state.cart);
  return (
    <div
      className={`headerRight ${
        compact ? "headerRight--compact" : "headerRight--large"
      }`}>
      {/* Call Center - Hidden on mobile */}
      {showCall && (
        <div className="headerRight__call">
          <div className="headerRight__call-icon">
            <FaPhoneVolume />
          </div>
          <h4 className="headerRight__call-info">
            <span className="headerRight__call-label">Call Center</span>
            <p className="headerRight__call-number">0093-708760475</p>
          </h4>
        </div>
      )}

      {/* Action Buttons */}
      <div className="headerRight__actions">
        {/* Cart */}
        <button
          className="headerRight__action-btn headerRight__action-btn--md"
          onClick={() => navigate("/cartItem")}>
          <FaBasketShopping />
          <span className="headerRight__cart-badge">{cartLenght.length}</span>
        </button>

        {/* Separator */}
        <span className="headerRight__separator" />

        {/* Wishlist */}
        <button className="headerRight__action-btn headerRight__action-btn--md headerRight__action-btn--hide-sm">
          <FaRegHeart />
        </button>

        {/* User */}
        <button className="headerRight__action-btn headerRight__action-btn--md headerRight__action-btn--hide-sm">
          <LuUserRound />
        </button>
      </div>
    </div>
  );
}
