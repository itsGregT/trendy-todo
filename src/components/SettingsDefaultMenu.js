import React from 'react';
import '../css/SettingsMenu.css';

class SettingsMenu extends React.Component {
	render() {
		return(
			<div className="basic-settings">
				<h3>Settings</h3>
				<p onClick={this.props.changeMenuType}>Change Background</p>
				<p onClick={this.props.clearLists} className="danger-zone">Clear All Lists</p>
			</div>
		)
	}
}

export default SettingsMenu;