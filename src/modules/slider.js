import Swiper from "swiper";

const slider = () => {


	const swiper = new Swiper('.swiper',
		{
			slidesPerView: 3,
			// spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: true
			},
			// pagination: {
			// 	el: '.swiper-pagination',
			// },

			navigation: {
				nextEl: '.arrow-right',
				prevEl: '.arrow-left',
			},
		});
}

export default slider