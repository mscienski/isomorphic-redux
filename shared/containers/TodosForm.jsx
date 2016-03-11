import React, {Component} from 'react';
import {createTodo} from 'actions/TodoActions';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleSubmit: (input) => {
            dispatch(createTodo(input.value))
            input.value = '';
        }
    }
};

@connect(null, mapDispatchToProps)
export default class TodosForm extends Component {
    render() {
        return (
            <div id="todo-form">
                <input type="text" placeholder="type todo" ref="todo-input"/>
                <input type="submit"
                       value="OK!"
                       onClick={() => this.props.handleSubmit(this.refs['todo-input'])}
                />
            </div>
        )
    }
}
