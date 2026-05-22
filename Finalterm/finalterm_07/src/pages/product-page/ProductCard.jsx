import { Link } from "react-router-dom";

export default function ProductCard({ name, description, material, id }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-sm text-gray-500">Chất liệu: {material}</div>
      <div className="mt-4">
        <Link
          to={`/products/${id}`}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          View
        </Link>
      </div>
    </div>
  );
}
