import React from 'react';
import { CarouselLine } from '../../components/Carousel';
import './style.scss';

export const Design = () => {
	return (
		<div className="section-container">
			<div className="limiter">
				<div className="left">
					<h2 className="title-section">Sobrancelhas</h2>
					<p className="left-text">
						Especialista em design de sobrancelhas, rena, micro-pigmentação
					</p>

					<p className="left-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
				<div className="right">
					<div className="img-container">
						<img src="" alt="" />
					</div>
				</div>
			</div>
			<CarouselLine />
		</div>
	);
};
