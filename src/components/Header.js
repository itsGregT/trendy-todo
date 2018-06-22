import React from 'react';
import SettingsBtn from './SettingsBtn';
import logo from '../img/trendy-logo.png';
import '../css/Header.css';

class Header extends React.Component {
	render() {
		return (
			<header>
				<img src={logo} alt="" />
				<SettingsBtn toggleSettingsMenu={this.props.toggleSettingsMenu}/>
			</header>
		)
	}
}

export default Header;