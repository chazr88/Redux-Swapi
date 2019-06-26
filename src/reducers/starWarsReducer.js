import {FETCH_PEOPLE_START, FETCH_PEOPLE_SUCCESS, FETCH_PEOPLE_FALURE} from "../actions";
const initialState = {
  characters: [],
  error: ""
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_PEOPLE_START:
      return {
        ...state,
        error: "",
      };
    case FETCH_PEOPLE_SUCCESS:
      console.log("hello")
      return {
        ...state,
        error: "",
        characters: action.payload
        
      };
    case FETCH_PEOPLE_FALURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
