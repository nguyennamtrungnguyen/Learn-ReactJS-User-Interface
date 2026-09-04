import React, { useState, useMemo } from "react";
import "./FilterProductApp.css";
import filterProducts from "./ProductFilter";
import { products } from "./MockData"; 

const FilterProductApp = () => {
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const filtered = useMemo(() => {
    return filterProducts(products, search, minPrice, maxPrice);
  }, [search, minPrice, maxPrice]);

  const total = useMemo(() => {
    return filtered.reduce((sum, p) => sum + p.price, 0);
  }, [filtered]);

  return (
    <div className="app-container">
      <h1>Product Filter + Tổng Tiền</h1>

      <div className="filter-box">
        <div className="inputSearch">
          <label htmlFor="name">Tìm theo tên</label>
          <input
            id="name"
            placeholder="Tìm theo tên..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="inputSearch">
          <label htmlFor="minPrice">Giá nhỏ nhất</label>
          <input
            id="minPrice"
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(+e.target.value)}
          />
        </div>

        <div className="inputSearch">
          <label htmlFor="maxPrice">Giá lớn nhất</label>
          <input
            id="maxPrice"
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(+e.target.value)}
          />
        </div>
      </div>

      <div className="stats">
        <p>
          Số sản phẩm: <b>{filtered.length}</b>
        </p>
        <p>
          Tổng tiền: <b>${total}</b>
        </p>
      </div>

      <div className="product-list">
        {filtered.slice(0, 30).map((p) => (
          <div key={p.id} className="product-item">
            <span>{p.name}</span>
            <span>${p.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterProductApp;
