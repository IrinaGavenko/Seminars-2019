import React from 'react';
import './styles.css';

const ListItem = ({title, category, expTime}) => (
    <div className='taskItem'>
        <div className='taskTitle'>{title}</div>
        <div className='taskDescription'>
            {category}
            <div className='taskExpTime'>{expTime}</div>
        </div>
    </div>
);

export default ListItem;