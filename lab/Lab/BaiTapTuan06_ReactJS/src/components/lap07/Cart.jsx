const Cart = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">

      {/* LEFT - LIST */}
      <div className="md:col-span-2 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Giỏ hàng</h2>

        <div className="flex items-center gap-4 border-b pb-4 mb-4">
          <img
            src="https://picsum.photos/100/80"
            className="rounded"
          />

          <div className="flex-1">
            <h3 className="font-semibold">iPhone 15</h3>
            <p className="text-gray-500">$1000</p>
          </div>

          <div className="flex items-center gap-2">
            <button className="px-2 border">-</button>
            <span>1</span>
            <button className="px-2 border">+</button>
          </div>

          <button className="text-red-500">X</button>
        </div>
      </div>

      {/* RIGHT - SUMMARY */}
      <div className="bg-white p-4 rounded shadow h-fit">
        <h2 className="text-xl font-bold mb-4">Tổng đơn</h2>

        <div className="flex justify-between mb-2">
          <span>Tạm tính</span>
          <span>$1000</span>
        </div>

        <div className="flex justify-between font-bold text-lg mb-4">
          <span>Tổng</span>
          <span>$1000</span>
        </div>

        <button className="w-full bg-green-500 text-white py-2 rounded">
          Thanh toán
        </button>
      </div>

    </div>
  );
};

export default Cart;