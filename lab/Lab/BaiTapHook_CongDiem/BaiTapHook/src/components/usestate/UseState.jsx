import React, { useState } from "react";
import "./UseState.css";

function UseState() {
  // useState:
  // - count: state lưu giá trị hiện tại
  // - setCount: hàm cập nhật state
  // - 0: giá trị khởi tạo ban đầu
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      {/* 
        Hiển thị giá trị state count
        Khi count thay đổi → UI tự cập nhật
      */}
      <p className="counter-text">Bạn đã bấm {count} lần</p>

      {/* 
        Click button:
        - gọi setCount(count + 1)
        - cập nhật state
        - React render lại component
      */}
      <button className="counter-btn" onClick={() => setCount(count + 1)}>
        Bấm vào đây
      </button>
    </div>
  );
}

export default UseState;
