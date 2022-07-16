import React from 'react';
import './styles.scss';
export const Navbar = () => {
	return (
		<div className="nav-container">
			<div className="limiter">
				<div className="logo">Logo</div>
				<nav className="nav">
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};
