import axios from 'axios';

export const getUserDataAction = () => dispatch => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => dispatch({type: 'GET_USER', payload: res.data}))
  }
