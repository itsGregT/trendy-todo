import React from 'react';
import close from '../img/close-icon.png';
import '../css/Task.css';

const Task  = (props) => {
	const {title, desc} = props.details; 
	const {status} = props;
	return (
		<div className="task">
			<div className="task-header">
				<h3>{title}</h3>
					<span className="delete-task" onClick={status === "todo" ? props.deleteTaskFromTodo :  props.deleteTaskFromComplete}><img className="delete-task" src={close} /></span>
			</div>
			<div className="task-content">
				<p>{desc}</p>
			</div>
			<div className="status-btns">
				{status === 'todo' ? (
					<button id="complete-btn" onClick={() => props.moveToCompleteTasks(props.index)}>Complete</button>
				) : (
					<button id="incomplete-btn" onClick={() => props.moveToToDoTasks(props.index)}>Incomplete</button>
				)}
			</div>
		</div>
	)
}

export default Task;