import React from 'react';
import '../css/SettingsMenu.css';
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
				<div className="backgrounds-wrapper">
					<h3>Background</h3>
					<h4>Images</h4>
						<ul className="background-images">
							<li data-background="../img/office01.jpg" className="active-background"><img src={office01} alt=""/></li>
							<li data-background="../img/abstract.jpg"><img src={abstract} alt=""/></li>
							<li data-background="../img/hylancoo.jpg"><img src={hylancoo} alt=""/></li>
							<li data-background="../img/club.jpg"><img src={club} alt=""/></li>
							<li data-background="../img/design01.jpg"><img src={design01} alt=""/></li>
							<li data-background="../img/forest01.jpg"><img src={forest01} alt=""/></li>
							<li data-background="../img/beach.jpg"><img src={beach} alt=""/></li>
							<li data-background="../img/isleofskye.jpg"><img src={isleofskye} alt=""/></li>
						</ul>
					<h4>Colors</h4>
						<ul className="background-colors">
							<li data-background="#0BBCFF"><span className="c0BBCFF"></span></li>
							<li data-background="#00ffa5"><span className="c00ffa5"></span></li>
							<li data-background="#333333"><span className="c333333"></span></li>
							<li data-background="#ffffff"><span className="cffffff"></span></li>
							<li data-background="#ff6600"><span className="cff6600"></span></li>
							<li data-background="#b600ff"><span className="cb600ff"></span></li>
							<li data-background="#ff0a0a"><span className="ff0a0a"></span></li>
							<li data-background="#ffda09"><span className="ffda09"></span></li>
						</ul>
				</div>
			</div>
		)
	}
}

export default SettingsBackgroundMenu;