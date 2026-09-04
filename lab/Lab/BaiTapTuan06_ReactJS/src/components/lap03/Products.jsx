import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "iPhone 15", price: 1200, img: "https://picsum.photos/400/300?1" },
  { id: 2, name: "Samsung S23", price: 900, img: "https://picsum.photos/400/300?2" },
  { id: 3, name: "Macbook", price: 2000, img: "https://picsum.photos/400/300?3" },
];

const Products = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
        >
          <img src={p.img} className="w-full h-48 object-cover" />

          <div className="p-4">
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="text-blue-600 font-bold">${p.price}</p>

            <Link
              to={`/products/${p.id}`}
              className="block mt-3 text-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Xem chi tiết
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;