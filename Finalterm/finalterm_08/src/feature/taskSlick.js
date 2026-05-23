import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// lấy dữ liệu localStorage
const taskLocal = JSON.parse(localStorage.getItem("tasks")) || [];

const initialState = {
  tasks: taskLocal,
  isLoading: false,
  error: null,
};

// FETCH TASK
export const fetchTask = createAsyncThunk(
  "task/fetchTask",
  async (_, { rejectWithValue }) => {
    try {
      // nếu localStorage có data thì dùng luôn
      const localData = JSON.parse(localStorage.getItem("tasks"));

      if (Array.isArray(localData) && localData.length > 0) {
        return localData;
      }

      // fetch file json lần đầu
      const res = await fetch("/data/task.json");
      const data = await res.json();

      // lưu localStorage
      localStorage.setItem("tasks", JSON.stringify(data.tasks));

      return data.tasks;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const taskSlice = createSlice({
  name: "task",
  initialState,

  reducers: {
    // CREATE
    addTask: (state, action) => {
      state.tasks.push(action.payload);

      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    // UPDATE FULL TASK
    updateTask: (state, action) => {
      const updatedTask = action.payload;

      state.tasks = state.tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task,
      );

      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    // UPDATE STATUS
    updateTaskStatus: (state, action) => {
      const { id, status } = action.payload;

      const task = state.tasks.find((task) => task.id === id);

      if (task) {
        task.status = status;
      }

      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    // DELETE
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);

      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },

  extraReducers: (builder) => {
    builder
      // PENDING
      .addCase(fetchTask.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      // SUCCESS
      .addCase(fetchTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks = action.payload;
      })

      // ERROR
      .addCase(fetchTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addTask, updateTask, updateTaskStatus, deleteTask } =
  taskSlice.actions;

export default taskSlice.reducer;
