import React, {Component, PropTypes} from 'react';
import {deleteTodo, editTodo} from 'actions/TodoActions';
import Todo from 'components/Todo';
import {connect} from 'react-redux';

const handleDelete = (e) => {
    const id = Number(e.target.dataset.id);
    deleteTodo(id);
};

const handleEdit = (e) => {
    const id = Number(e.target.dataset.id);
    const val = todos[id].text;

    let newVal = window.prompt('', val);
    editTodo(id, newVal);
};

const mapStateToProps = (state, ownProps) => {
    return {
        todos: ownProps.todos
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleDelete: (id) => {
            dispatch(handleDelete(id))
        },
        handleEdit: (id) => {
            dipatch(handleEdit(id))
        }
    }
};

@connect(mapStateToProps, mapDispatchToProps)
export default class TodosList extends Component {
    render() {
        return (
            <div>
                {this.props.todos.map((todo, index) =>
                    <Todo key={index}
                        {...todo}
                          handleDelete={() => this.props.handleDelete(index)}
                          handleEdit={() => this.props.handleEdit(index)}
                    />
                )}
            </div>
        )
    }
}
