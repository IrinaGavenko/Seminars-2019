import React, { Component } from 'react';
import './styles.css';

import ListItem from "./listItem";

const taskItem = taskText => (<li>{taskText}</li>);

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: [{
                id: 1,
                title: 'Task1',
            }, {
                id: 2,
                title: 'Task2',
            }, {
                id: 3,
                title: 'Task3',
            }],
            currIndex: 4,
        };
    }

    removeTask = taskRemoveIndex => {
        this.setState({todoList:
                this.state.todoList.filter((task, index) =>
                    index !== taskRemoveIndex)
        })
    };

    addTask = () => {
        this.setState({
            todoList: [...this.state.todoList, {
                id: this.state.currIndex,
                title: 'NewTask'+this.state.currIndex,
            }],
            currIndex: this.state.currIndex + 1
        })
    };

    render() {
        return (
            <div className="App">
                <div className="todoList">
                    {this.state.todoList.map(task =>
                        <ListItem
                            title={task.title}
                        />)}
                </div>
                {this.index}
                <button
                    className="addButton"
                    onClick={this.addTask}
                >
                    Add new task
                </button>
            </div>
        );
    }
}

export default TodoList;