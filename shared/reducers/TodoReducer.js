const defaultState = ['Bleh', 'Blah', 'Foo'];

export default function todoReducer(state = defaultState, action) {
    switch(action.type) {
        case 'CREATE_TODO':
            return [...state, action.text];
        case 'EDIT_TODO':
            return state.map((text, index) => {
                return (action.id === index) ? action.text : text
            });
        case 'DELETE_TODO':
            let deleteState = state.slice();
            deleteState.splice(action.id, 1);

            return newState;
        default:
            return state;
    }
}
