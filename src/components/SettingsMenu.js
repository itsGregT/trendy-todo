import React from 'react';
import '../css/SettingsMenu.css';
import close from '../img/close-icon.png';

class SettingsMenu extends React.Component {
	render() {
		return(
			<div className={"settings-menu " + (this.props.menuDisplay === true ? "active" : "not-active")}>
				<img className="close-menu" src={close} />
				<h3>Settings</h3>
				<p>Change Background</p>
			</div>
		)
	}
}

export default SettingsMenu;