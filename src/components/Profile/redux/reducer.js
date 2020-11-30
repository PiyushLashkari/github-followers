const initialState = {
  id: '',
  data: [],
  isFetching: false,
  error: null,
  size: 0,
  page: 1,
};

export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case "FOLLOWERS/FETCHING":
      return {
        ...state,
        id: action.payload.id,
        isFetching: true,
        error: null,
        page: action.payload.page,
      };
    case "FOLLOWERS/FETCHED":
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        error: null,
        size: action.payload.length,
      };
    case "FOLLOWERS/FETCH_MORE":
      return {
        ...state,
        isFetching: false,
        data: [...state.data, ...action.payload],
        error: null,
      };
    case "FOLLOWERS/ERROR":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      break;
  }
  return state;
}
