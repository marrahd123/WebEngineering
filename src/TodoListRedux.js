import { VisibilityFilters } from "./constants";

// The types of actions that you can dispatch to modify the state of the store
export const types = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  TOGGLE: "TOGGLE",
  SET_VISIBILITY_FILTER: "SET_VISIBILITY_FILTER"
};

// Helper functions to dispatch actions, optionally with payloads
export const actionCreators = {
  add: text => {
    return { type: types.ADD, payload: { text, completed: false } };
  },
  remove: index => {
    return { type: types.REMOVE, payload: index };
  },
  toggle: index => {
    return { type: types.TOGGLE, payload: index };
  },
  setVisibilityFilter: visibility => {
    return { type: types.SET_VISIBILITY_FILTER, payload: visibility };
  }
};

// Initial state of the store
var key = 0;
const initialState = {
  todos: [
    { text: "eat", id: key++, completed: false },
    { text: "drink", id: key++, completed: false },
    { text: "be merry", id: key++, completed: false }
  ],
  visibilityFilter: VisibilityFilters.SHOW_ALL
};

// Function to handle actions and update the state of the store.
// Notes:
// - The reducer must return a new state object. It must never modify
//   the state object. State objects should be treated as immutable.
// - We set \`state\` to our \`initialState\` by default. Redux will
//   call reducer() with no state on startup, and we are expected to
//   return the initial state of the app in this case.
export const reducer = (state = initialState, action) => {
  const { todos } = state;
  const { type, payload } = action;

  switch (type) {
    case types.ADD: {
      return {
        ...state,
        todos: [payload, ...todos]
      };
    }
    case types.REMOVE: {
      return {
        ...state,
        todos: todos.filter(todo => todo.id !== payload)
      };
    }
    case types.TOGGLE: {
      return {
        ...state,
        todos: todos.map(todo => {
          return {
            ...todo,
            completed: todo.id === payload ? !todo.completed : todo.completed
          };
        })
      };
    }
    case types.SET_VISIBILITY_FILTER: {
      return {
        ...state,
        visibilityFilter: payload
      };
    }
    default:
      return state;
  }
};
