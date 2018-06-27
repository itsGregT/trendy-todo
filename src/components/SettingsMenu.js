import React from 'react';
import SettingsBackgroundMenu from './SettingsBackgroundMenu';
import SettingsDefaultMenu from './SettingsDefaultMenu';
import '../css/SettingsMenu.css';
import close from '../img/close-icon.png';

class SettingsMenu extends React.Component {
	changeBackground = () => {
		document.querySelector('body').style.background = "url(https://images.pexels.com/photos/420233/pexels-photo-420233.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"
	}

	render() {
		return(
			<div className={"settings-menu " + (this.props.menuDisplay === true ? "active" : "")}>
				<img className="close-menu" alt="close settings menu" src={close} onClick={this.props.closeSettingsMenu} />
				<SettingsDefaultMenu />
				<SettingsBackgroundMenu />
			</div>
		)
	}
}

export default SettingsMenu;