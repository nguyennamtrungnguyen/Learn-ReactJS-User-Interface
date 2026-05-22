import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productSlice";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  const { products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="px-4">
      <h2 className="text-green-500 text-xl my-4">Danh sách mặt hàng</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {!loading &&
          products &&
          products.map((x) => (
            <ProductCard product={x} key={x.id}></ProductCard>
          ))}
      </div>
    </div>
  );
};

export default ProductsPage;
