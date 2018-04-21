import React from 'react';
import '../css/AddTask.css';

class AddTask extends React.Component {

	render() {
		return (
			<form className="addTask">
				<label htmlFor="task-title">Title</label>
				<input type="text" id="task-title" name="task-title"/>
				<label htmlFor="task-desc">Description</label>
				<textarea id="task-desc" name="task-desc"></textarea>
				<button>+ Add Task</button>
			</form>
		)
	}
}

export default AddTask;