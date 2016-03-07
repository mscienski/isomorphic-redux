const defaultState = [{
    1: {
        text: 'Bleh'
    }
}];

export default function todoReducer(state = defaultState, action) {
    switch(action.type) {
        case 'CREATE_TODO':
            return [...state, action.text];
        case 'EDIT_TODO':
            return state
                .slice(0, state.indexOf(action.text) - 1)
                .concat(state[state.indexOf(action.text)])
                .concat(state.slice(state.indexOf(action.text)));
        case 'DELETE_TODO':
            return state
                .slice(0, state.indexOf(action.text) -1)
                .concat(state.slice(state.indexOf(action.text)));
        default:
            return state;
    }
}
