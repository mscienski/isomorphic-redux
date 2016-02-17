import React from 'react';
import TodosView from 'components/TodosView';
import TodosForm from 'components/TodosForm';
import { bindActionCreators } from 'redux';
import * as TodoActions from 'actions/TodoActions';
import { connect } from 'react-redux';

@connect(state => ({todos: state.todos }))
const Home = (todos, dispatch) => {
    return (
        <div id="todo-list">
            <TodosView todos={todos}
                {...bindActionCreators(TodoActions, dispatch)} />

            <TodosForm
                {...bindActionCreators(TodoActions, dispatch)} />
        </div>
    )
};

export default Home;
