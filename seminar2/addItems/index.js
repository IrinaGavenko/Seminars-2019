import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todoList';
import Header from './components/header';
import Footer from './components/footer';
import './index.css';

ReactDOM.render(
    <React.Fragment>
        <Header />
        <TodoList />,
        <Footer />
    </React.Fragment>,
  document.getElementById('root')
);
