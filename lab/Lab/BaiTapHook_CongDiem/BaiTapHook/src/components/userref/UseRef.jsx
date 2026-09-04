import React, { useRef } from "react";
import "./UseRef.css";

function UseRef() {
  // useRef:
  // - Tạo một object ref
  // - ref.current dùng để lưu giá trị
  // - Thay đổi ref KHÔNG làm component render lại
  const inputRef = useRef(null);

  // Hàm xử lý khi click button
  const handleClick = () => {
    // inputRef.current:
    // - trỏ trực tiếp tới DOM <input>
    // - gọi focus() để focus vào ô nhập
    inputRef.current.focus();
  };

  return (
    <div className="ref-container">
      <p className="ref-title">Ví dụ useRef</p>

      {/* 
        ref={inputRef}:
        - Gán ref cho input
        - Sau khi render, inputRef.current = DOM input
      */}
      <input
        ref={inputRef}
        type="text"
        className="ref-input"
        placeholder="Nhập nội dung..."
      />

      {/* Click → gọi handleClick → focus input */}
      <button className="ref-btn" onClick={handleClick}>
        Focus vào ô nhập
      </button>
    </div>
  );
}

export default UseRef;
