import React, { useReducer } from "react";
import "./UseReducer.css";

// reducer function:
// - Nhận vào state hiện tại và action
// - Quyết định state mới dựa trên action.type
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      // Tăng count lên 1
      return { count: state.count + 1 };

    case "decrement":
      // Giảm count xuống 1
      return { count: state.count - 1 };

    default:
      // Nếu action không hợp lệ → giữ nguyên state
      return state;
  }
}

function UseReducer() {
  // useReducer:
  // - state: state hiện tại
  // - dispatch: hàm gửi action
  // - reducer: hàm xử lý logic thay đổi state
  // - { count: 0 }: state ban đầu
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="reducer-container">
      <p className="reducer-title">Ví dụ useReducer</p>

      {/* Hiển thị state */}
      <div className="reducer-count">{state.count}</div>

      <div className="reducer-buttons">
        {/* 
          dispatch({ type: "decrement" }):
          - Gửi action cho reducer
          - reducer xử lý và trả về state mới
        */}
        <button
          className="reducer-btn"
          onClick={() => dispatch({ type: "decrement" })}
        >
          −
        </button>

        {/* 
          dispatch({ type: "increment" }):
          - Gửi action tăng count
        */}
        <button
          className="reducer-btn"
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default UseReducer;
