import React, { Component } from 'react';
import './styles.css';

import ListItem from "./listItem";

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

        this.removeTask = this.removeTask.bind(this);
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
                    {this.state.todoList.map((task, index) =>
                        <div className="listItem">
                            <ListItem
                                key={task.id}
                                title={task.title}
                                onRemove={() => this.removeTask(index)}
                            />
                        </div>)}
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