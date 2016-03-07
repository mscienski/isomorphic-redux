import React, {Component} from 'react';
import TodosList from 'containers/TodosList';
import * as TodoActions from 'actions/TodoActions';
import { connect } from 'react-redux';

export default class Home extends Component {
    render() {
        return (
            <div id="todo-list">
                <TodosView todos={todos}/>
            </div>
        )
    }
}
