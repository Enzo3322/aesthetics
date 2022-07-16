import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.scss';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination } from 'swiper';

export const Carousel = () => {
	return (
		<>
			<Swiper
				effect={'cube'}
				grabCursor={true}
				cubeEffect={{
					shadow: true,
					slideShadows: true,
					shadowOffset: 20,
					shadowScale: 0.94,
				}}
				pagination={true}
				modules={[EffectCube, Pagination]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img src="./img1.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./img2.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./img3.jpg" />
				</SwiperSlide>
			</Swiper>
		</>
	);
};
