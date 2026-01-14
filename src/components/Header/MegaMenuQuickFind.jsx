import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { setCategory } from "../../redux/storeSlice";
import { BsGrid } from "react-icons/bs";
import { GiDiamondRing, GiDress, GiTShirt } from "react-icons/gi";
import { MdOutlineDevices } from "react-icons/md";
import "./megaMenuQuickFind.css";

const categories = [
  { icon: BsGrid, name: "All", value: "all" },
  { icon: GiTShirt, name: "Men Clothing", value: "men's clothing" },
  { icon: GiDress, name: "Women Clothing", value: "women's clothing" },
  { icon: MdOutlineDevices, name: "Electronic", value: "electronics" },
  { icon: GiDiamondRing, name: "Jewelery", value: "jewelery" },
];

export default function MegaMenuQuickFind() {
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="megaMenu">
      <ul className="megaMenu__list">
        {categories.map((category) => (
          <li
            key={category.id}
            className="megaMenu__item"
            onClick={() => dispatch(setCategory(category.value))}>
            <category.icon className="megaMenu__item-icon" />
            <p className="megaMenu__item-name">{category.name}</p>
            <p className="megaMenu__item-discount">20% Off</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
