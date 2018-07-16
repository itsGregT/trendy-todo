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
	componentDidMount() {
		const backgrounds = document.querySelectorAll(".backgrounds-wrapper li");
		for(let i = 0; i < backgrounds.length; i++) {
			backgrounds[i].addEventListener("click", function(){
				document.body.style.background = backgrounds[i].getAttribute('data-background');
				document.body.style.backgroundSize = "cover";
				console.log(backgrounds[i].getAttribute('data-background'));
			})
		}
    	console.log(backgrounds);
	}
	render() {
		return(
			<div className="background-settings">
				<div className="backgrounds-wrapper">
					<h3>Background</h3>
					<h4>Images</h4>
						<ul className="background-images">
							<li data-background={`url(${office01})`}><img src={office01} alt={office01}/></li>
							<li data-background={`url(${abstract})`}><img src={abstract} alt={abstract}/></li>
							<li data-background={`url(${hylancoo})`}><img src={hylancoo} alt={hylancoo}/></li>
							<li data-background={`url(${club})`}><img src={club} alt={club}/></li>
							<li data-background={`url(${design01})`}><img src={design01} alt={design01}/></li>
							<li data-background={`url(${forest01})`}><img src={forest01} alt={forest01}/></li>
							<li data-background={`url(${beach})`}><img src={beach} alt={beach}/></li>
							<li data-background={`url(${isleofskye})`}><img src={isleofskye} alt={isleofskye}/></li>
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