import React from 'react';
import '../css/AddTaskForm.css';

class AddTaskForm extends React.Component {
	titleRef = React.createRef();
	descRef = React.createRef();

	createTask = e => {
		e.preventDefault();
		const task = {
			title: this.titleRef.current.value,
			desc: this.descRef.current.value
		}

		this.props.addTask(task);
		e.currentTarget.reset();
	}

	clearForm = e => {
		console.log(e);
	}

	render() {
		return (
			<form className="add-task-form" onSubmit={this.createTask}>
				<input ref={this.titleRef} type="text" placeholder="Title" />
				<textarea ref={this.descRef} placeholder="Task Description..."></textarea>
				<button className="submit-button" type="submit">Add Task</button>
				<button className="cancel-button" onClick={this.clearForm}>Cancel</button>
			</form>
		)
	}
}

export default AddTaskForm;