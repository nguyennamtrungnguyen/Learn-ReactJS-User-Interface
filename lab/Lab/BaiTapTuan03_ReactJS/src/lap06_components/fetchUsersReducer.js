export const initialState = {
  status: "idle", // idle | loading | success | error
  users: [],
  error: null,
};

export function fetchUsersReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        status: "loading",
        error: null,
      };

    case "FETCH_SUCCESS":
      return {
        status: "success",
        users: action.payload,
        error: null,
      };

    case "FETCH_ERROR":
      return {
        status: "error",
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
}
