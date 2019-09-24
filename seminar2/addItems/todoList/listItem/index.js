import React from 'react';
import './styles.css';

const ListItem = ({title}) => (
    <div className='taskItem'>
        <div className='taskTitle'>{title}</div>
        <button>Remove</button>
    </div>
);

export default ListItem;