import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeProduct, updateProduct } from "../features/productsSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    title: product.title,
    category: product.category,
    price: product.price,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: name === "price" ? parseFloat(value) : value,
    }));
  };

  const saveEdit = () => {
    dispatch(updateProduct({ id: product.id, product: editForm }));
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setEditForm({
      title: product.title,
      category: product.category,
      price: product.price,
    });
    setIsEditing(false);
  };

  return (
    <div className="max-w-sm bg-blue-50 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
      <div className="p-4 space-y-2">
        <p className="text-xs text-blue-400">ID: {product.id}</p>

        {isEditing ? (
          <>
            <input
              name="title"
              value={editForm.title}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1 focus:outline-none focus:ring"
            />
            <input
              name="category"
              value={editForm.category}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1 focus:outline-none focus:ring"
            />
            <input
              name="price"
              type="number"
              step="0.01"
              value={editForm.price}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1 focus:outline-none focus:ring"
            />
          </>
        ) : (
          <>
            <h2 className="text-lg font-semibold text-blue-800">
              {product.title}
            </h2>
            <p className="text-sm text-blue-600">{product.category}</p>
            <p className="text-xl font-bold text-blue-700">
              ${product.price.toFixed(2)}
            </p>
          </>
        )}

        <div className="mt-4 flex space-x-2">
          {isEditing ? (
            <>
              <button
                onClick={saveEdit}
                className="flex-1 px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-sm rounded transition-colors"
              >
                Lưu
              </button>
              <button
                onClick={cancelEdit}
                className="flex-1 px-3 py-1 bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm rounded transition-colors"
              >
                Hủy
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-sm rounded transition-colors"
              >
                Chỉnh sửa
              </button>
              <button
                onClick={() => dispatch(removeProduct(product.id))}
                className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded transition-colors"
              >
                Xóa
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
