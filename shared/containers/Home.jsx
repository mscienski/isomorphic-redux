import React, {Component} from 'react';
import TodosList from 'containers/TodosList';
import TodosForm from 'containers/TodosForm';
import * as TodoActions from 'actions/TodoActions';
import { connect } from 'react-redux';

const mapStateToProps = function(state) {
    return {
        todos: state.todos
    }
};

@connect(mapStateToProps)
export default class Home extends Component {
    static needs = [
        TodoActions.getTodos
    ];

    render() {
        return (
            <div id="todo-list">
                <TodosList todos={this.props.todos}/>
                <TodosForm />
            </div>
        )
    }
}
