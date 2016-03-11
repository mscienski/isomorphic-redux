import React, {PropTypes} from 'react';

const Todo = ({todo, handleDelete, handleEdit}) => (
    <div>
        <span>{todo}</span>

        <button onClick={handleDelete}>
            X
        </button>
        <button onClick={handleEdit}>
            Edit
        </button>
    </div>
);

export default Todo;
