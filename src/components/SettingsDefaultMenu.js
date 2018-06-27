import React from 'react';
import SettingsBackgroundMenu from './SettingsBackgroundMenu';
import '../css/SettingsMenu.css';
import close from '../img/close-icon.png';

class SettingsMenu extends React.Component {
	render() {
		return(
			<div className="basic-settings">
				<h3>Settings</h3>
				<p onClick={this.changeBackground}>Change Background</p>
				<p onClick={this.props.populateLists}>Populate Lists</p>
				<p onClick={this.props.clearLists} className="danger-zone">Clear All Lists</p>
			</div>
		)
	}
}

export default SettingsMenu;