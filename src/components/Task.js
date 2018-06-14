import React from 'react';
import '../css/Task.css';

class Task extends React.Component {
	render() {
		const {title, desc} = this.props.details; 
		return (
			<div className="task">
				<div className="task-header">
					<h3>{title}</h3>
					<span className="delete-task" onClick={() => this.props.deleteTask(this.props.index)}>X</span>
				</div>
				<div className="task-content">
					<p>{desc}</p>
				</div>
				<button id="complete-btn" onClick={() => this.props.moveToCompleteTasks(this.props.index)}>Complete</button>
				<button id="incomplete-btn" onClick={() => this.props.moveToToDoTasks(this.props.index)}>Incomplete</button>
			</div>
		)
	}
}

export default Task;