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

	render() {
		return (
			<form className="add-task-form" onSubmit={this.createTask}>
				<input ref={this.titleRef} type="text"/>
				<textarea ref={this.descRef}></textarea>
				<button type="submit">Submit</button>
			</form>
		)
	}
}

export default AddTaskForm;