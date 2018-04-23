import React from 'react';
import '../css/Task.css';

class Task extends React.Component {
	render() {
		return (
			<div className="task">
				<h3>{this.props.title}</h3>
				<p>test</p>
			</div>
		)
	}
}

export default Task;