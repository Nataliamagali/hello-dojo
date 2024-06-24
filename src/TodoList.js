import React from 'react';

function TodoList() {
    const tasks = [
    ];

    return (
    <div>
    <li>Learn React</li>
    <li>Climb Mt. Everest</li>
    <li>Run a marathon</li>
    <li>Feed the dogs</li>
        <ul>
        {tasks.map((task, index) => (
            <li key={index}>{task}</li>
        ))}
        </ul>
    </div>
    );
}

export default TodoList;
