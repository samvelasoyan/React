const initState = {
    body: [],
    edit: false
};

const getUserDataReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_USER":
            return { ...state, body: action.payload };
        case "REMOVE_USER":
            return { ...state, body: action.payload };
        case "EDIT":
            return { ...state, body: action.payload };
        case "CHANGE_NAME":
            return { ...state, body: action.payload };
        case "CHANGE_EMAIL":
            return { ...state, body: action.payload };
        case "CHANGE_POSITION":
            return { ...state, body: action.payload };
        case "CHANGE_COUNTRY":
            return { ...state, body: action.payload };
        default:
            return state;
    }
};

export default getUserDataReducer;
