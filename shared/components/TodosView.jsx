import React from 'react';

const handleDelete = (e) => {
    const id = Number(e.target.dataset.id);
    deleteTodo(id);
};

const handleEdit = (e) => {
    const id = Number(e.target.dataset.id);
    const val = todos.get(id).text;

    let newVal = window.prompt('', val);
    editTodo(id, newVal);
};

const TodosView = () => (
    <div id="todo-list">
        {
            todos.map( (todo, index) => {
                return (
                    <div key={index}>
                        <span>{todo}</span>

                        <button data-id={index} onClick={handleDelete}>
                            X
                        </button>
                        <button data-id={index} onClick={handleEdit}>
                            Edit
                        </button>
                    </div>
                );
            })
        }
    </div>
);



export default TodosView;
