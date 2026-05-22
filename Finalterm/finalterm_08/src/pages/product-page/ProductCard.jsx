import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cartSlice";

export default function ProductCard({ name, description, material, id }) {
  const dispatch = useDispatch();

  return (
    <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-sm text-gray-500">Chất liệu: {material}</div>
      <div className="mt-4 flex flex-row justify-between">
        <Link
          to={`/products/${id}`}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          View
        </Link>
        <button
          onClick={() => dispatch(addItem({ name, description, material, id }))}
          className="px-4 py-2 bg-green-600 text-white rounded  hover:bg-green-700"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
