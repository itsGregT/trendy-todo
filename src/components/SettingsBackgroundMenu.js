import React from 'react';
import '../css/SettingsMenu.css';
import close from '../img/close-icon.png';
import abstract from '../img/abstract.jpg';
import hylancoo from '../img/hylancoo.jpg';
import club from '../img/club.jpg';
import design01 from '../img/design01.jpg';
import forest01 from '../img/forest01.jpg';
import beach from '../img/beach.jpg';
import isleofskye from '../img/isleofskye.jpg';
import office01 from '../img/office01.jpg';

class SettingsBackgroundMenu extends React.Component {
	render() {
		return(
			<div className="background-settings">
				<h3>Background</h3>
				<h4>Images</h4>
					<ul className="background-images">
						<li class="active-background"><img src={office01} alt=""/></li>
						<li><img src={abstract} alt=""/></li>
						<li><img src={hylancoo} alt=""/></li>
						<li><img src={club} alt=""/></li>
						<li><img src={design01} alt=""/></li>
						<li><img src={forest01} alt=""/></li>
						<li><img src={beach} alt=""/></li>
						<li><img src={isleofskye} alt=""/></li>
					</ul>
				<h4>Colors</h4>
					<ul className="background-colors">
						<li><span className="c0BBCFF"></span></li>
						<li><span className="c00ffa5"></span></li>
						<li><span className="c333333"></span></li>
						<li><span className="cffffff"></span></li>
						<li><span className="cff6600"></span></li>
						<li><span className="cb600ff"></span></li>
					</ul>
			</div>
		)
	}
}

export default SettingsBackgroundMenu;