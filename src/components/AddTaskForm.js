import React from 'react';
import '../css/AddTaskForm.css';

class AddTaskForm extends React.Component {
	titleRef = React.createRef();
	descRef = React.createRef();

	createTask = (e) => {
		e.preventDefault();
		const task = {
			title: this.titleRef.current.value,
			desc: this.descRef.current.value
		}
		this.props.addTask(task);
		e.currentTarget.reset();
	}

	render() {
		return (
			<form className="addTaskForm" onSubmit={this.createTask}>
				<input type="text" name="title" placeholder="Title" ref={this.titleRef} />
				<textarea name="desc" placeholder="Description" ref={this.descRef}></textarea>
				<button type="submit">+ Add Task</button>
			</form>
		)
	}
}

export default AddTaskForm;