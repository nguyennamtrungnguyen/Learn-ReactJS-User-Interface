import React, { useState, useCallback, memo } from "react";
import "./UseCallback.css";

// memo:
// - Ghi nhớ (memoize) component Child
// - Child CHỈ render lại khi props thay đổi
const Child = memo(({ increment, count }) => {
  console.log("Child render");

  return (
    <div className="callback-child">
      <p className="callback-count">Số hiện tại: {count}</p>
      <button className="callback-btn" onClick={increment}>
        Tăng số
      </button>
    </div>
  );
});

function UseCallBack() {
  // useState:
  // - count: state lưu giá trị số hiện tại
  // - setCount: cập nhật count
  const [count, setCount] = useState(0);

  // useCallback:
  // - Ghi nhớ hàm handleIncrement
  // - Không tạo lại hàm mới sau mỗi lần component render
  // - []: dependency rỗng → hàm chỉ được tạo 1 lần
  const handleIncrement = useCallback(() => {
    // Dùng callback trong setState
    // để luôn lấy giá trị count mới nhất
    setCount((c) => c + 1);
  }, []);

  return (
    <div className="callback-container">
      <h1 className="callback-title">Demo useCallback</h1>

      {/* 
        Truyền props cho Child:
        - increment: hàm handleIncrement (đã được useCallback ghi nhớ)
        - count: giá trị state
      */}
      <Child increment={handleIncrement} count={count} />
    </div>
  );
}

export default UseCallBack;
