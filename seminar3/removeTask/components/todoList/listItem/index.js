import React from 'react';
import './styles.css';

const ListItem = ({title, onRemove}) => (
    <div className='taskItem'>
        <div className='taskTitle'>{title}</div>
        <button
            onClick={onRemove}
        >Remove</button>
    </div>
);

export default ListItem;