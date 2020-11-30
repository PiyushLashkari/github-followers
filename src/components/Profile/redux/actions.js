import { getData } from "../../../utils";

const BASE_URL = "https://api.github.com/users";

export function getFollowers(id) {
  return (dispatch) => {
    const URL = `${BASE_URL}/${id}/followers`;
    dispatch({ type: "FOLLOWERS/FETCHING", payload: { id, page: 1 } });
    getData(URL)
      .then((data) => {
        dispatch({ type: "FOLLOWERS/FETCHED", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "FOLLOWERS/ERROR", payload: error });
      });
  };
}

export function getMoreFollowers() {
  return (dispatch, getState) => {
    const { id, page } = getState();
    const URL = `${BASE_URL}/${id}/followers?page=${page + 1}`;
    dispatch({ type: "FOLLOWERS/FETCHING", payload: { id, page: page + 1 } });
    getData(URL)
      .then((data) => {
        dispatch({ type: "FOLLOWERS/FETCH_MORE", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "FOLLOWERS/ERROR", payload: error });
      });
  };
}
