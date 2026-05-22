import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const TaskDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: task, loading: isLoading } = useFetch(
    `http://localhost:3001/tasks/${id}`
  );

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="bg-blue-100 border-2 border-gray-300 rounded-lg px-1 py-2 w-1/3 mx-auto my-12">
      {!isLoading && task && (
        <>
          <h1 className="text-blue-800 font-bold">{task.title}</h1>
          <p>Mô tả: {task.description}</p>
          <p>Trạng thái: {task.status}</p>
          <p>Hạn chót: {task.dueDate}</p>
          <div className="flex flex-row justify-between items-center mt-4">
            <button
              onClick={() => navigate(-1)}
              className="w-1/3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-center py-2"
            >
              Quay lại
            </button>
            <button
              onClick={() => navigate(`/tasks/${task.id}/edit`)}
              className="w-1/3 rounded-lg bg-red-500 hover:bg-red-600 text-white text-center py-2"
            >
              Sửa
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskDetailsPage;
