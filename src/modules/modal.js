import { animate } from "./helper"

export const modal = () => {

	const callbackBtns = document.querySelectorAll('.callback-btn')
	const servicesBtn = document.querySelector('.button-services')
	const overlay = document.querySelector('.modal-overlay')
	const callback = document.getElementById('callback')
	const body = document.querySelector('body')

	const openModal = () => {
		overlay.style.display = 'block'
		callback.style.display = 'block'
		overlay.style.opacity = 0
		callback.style.opacity = 0

		animate({
			duration: 130,
			timing(timeFraction) {
				return timeFraction
			},
			draw(progress) {
				overlay.style.opacity = 0 + progress
				callback.style.opacity = 0 + progress
			}
		})
	}

	const closeModal = () => {
		animate({
			duration: 130,
			timing(timeFraction) {
				return timeFraction
			},
			draw(progress) {
				if (Math.floor(callback.style.opacity * 10) > 0) {
					callback.style.opacity = 1 - progress
					overlay.style.opacity = 1 - progress
				} else {
					callback.style.display = 'none'
					overlay.style.display = 'none'
				}
			}
		})
	}

	callbackBtns.forEach(item => item.addEventListener('click', openModal))
	servicesBtn.addEventListener('click', openModal)

	body.addEventListener('click', (e) => {
		if (e.target.className === 'modal-overlay' || e.target.closest('.modal-close')) {
			closeModal()
		}
	})
}