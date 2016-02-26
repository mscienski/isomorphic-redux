import React from 'react';

const handleSubmit = () => {
    let node = this.refs['todo-input'];

    createTodo(node.value);

    node.value = '';
};

const TodosForm = () => {
    <div id="todo-form">
        <input type="text" placeholder="type todo" ref="todo-input" />
        <input type="submit" value="OK!" onClick={handleSubmit} />
    </div>
};

export default TodosForm;
