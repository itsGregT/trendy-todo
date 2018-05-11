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
				<div className="task-toggle">
					<input id="active" type="radio" name={this.props.index} checked readOnly/>
					<label htmlFor="active" className="toggle toggle-left">To-Do</label>
					<input id="inactive" type="radio" name={this.props.index} />
					<label htmlFor="inactive" className="toggle toggle-right">Complete</label>
				</div>
			</div>
		)
	}
}

export default Task;