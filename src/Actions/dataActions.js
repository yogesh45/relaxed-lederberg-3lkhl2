import axios from "axios";

export const fetchData = async (dispatch) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({ type: "FETCH_DATA_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_DATA_ERROR", payload: error.message });
  }
};

export const deleteData = (id) => {
  return {
    type: "DELETE_DATA",
    payload: id,
  };
};
