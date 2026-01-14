import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSeeMore, productsFetch } from "../redux/storeSlice";
import { addToCart } from "../redux/cartSlice";
import "./card.css";
import Pagination from "../components/Card/Pagination";

export default function Card() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(productsFetch());
  }, [dispatch]);

  const { status, data, seeMore, selectedCategory, searchText, error } =
    useSelector((state) => state.product);

  if (status === "loading") return <h4>Loading...</h4>;
  if (status === "failed") return <h4>{error}</h4>;
  if (!data || data.length === 0) return <p>No products found.</p>;

  const filteredProducts = data
    .filter((product) =>
      selectedCategory === "all" ? true : product.category === selectedCategory
    )
    .filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );

  if (filteredProducts.length === 0) return <p>No products found.</p>;

  // Pagination
  const ITEMS_PER_PAGE = 4;
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section>
      <ul className="card">
        {paginatedProducts.map((product) => (
          <li key={product.id}>
            <div className="card__head">
              <img src={product.image} alt={product.title} />
            </div>

            <div className="card__body">
              <p className="card__body__title">{product.title}</p>

              <div className="description">
                <p className={seeMore ? "disHeight" : ""}>
                  {product.description}
                </p>
                <span onClick={() => dispatch(onSeeMore())}>
                  {seeMore ? "See less" : "See more"}
                </span>
              </div>

              <div className="price">
                <p>${product.price}</p>
                <p>
                  ⭐ {product.rating.rate} ({product.rating.count})
                </p>
              </div>
            </div>

            <footer className="card__footer">
              <button onClick={() => dispatch(addToCart(product))}>
                Add to cart
              </button>
            </footer>
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </section>
  );
}
