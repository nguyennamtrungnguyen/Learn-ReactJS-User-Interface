import React from "react";
import { useSetRecoilState } from "recoil";
import { cartState } from "../recoil/CartState";
import { toastState } from "../recoil/ToastState";

const products = [
  { id: 1, name: "Áo", price: 100 },
  { id: 2, name: "Quần", price: 200 },
];

const ProductList = () => {
  const setCart = useSetRecoilState(cartState);
  const setToast = useSetRecoilState(toastState);

  const showToast = () => {
    setToast({
      message: "Thêm sản phẩm thành công!",
      visible: true,
    });
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} - {p.price}đ
          <button
            onClick={() => {
              addToCart(p);
              showToast();
            }}
          >
            Thêm
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
