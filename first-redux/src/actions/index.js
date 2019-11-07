import axios from 'axios';

export const getUserDataAction = () => dispatch => {
    // console.log(getState());
    return axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => dispatch({type: 'GET_USER', payload: res.data}))
  }

// export const editUserDataAction = () => (dispatch, getState) => {
//     console.log(getState().getData, 'action');
//     dispatch({type: "sds"})
// }