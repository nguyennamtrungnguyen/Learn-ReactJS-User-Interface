import React, { useState, useEffect } from "react";
import "./UseEffect.css";

function UseEffect() {
  // useState:
  // - seconds: state lưu số giây đã trôi qua
  // - setSeconds: cập nhật giá trị seconds
  const [seconds, setSeconds] = useState(0);

  // useEffect:
  // - Dùng để xử lý side effect (timer, gọi API, DOM, event...)
  // - Chạy sau khi component render
  useEffect(() => {
    // setInterval:
    // - Tạo timer chạy mỗi 1000ms (1 giây)
    // - Mỗi lần chạy → tăng seconds lên 1
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    // cleanup function:
    // - Chạy khi component bị unmount
    // - Hoặc trước khi useEffect chạy lại
    // - Dùng để dọn dẹp side effect
    return () => clearInterval(interval);

    // [] dependency array:
    // - useEffect chỉ chạy 1 lần duy nhất khi component được mount
    // - Giống componentDidMount trong class
  }, []);

  return (
    <div className="timer-container">
      <p className="timer-title">Thời gian đã trôi qua</p>
      <p className="timer-seconds">{seconds} giây</p>
    </div>
  );
}

export default UseEffect;
