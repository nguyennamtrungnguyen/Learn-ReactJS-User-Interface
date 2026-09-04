import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cartState } from "../recoil/CartState";
import { toastState } from "../recoil/ToastState";

const ProductList = () => {
  const [product, setProduct] = useRecoilState();
  const setCart = useSetRecoilState(cartState);
  const setToast = useSetRecoilState(toastState);

  useEffect(() => {
    const fetchData = async () => {
      setProduct({ data: [], loading: true, error: null });

      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProduct({ data, loading: false, error: null });
      } catch {
        setProduct({ data: [], loading: false, error: "Lỗi API" });
      }
    };

    fetchData();
  }, []);

  const addToCart = (p) => {
    setCart((prev) => [...prev, { ...p, quantity: 1 }]);

    setToast({ message: "Đã thêm!", visible: true });
    setTimeout(() => setToast({ message: "", visible: false }), 2000);
  };

  if (product.loading) return <p>Loading...</p>;
  if (product.error) return <p>{product.error}</p>;

  return (
    <>
      <h2>Products</h2>
      {product.data.map((p) => (
        <div key={p.id} className="product">
          <p>{p.title}</p>
          <p>{p.price}$</p>
          <button onClick={() => addToCart(p)}>Add</button>
        </div>
      ))}
    </>
  );
};

export default ProductList;
