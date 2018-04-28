import React from 'react';
import '../css/Task.css';

class Task extends React.Component {
	render() {
		const {title, desc} = this.props.details;
		return (
			<div className="task">
				<div className="task-header">
					<h3>{title}</h3>
					<span className="delete-task">X</span>
				</div>
				<div className="task-content">
					<p>{desc}</p>
				</div>
				<div className="task-toggle">
					<input id="toggle-todo" className="toggle toggle-left" type="radio"/>
					<label for="toggle-todo" class="btn">To-Do</label>
					<input id="toggle-complete" className="toggle toggle-right" type="radio"/>
					<label for="toggle-complete" class="btn">Complete</label>
				</div>
			</div>
		)
	}
}

export default Task;