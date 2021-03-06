import Swiper, { Navigation } from "swiper";

Swiper.use([Navigation])

const slider = () => {
	const swiper = new Swiper('.swiper',
		{
			slidesPerView: 3,
			loop: true,
			loopedSlides: 3,
			freeMode: true,
			navigation: {
				nextEl: '.arrow-right',
				prevEl: '.arrow-left',
			},
		});
}

export default slider