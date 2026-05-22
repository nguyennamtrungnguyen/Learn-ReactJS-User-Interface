import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./features/productsSlice";
import ProductCard from "./components/ProductCard";
import ProductForm from "./components/ProductForm";

const App = () => {
  const { products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="px-4 my-12">
        <ProductForm />

        <h1 className="text-3xl text-blue-500 font-bold">Danh sách sản phẩm</h1>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {!loading &&
            products &&
            products.map((x) => (
              <ProductCard product={x} key={x.id}></ProductCard>
            ))}
        </div>
      </div>
    </>
  );
};

export default App;
