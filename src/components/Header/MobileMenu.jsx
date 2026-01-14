import { useDispatch } from "react-redux";
import { setCategory } from "../../redux/storeSlice";
import { motion, AnimatePresence } from "framer-motion";

import { IoClose } from "react-icons/io5";
import { BsGrid } from "react-icons/bs";
import { GiDiamondRing, GiDress, GiTShirt } from "react-icons/gi";
import { MdOutlineDevices } from "react-icons/md";
import { FaGift, FaPhoneVolume } from "react-icons/fa6";
import "./mobileMenu.css";

const categories = [
  { icon: BsGrid, name: "All", value: "all" },
  { icon: GiTShirt, name: "Men Clothing", value: "men's clothing" },
  { icon: GiDress, name: "Women Clothing", value: "women's clothing" },
  { icon: MdOutlineDevices, name: "Electronic", value: "electronics" },
  { icon: GiDiamondRing, name: "Jewelery", value: "jewelery" },
];

export default function MobileMenu({ isOpen, onClose }) {
  const dispatch = useDispatch();

  const handleCategoryClick = (value) => {
    dispatch(setCategory(value));
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="mobileMenu__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}></motion.div>

          {/* Panel */}

          <motion.div
            className="mobileMenu__panel"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
            }}>
            {/* Header */}
            <div className="mobileMenu__header">
              <h2 className="mobileMenu__title">
                <span className="mobileMenu__title-primary">Redux</span> Store
              </h2>
              <button className="mobileMenu__close-btn" onClick={onClose}>
                <IoClose />
              </button>
            </div>

            {/* Navigation */}
            <nav className="mobileMenu__nav">
              {/* Quick Find */}
              <div className="mobileMenu__section">
                <h3 className="mobileMenu__section-title">Quick Find</h3>
                <ul className="mobileMenu__category-list">
                  {categories.map((category, index) => (
                    <motion.li
                      key={category.value}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className="mobileMenu__category-item"
                      onClick={() => handleCategoryClick(category.value)}>
                      <category.icon className="mobileMenu__category-icon" />
                      <span className="mobileMenu__category-name">
                        {category.name}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Daily Offers */}
              <motion.div
                className="mobileMenu__daily-offer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}>
                <FaGift />
                <p>Daily Offers</p>
              </motion.div>

              {/* Call Center */}
              <motion.div
                className="mobileMenu__call"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}>
                <FaPhoneVolume />
                <div>
                  <p>Call Center</p>
                  <p>0093-708760475</p>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
