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
			</div>
		)
	}
}

export default Task;