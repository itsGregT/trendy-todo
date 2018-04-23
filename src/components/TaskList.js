import React from 'react';
import Task from './Task';

class TaskList extends React.Component {
	render() {
		return (
			<div className="task-list">
				<Task title={this.props.title} />
			</div>
		)
	}
}

export default TaskList;