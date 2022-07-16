import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

export const CarouselLine = () => {
	const isMobile = window.innerWidth < 765;
	const mobileView = isMobile ? 1 : 3;
	return (
		<div className="carousel-container">
			<Swiper
				slidesPerView={mobileView}
				spaceBetween={30}
				slidesPerGroup={mobileView}
				loop={true}
				loopFillGroupWithBlank={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper"
			>
				<SwiperSlide></SwiperSlide>
				<SwiperSlide></SwiperSlide>
				<SwiperSlide></SwiperSlide>
				<SwiperSlide></SwiperSlide>
				<SwiperSlide></SwiperSlide>
				<SwiperSlide></SwiperSlide>
			</Swiper>
		</div>
	);
};
