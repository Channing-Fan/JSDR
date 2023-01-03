import './index.scss';
import NavLogo from '../../assets/images/nav-logo.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHome,
	faUser,
	faEnvelope,
	faImage,
	faSignIn,
} from '@fortawesome/free-solid-svg-icons';

import {
	faGithub,
	faInstagram,
	faLinkedin,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
	return (
		<div className="nav-bar">
			<Link className="logo">
				<img src={NavLogo} alt="JSDR" />
			</Link>
			<nav>
				<NavLink exact="true" activeclassname="active" to="/">
					<FontAwesomeIcon icon={faHome} color="#4d4d4d"></FontAwesomeIcon>
				</NavLink>
				<NavLink
					exact="true"
					activeclassname="active"
					to="/about"
					className="about-link"
				>
					<FontAwesomeIcon icon={faUser} color="#4d4d4d"></FontAwesomeIcon>
				</NavLink>
				<NavLink
					exact="true"
					activeclassname="active"
					to="/contact"
					className="contact-link"
				>
					<FontAwesomeIcon icon={faEnvelope} color="#4d4d4d"></FontAwesomeIcon>
				</NavLink>
				<NavLink
					exact="true"
					activeclassname="active"
					to="/portfolio"
					className="portfolio-link"
				>
					<FontAwesomeIcon icon={faImage} color="#4d4d4d"></FontAwesomeIcon>
				</NavLink>
				<NavLink
					exact="true"
					activeclassname="active"
					to="/dashboard"
					className="dashboard-link"
				>
					<FontAwesomeIcon icon={faSignIn} color="#4d4d4d"></FontAwesomeIcon>
				</NavLink>
			</nav>
			<ul>
				<li>
					<a target="_blank" rel="noreferrer" href="https://linkedin.com">
						<FontAwesomeIcon icon={faLinkedin} color="#4d4d4d" />
					</a>
				</li>
				<li>
					<a target="_blank" rel="noreferrer" href="https://twitter.com">
						<FontAwesomeIcon icon={faTwitter} color="#4d4d4d" />
					</a>
				</li>
				<li>
					<a target="_blank" rel="noreferrer" href="https://instagram.com">
						<FontAwesomeIcon icon={faInstagram} color="#4d4d4d" />
					</a>
				</li>
				<li>
					<a target="_blank" rel="noreferrer" href="https://github.com">
						<FontAwesomeIcon icon={faGithub} color="#4d4d4d" />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
