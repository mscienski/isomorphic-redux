import React, {Component, PropTypes} from 'react';
import {deleteTodo, editTodo} from 'actions/TodoActions';
import Todo from 'components/Todo';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        todos: ownProps.todos
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleDelete: (id) => {
            dispatch(deleteTodo(id))
        },
        handleEdit: (id, val) => {
            let newVal = window.prompt('', val);
            dispatch(editTodo(id, newVal))
        }
    }
};

@connect(mapStateToProps, mapDispatchToProps)
export default class TodosList extends Component {
    render() {
        return (
            <div>
                {this.props.todos.map((todo, index) =>
                    <Todo
                        key={index}
                        todo={todo}
                        handleDelete={() => this.props.handleDelete(index)}
                        handleEdit={() => this.props.handleEdit(index, todo)}
                    />
                )}
            </div>
        )
    }
}
