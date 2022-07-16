import React from 'react';
import { Carousel } from '../../components/CarouselCube';
import './style.scss';
export const Hero = () => {
	return (
		<div className="hero-container">
			<div className="limiter">
				<div className="left">
					<h2 className="hero-title">Especilista em cílios e sobrancelhas</h2>
				</div>
				<div className="right">
					<Carousel />
				</div>
			</div>
		</div>
	);
};
