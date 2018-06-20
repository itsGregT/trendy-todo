import React from 'react';
import '../css/AddTaskForm.css';

class AddTaskForm extends React.Component {
	titleRef = React.createRef();
	descRef = React.createRef();

	clearForm = (e) => {
		e.preventDefault();
		document.querySelector(".add-task-form").reset();
	}

	createTask = e => {
		e.preventDefault();
		const task = {
			title: this.titleRef.current.value,
			desc: this.descRef.current.value
		}

		if(this.props.status === "todo") {
			this.props.addTaskToToDo(task);
		} else if (this.props.status === "doing") {
			this.props.addTaskToDoing(task);
		} else {
			this.props.addTaskToComplete(task);
		}
		
		e.currentTarget.reset();
	}

	render() {
		return (
			<form className="add-task-form bg-section-wrapper" onSubmit={this.createTask}>
				<input ref={this.titleRef} type="text" placeholder="Title" />
				<textarea ref={this.descRef} placeholder="Task Description..."></textarea>
				<button className="submit-button" type="submit">Add Task</button>
				<button className="cancel-button" onClick={this.clearForm}>Cancel</button>
			</form>
		)
	}
}

export default AddTaskForm;