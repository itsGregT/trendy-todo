import React from 'react';
import close from '../img/close-icon.png';
import leftArrow from '../img/left-arrow.png';
import rightArrow from '../img/right-arrow.png';
import '../css/Task.css';

const Task  = (props) => {
	const {title, desc} = props.details; 
	const {status} = props;
	return (
		<div className="task">
			<div className="task-header">
				<h3>{title}</h3>
					<span className="delete-task-wrapper" onClick={status === "todo" ? props.deleteTaskFromTodo : 
					status === "doing" ? props.deleteTaskFromDoing : 
					props.deleteTaskFromComplete}><img className="delete-task" src={close} /></span>
			</div>
			<div className="task-content">
				<p>{desc}</p>
			</div>
			<div className="status-btns">
				{status === 'todo' ? (
					<div className="movement-arrows">
						<p>Move</p>
						<img src={rightArrow} className="right-arrow movement-arrow" onClick={() => props.moveFromToDoToDoing(props.index)} />
					</div>
				) : status === 'doing' ? (
					<div className="movement-arrows">
						<p>Move</p>
						<img src={leftArrow} className="left-arrow movement-arrow" onClick={() => props.moveFromDoingToToDo(props.index)} />
						<img src={rightArrow} className="right-arrow movement-arrow" onClick={() => props.moveFromDoingToComplete(props.index)} />
					</div>
				) : (
					<div className="movement-arrows">
						<p>Move</p>
						<img src={leftArrow} className="left-arrow movement-arrow" onClick={() => props.moveFromCompleteToDoing(props.index)} />
					</div>
				)}
			</div>
		</div>
	)
}

export default Task;