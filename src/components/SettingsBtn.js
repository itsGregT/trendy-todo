import React from 'react';
import settings from '../img/settings-icon.png';
import '../css/SettingsBtn.css';

class SettingsBtn extends React.Component {
	changeBackground = () => {
		document.querySelector('body').style.background = "red";
	}

	render() {
		return (
			<img src={settings} className="settings-btn" onClick={this.changeBackground} />
		)
	}
}

export default SettingsBtn;