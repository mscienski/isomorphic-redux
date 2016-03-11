import {CREATE_TODO, EDIT_TODO, DELETE_TODO, GET_TODOS} from 'actions/TodoActions';

const defaultState = [];

export default function todoReducer(state = defaultState, action) {
    switch(action.type) {
        case CREATE_TODO:
            return state.concat(action.res.data.text);
        case EDIT_TODO:
            return state.map((text, index) => {
                return (action.id === index) ? action.text : text
            });
        case DELETE_TODO:
            let deleteState = state.slice();
            deleteState.splice(action.id, 1);

            return newState;
        case GET_TODOS:
            return state.concat(action.res.data);
        default:
            return state;
    }
}
