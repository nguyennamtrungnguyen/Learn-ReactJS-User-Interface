export const initialState = [];

export function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      if (!action.payload.trim()) return state;
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];

    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );

    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
}
