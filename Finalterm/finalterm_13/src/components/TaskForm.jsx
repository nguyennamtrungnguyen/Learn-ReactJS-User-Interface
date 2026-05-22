import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTask } from "../features/taskSlice";

const TaskForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "",
    dueDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    dispatch(addTask(form));
    navigate("/tasks");
  };

  return (
    <div className="w-1/3 mx-auto border-2 p-4 border-gray-300 my-4 rounded-lg">
      <h3 className="text-center text-blue-600 font-bold text-xl">
        Thêm công việc
      </h3>
      <div>
        <label htmlFor="">Tiêu đề</label>
        <input
          type="text"
          name="title"
          className="border-2 border-gray-300 w-full"
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="">Nội dung</label>
        <input
          type="text"
          name="description"
          className="border-2 border-gray-300 w-full"
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="">Trạng thái</label>
        <input
          type="text"
          name="status"
          className="border-2 border-gray-300 w-full"
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="">Hạn chót</label>
        <input
          type="text"
          name="dueDate"
          className="border-2 border-gray-300 w-full"
          onChange={handleChange}
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full py-2 text-center font-bold text-white bg-blue-500 my-4 hover:bg-blue-600"
      >
        Thêm công việc
      </button>
    </div>
  );
};

export default TaskForm;
