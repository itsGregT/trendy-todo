import React from 'react';
import SettingsBtn from './SettingsBtn';
import logo from '../img/trendy-logo.png';
import '../css/Header.css';

const Header = () => {
	return (
		<header>
			<img src={logo} alt=""/>
			<SettingsBtn />
		</header>
	)
}

export default Header;