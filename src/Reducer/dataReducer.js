const initialState = {
  posts: [],
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        posts: action.payload,
      };
    case "FETCH_DATA_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "DELETE_DATA":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== payload.id),
      };
    default:
      return state;
  }
};

export default dataReducer;
