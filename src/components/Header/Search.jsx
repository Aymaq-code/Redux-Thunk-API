import { useDispatch } from "react-redux";
import { setSearchText } from "../../redux/storeSlice";
import "./search.css";

export default function Search() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchText(e.target.value));
  };
  return (
    <div className="search">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="search__input"
        onChange={handleChange}
      />
    </div>
  );
}
