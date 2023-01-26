/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState } from "react";
import { Controller, EffectFade, EffectCube, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-cube";
import { Swiper, SwiperSlide } from "swiper/react";
import { CustomIMG } from "../Micro";
// imgs
import MaskIMG2 from "../../assets/imgs/mask-break.png";
import MaskIMG from "../../assets/imgs/product/mask.png";

function Hero({ response }) {
	const { Mask_List } = response !== undefined ? response : [];

	const swiperref = useRef();
	const [activeSlide, setActiveSlide] = useState(0);
	const [controlledSwiper, setControlledSwiper] = useState(null);
	const [productPoints, setProductPoints] = useState([
		{
			id: 0,
			title: "Mask Filter (Open air mask)",
			color: "#5E5AFF",
			image: MaskIMG,
		},
		{
			id: 1,
			title: "Bone Conductor Microphone",
			color: "#20DA54",
			image: MaskIMG2,
		},
		{
			id: 2,
			title: "Bone Conductor Microphone",
			color: "#FF5ABD",
			image: MaskIMG,
		},
		{
			id: 3,
			title: "-25 to -40dB Sound Silencer",
			color: "#FF9F5A",
			image: MaskIMG2,
		},
		{
			id: 4,
			title: "220g Weight",
			color: "#FF7373",
			image: MaskIMG,
		},
	]);

	return (
		<section className="section-wrapper product-bg overflow-hidden mt-[80px] h-[calc(100vh-88px)] p-0">
			<div className=" flex max-md:flex-col w-full ">
				<div className="md:w-1/2 h-full relative">
					<Swiper
						ref={swiperref}
						slidesPerView={1}
						centeredSlides
						loop="true"
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						modules={[Controller, EffectCube, Autoplay]}
						controller={{ control: controlledSwiper }}
						className="mySwiper lg:ml-40 lg:mt-20 sm:mt-4 mt-0"
						effect="cube"
						cubeEffect={{
							shadow: false,
							slideShadows: false,
							shadowOffset: 10,
							shadowScale: 0.2,
						}}
						onSlideChange={(e) => setActiveSlide(e.realIndex)}
					>
						{(Mask_List || []).map((patner, i) => (
							<SwiperSlide key={i} className="flex justify-center items-center relative">
								<CustomIMG
									src={patner.MaskImage.data.attributes.url}
									alt="mask"
									className="lg:w-max sm:w-96 w-72"
								/>
							</SwiperSlide>
						))}
					</Swiper>
					<h2 className="absolute lg:-bottom-48 sm:-bottom-0 -bottom-20 lg:text-3xl font-semibold left-1/2 max-md:-translate-x-1/2 lg:-translate-x-12">
						Skyted Mask
					</h2>
				</div>
				<div className="md:w-1/2 flex justify-center items-center max-md:mt-32">
					<ul className="space-y-10 lg:mt-28">
						{(Mask_List || []).map((point) => (
							<li
								key={point.id}
								className="flex gap-4 items-center cursor-pointer group"
								onClick={() => {
									setActiveSlide(point.id);
									swiperref.current.swiper.slideTo(point.id);
								}}
							>
								<span
									className={`" ${
										point.id == activeSlide ? "p-0" : "p-1"
									} transition-all  bg-gray-300 flex justify-center items-center w-5 h-5 rounded-full m-0 "`}
								>
									<span
										className="w-full h-full block rounded-full group-hover:w-full group-hover:h-full transition-all"
										style={{ backgroundColor: point.MaskColor }}
									/>
								</span>
								<p className="max-lg:text-sm">{point.MaskTitle}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Hero;
