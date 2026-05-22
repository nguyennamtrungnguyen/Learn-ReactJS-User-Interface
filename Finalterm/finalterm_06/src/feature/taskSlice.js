import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// ===================== Slice =====================
const initialValue = {
  tasks: [],
  isLoading: false,
  error: null,
};

const taskSlice = createSlice({
  name: "task",
  initialState: initialValue,
  reducers: {},

  extraReducers: (builder) => {
    builder

      // fetch task
      .addCase(fetchTasks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //   delete task
      .addCase(deleteTasks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteTasks.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// ===================== async thunk =====================
export const fetchTasks = createAsyncThunk(
  "taskSlice/fetchTasks",
  async (_, { rejectWithValue }) => {
    return await fetch("http://localhost:731/tasks")
      .then((res) => res.json())
      .catch((err) => rejectWithValue(err));
  },
);

export const deleteTasks = createAsyncThunk(
  "taskSlice/deleteTasks",
  async (id, { rejectWithValue }) => {
    await fetch(`http://localhost:731/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "content-Type": "application/json",
      },
    }).catch((err) => rejectWithValue(err));
  },
);

// ==================== export =====================

export default taskSlice.reducer;
