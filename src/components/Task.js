import React from 'react';

class Task extends React.Component {
	render() {
		const {title, desc} = this.props.details;
		return (
			<div className="task">
				<h3>{title}</h3>
				<p>{desc}</p>
			</div>
		)
	}
}

export default Task;