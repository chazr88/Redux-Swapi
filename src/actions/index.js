// we'll need axios
import axios from 'axios';

export const FETCH_PEOPLE_START = "FETCH_PEOPLE_START";
export const FETCH_PEOPLE_SUCCESS = "FETCH_PEOPLE_SUCCESS";
export const FETCH_PEOPLE_FALURE = "FETCH_PEOPLE_FALURE";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator


export const getPeople = () => dispatch => {
    dispatch({type: FETCH_PEOPLE_START });
    axios
        .get(
            "https://swapi.co/api/people/"
        )
        .then(({ data }) => { dispatch({ type: FETCH_PEOPLE_SUCCESS, payload: data.results }) }) 
        .catch(err => dispatch({ type: FETCH_PEOPLE_FALURE}))
}

// export const getPhoto = () => dispatch => {
//     dispatch({ type: FETCH_PHOTO_START });
//     axios
//       .get(
//         "https://api.nasa.gov/planetary/apod?api_key=KmCA9PGsuKr2FIVNAshCEbCi5tjxzs7pKXUbqIqk"
//       )
//       .then(res =>
//         dispatch({ type: FETCH_PHOTO_SUCCESS, payload: res.data.hdurl })
//       )
//       .catch(err => dispatch({ type: FETCH_PHOTO_FALURE, payload: err.message }));
//   };
  