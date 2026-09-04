import { useState } from "react";
import { getProducts } from "../assets/Product";
import "./ProductList.css";

const ProductList = () => {
  const [products] = useState(getProducts());
  const [hoverId, setHoverId] = useState(null);

  const handleAddToCart = (product) => {
    alert("Add to cart:", product);
  };

  return (
    <div className="product-container">
      <div className="product-list">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="product-card-img">
              <img
                className="img"
                src={hoverId === item.id ? item.hoverSrc : item.src}
                onMouseEnter={() => setHoverId(item.id)}
                onMouseLeave={() => setHoverId(null)}
              />
            </div>

            <div className="product-card-detail">
              <span className="product-card-name">{item.name}</span>
              <span className="product-card-price">
                {item.price.toLocaleString("vi-VN")} ₫
              </span>

              <button
                className="product-card-btn"
                onClick={() => handleAddToCart(item)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
