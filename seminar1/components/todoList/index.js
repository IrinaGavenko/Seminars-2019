import React, { Component } from 'react';
import './styles.css';

import ListItem from "./listItem";

const taskItem = taskText => (<li>{taskText}</li>);

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: [{
                title: 'Task1',
                category: 'Category1',
                expTime: 15,
            }, {
                title: 'Task2',
                category: 'Category3',
                expTime: 12,
            }, {
                title: 'Task4',
                category: 'Category1',
                expTime: 7,
            }],
        }
    }

    render() {
        return (
            <div className="App">
                <div className="todoList">
                    {this.state.todoList.map(task => ListItem(task))}
                </div>
                <button
                    className="addButton"
                >
                    Add new task
                </button>
            </div>
        );
    }
}

export default TodoList;