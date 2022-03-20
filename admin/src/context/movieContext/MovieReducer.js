const MovieReducer = (state, action) => {
    switch (action.type) {
      case "GET_MOVIES_START":
        return {
          movies: [],
          isFetching: true,
          error: false,
        };
      case "GET_MOVIES_SUCCESS":
        return {
          movies: action.payload,
          isFetching: false,
          error: false,
        };
      case "GET_MOVIES_FAILURE":
        return {
          movies: [],
          isFetching: false,
          error: true,
        };
      case "CREATE_MOVIE_START":
        return {
          ...state,
          isFetching: true,
          error: false,
        };
      case "CREATE_MOVIE_SUCCESS":
        return {
          movies: [...state.movies, action.payload],
          isFetching: false,
          error: false,
        };
      case "CREATE_MOVIE_FAILURE":
        return {
          ...state,
          isFetching: false,
          error: true,
        };
      case "UPLOAD_MOVIE_START":
        return {
          ...state,
          isFetching: true,
          error: false,
        };
      case "UPLOAD_MOVIE_SUCCESS":
        return {
          // if new movie is some updated version, we just update using map and id of older movie with content of new movie
          movies: state.movies.map(
            (movie) => movie._id === action.payload._id && action.payload
          ),
          isFetching: false,
          error: false,
        };
      case "UPLOAD_MOVIE_FAILURE":
        return {
          ...state,
          isFetching: false,
          error: true,
        };
      case "DELETE_MOVIE_START":
        return {
          ...state,
          isFetching: true,
          error: false,
        };
      case "DELETE_MOVIE_SUCCESS":
        return {
          movies: state.movies.filter((movie) => movie._id !== action.payload),
          isFetching: false,
          error: false,
        };
      case "DELETE_MOVIE_FAILURE":
        return {
          ...state,
          isFetching: false,
          error: true,
        };
      default:
        return { ...state };
    }
  };
  
  export default MovieReducer;