import { animate } from "./helper"

export const sliderMain = () => {

	const scrollBlock = document.getElementById('scroll-1')
	const scrollItems = scrollBlock.querySelectorAll('.item')

	let currentSlide = 0
	let interval

	const prevSlide = (elems, index, display) => {
		elems[index].style.display = display
		elems[index].style.opacity = 0
	}

	const nextSlide = (elems, index, display) => {
		elems[index].style.display = display
		animate({
			duration: 630,
			timing(timeFraction) {
				return timeFraction
			},
			draw(progress) {
				elems[index].style.opacity = 0 + progress
			}
		})
	}

	const autoSlide = () => {
		prevSlide(scrollItems, currentSlide, 'none')
		currentSlide++
		if (currentSlide >= scrollItems.length) {
			currentSlide = 0
		}
		nextSlide(scrollItems, currentSlide, 'block')
	}

	const startSlide = (timer = 3000) => {
		interval = setInterval(autoSlide, timer)
	}

	startSlide()
}