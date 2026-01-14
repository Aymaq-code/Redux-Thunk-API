import { useState } from "react";
import { FaGift } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsBasket } from "react-icons/bs";
import { HiMenuAlt2 } from "react-icons/hi";
import { AnimatePresence } from "framer-motion";

import Logo from "../components/Header/Logo";
import Search from "../components/Header/Search";
import HeaderRight from "../components/Header/HeaderRight";
import MobileMenu from "../components/Header/MobileMenu";
import MegaMenuQuickFind from "../components/Header/MegaMenuQuickFind";
import "./header.css";

export default function Header({ jewelery }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuickFindOpen, setIsQuickFindOpen] = useState(false);
  return (
    <>
      <header className="header">
        <div className="header__container">
          {/* Header Top */}
          <div className="header__top">
            {/* Left: Menu Toggle + Logo */}
            <div className="header__top-left">
              {/* Mobile Menu Toggle */}
              <button
                className="header__menu-toggle"
                onClick={() => setIsMobileMenuOpen(true)}>
                <HiMenuAlt2 />
              </button>
              <Logo />
            </div>

            {/* Center: Search - Hidden on mobile */}
            <div className="header__search-desktop">
              <Search />
            </div>

            {/* Right: Actions */}
            <HeaderRight showCall={true} />
          </div>

          {/* Mobile Search - Below logo on mobile */}
          <div className="header__search-mobile">
            <Search />
          </div>

          {/* Header Bottom Navigation */}
          <div className="header__bottom">
            <nav className="header__nav">
              <button className="header__nav-item">
                <BsBasket className="header__nav-item-icon" />
                <span>New Products</span>
              </button>

              <button className="header__nav-item">
                Best Sales
                <span className="header__nav-badge">HOT</span>
              </button>

              <button className="header__nav-item">Special Offers</button>

              <div
                className="header__quick-find"
                onMouseEnter={() => setIsQuickFindOpen(true)}
                onMouseLeave={() => setIsQuickFindOpen(false)}>
                <button className="header__nav-item">
                  <span>Quick Find</span>
                  <TiArrowSortedDown
                    className={`header__quick-find-arrow ${
                      isQuickFindOpen ? "header__quick-find-arrow--open" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isQuickFindOpen && <MegaMenuQuickFind jewelery={jewelery} />}
                </AnimatePresence>
              </div>
            </nav>
            {/* Daily Offers Button */}
            <button className="header__daily-offer">
              <FaGift className="header__daily-offer-icon" />
              <span>Daily Offers</span>
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
