import React, { useMemo, useState } from "react";
import "./UseMemo.css";

function UseMemo() {
  // useState:
  // - count: state dùng để đếm số lần click
  // - setCount: cập nhật count
  const [count, setCount] = useState(0);

  // numbers:
  // - mảng dữ liệu dùng để tính toán
  // - giá trị này KHÔNG thay đổi trong component
  const [numbers] = useState([1, 2, 3, 4, 5]);

  // useMemo:
  // - Ghi nhớ (memoize) kết quả của phép tính
  // - Chỉ tính lại khi dependency thay đổi
  const total = useMemo(() => {
    // Log để thấy khi nào phép tính được thực hiện lại
    console.log("Đang tính toán...");

    // Phép tính tốn tài nguyên (giả lập)
    return numbers.reduce((sum, n) => sum + n, 0);

    // [numbers]:
    // - Chỉ khi numbers thay đổi thì total mới được tính lại
  }, [numbers]);

  return (
    <div className="memo-container">
      <h2 className="memo-title">UseMemo</h2>

      {/* Hiển thị kết quả đã được ghi nhớ */}
      <div className="memo-total">{total}</div>

      {/* 
        Click button:
        - làm component render lại
        - nhưng KHÔNG làm chạy lại useMemo
        vì numbers không đổi
      */}
      <button className="memo-btn" onClick={() => setCount(count + 1)}>
        Click: {count}
      </button>
    </div>
  );
}

export default UseMemo;
