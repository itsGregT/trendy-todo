import React from 'react';
import settings from '../img/settings-icon.png';
import '../css/SettingsBtn.css';

class SettingsBtn extends React.Component {
	render() {
		return (
			<img src={settings} className="settings-btn" alt="settings menu icon" onClick={this.props.toggleSettingsMenu} />
		)
	}
}

export default SettingsBtn;