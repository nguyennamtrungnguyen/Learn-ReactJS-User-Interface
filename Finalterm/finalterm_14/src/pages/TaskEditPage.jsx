import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useTask from "../hooks/useTask";

const TaskEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { editTask } = useTask();

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "",
    dueDate: "",
  });

  const { data, loading: isLoading } = useFetch(
    `http://localhost:3001/tasks/${id}`
  );

  useEffect(() => {
    if (data) setForm(data);
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    editTask({ id, task: form });
    navigate(`/tasks/${id}`);
  };

  if (isLoading) return <p>Loading...</p>;

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
          defaultValue={form.title}
        />
      </div>

      <div>
        <label htmlFor="">Nội dung</label>
        <input
          type="text"
          name="description"
          className="border-2 border-gray-300 w-full"
          onChange={handleChange}
          defaultValue={form.description}
        />
      </div>

      <div>
        <label htmlFor="">Trạng thái</label>
        <input
          type="text"
          name="status"
          className="border-2 border-gray-300 w-full"
          onChange={handleChange}
          defaultValue={form.status}
        />
      </div>

      <div>
        <label htmlFor="">Hạn chót</label>
        <input
          type="text"
          name="dueDate"
          className="border-2 border-gray-300 w-full"
          onChange={handleChange}
          defaultValue={form.dueDate}
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full py-2 text-center font-bold text-white bg-blue-500 my-4 hover:bg-blue-600"
      >
        Sửa công việc
      </button>
      <button
        onClick={() => navigate(-1)}
        className="w-full rounded-lg bg-gray-500 hover:bg-gray-600 text-white text-center py-2"
      >
        Quay lại
      </button>
    </div>
  );
};

export default TaskEditPage;
