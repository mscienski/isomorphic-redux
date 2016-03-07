import React, {PropTypes} from 'react';

const Todo = (handleDelete, handleEdit, text) => (
    <div>
        <span>{text}</span>

        <button data-id={index} onClick={handleDelete}>
            X
        </button>
        <button data-id={index} onClick={handleEdit}>
            Edit
        </button>
    </div>
);

export default Todo;
