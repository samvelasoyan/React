import axios from 'axios';
import Objects from "../components/Objects";

export const postUserDataAction = () => dispatch => {
  const body = Objects()
   body.map((item) => {
    return axios.post('http://rest.learncode.academy/api/sam/friends', item )
  }) 
}

export const addUserAction = (fullName, email, position, country) => dispatch => {
  const data = Objects()
  const body = [...data ,{
    fullName,
    email,
    position,
    country,
    makeChanges: false, 
  }]
  body.map((item) => {
    return axios.post('http://rest.learncode.academy/api/sam/friends', item )
  }) 
}

export const getUserDataAction = () => (dispatch, getState) => {
    return axios.get('http://rest.learncode.academy/api/sam/friends')
            .then(res => {
              const data = res.data
              const body = Array.from(new Set(data.map(item => item.fullName)),(fullName => {
                let obj = data.find(s => s.fullName === fullName)
                  return {
                    id: obj.id,
                    fullName: fullName,
                    email: obj.email,
                    position: obj.position,
                    country: obj.country,
                    makeChanges: obj.makeChanges,
                  }
                }))
                body.map(item => {
                  if(item.fullName === undefined){
                    item.makeChanges = !item.makeChanges
                    getState().getData.edit = !getState().getData.edit
                  }
                })
              console.log(body)
              return dispatch({type: 'GET_USER', payload: body})
            })
  }

export const removeUserAction = (id) => (dispatch, getState) => {
  const body = getState().getData.body.filter((item) => item.id != id);
  body.map((item) => {
    return axios.post('http://rest.learncode.academy/api/sam/friends', item )
  }) 
    return dispatch({type: 'REMOVE_USER', payload: body}) 
}

export const editAction = (id) => (dispatch, getState) => {
  const body = [];
  getState().getData.body.map((item) => {
    if(item.id === id){
      item.makeChanges = !item.makeChanges
    }
    body.push(item)
  })
  getState().getData.edit = !getState().getData.edit
  dispatch({type: "EDIT", payload: body})
}

export const changeUserNameAction = (id, value) => (dispatch, getState) => {
    const body = [];
    getState().getData.body.map((item) => {
      if(item.id === id){
        item.fullName = value
      }
      body.push(item)
    })
    dispatch({type: "CHANGE_NAME", payload: body})
}

export const changeUserEmailAction = (id, value) => (dispatch, getState) => {
  const body = [];
  getState().getData.body.map((item) => {
    if(item.id === id){
      item.email = value
    }
    body.push(item)
  })
  dispatch({type: "CHANGE_EMAIL", payload: body})
}

export const changeUserPositionAction = (id, value) => (dispatch, getState) => {
  const body = [];
  getState().getData.body.map((item) => {
    if(item.id === id){
      item.position = value
    }
    body.push(item)
  })
  dispatch({type: "CHANGE_POSITION", payload: body})
}

export const changeUserCountryAction = (id, value) => (dispatch, getState) => {
  const body = [];
  getState().getData.body.map((item) => {
    if(item.id === id){
      item.country = value
    }
    body.push(item)
  })
  dispatch({type: "CHANGE_COUNTRY", payload: body})
}