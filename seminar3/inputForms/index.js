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
            taskAddingProcess: false,
            newTaskTitle: '',
        };

        this.formChange = this.formChange.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.cancelForm = this.cancelForm.bind(this);
    }

    submitForm = event => {
        if (this.state.newTaskTitle !== '') {
            this.setState({
                todoList: [...this.state.todoList, {
                    id: this.state.currIndex + 1,
                    title: this.state.newTaskTitle,
                }],
                currIndex: this.state.currIndex + 1,
                newTaskTitle: '',
                taskAddingProcess: false,
            });
            event.preventDefault();
        } else {
            this.setState({
                taskAddingProcess: false,
            })
        }
    };

    cancelForm = event => {
        this.setState({
            newTaskTitle: '',
            taskAddingProcess: false,
        })
    };

    formChange = event => {
        this.setState({newTaskTitle: event.target.value});
    };

    removeTask = taskRemoveIndex => {
        this.setState({todoList:
                this.state.todoList.filter((task, index) =>
                    index !== taskRemoveIndex)
        })
    };

    addTask = () => {
        this.setState({
            taskAddingProcess: true,
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
                {this.state.taskAddingProcess
                    ? <form onSubmit={this.submitForm}>
                        <div>
                            <input
                                type="text"
                                value={this.state.value}
                                onChange={this.formChange}
                                placeholder="Add new task title"
                            />
                        </div>
                        <input type="submit" value="OK" />
                        <input
                            type="button" value="Cancel"
                            onClick={this.cancelForm}
                        />
                    </form>
                    : <button
                        className="addButton"
                        onClick={this.addTask}
                    >
                        Add new task
                    </button>
                }
            </div>
        );
    }
}

export default TodoList;