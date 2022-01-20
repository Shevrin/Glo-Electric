import { animate } from "./helper"
import sendData from "./fetch"

export const modal = () => {
	// элементы DOM
	const overlay = document.querySelector('.modal-overlay')
	const callback = document.getElementById('callback')
	const form = callback.querySelector('form')
	const formInputs = form.querySelectorAll('.form-control')
	const inputPhone = document.querySelector('input[name="tel"]')
	const body = document.querySelector('body')
	// новый элемент DOM: статус отправки  
	const statusBlock = document.createElement('div')
	const loadText = 'Идет отправка...'
	const errorText = 'Ошибка!'
	const successText = 'Отправлено'
	// функционал
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
		formInputs.forEach(item => {
			item.value = ''
			item.classList.remove('error')
			item.classList.remove('success')
			statusBlock.innerHTML = ''
		})
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

	const submitForm = () => {
		form.append(statusBlock)
		const formData = new FormData(form)
		const formBody = {}
		formData.forEach((val, key) => {
			formBody[key] = val
		})
		statusBlock.innerHTML = loadText
		sendData(formBody)
			.then((data) => {
				console.log(data)
				statusBlock.innerHTML = successText
			})
			.catch(err => {
				console.log('err')
				statusBlock.innerHTML = errorText
			})
			.finally(() => {
				formInputs.forEach(item => {
					item.value = ''
					item.classList.remove('error')
					item.classList.remove('success')
				})
			})
	}

	// Подписка на клик вызова модального окна
	body.addEventListener('click', (e) => {
		e.preventDefault()
		if (e.target.matches('.fancyboxModal') || e.target.classList.contains('.callback-btn')) {
			openModal()
		}
		if (e.target.className === 'modal-overlay' || e.target.closest('.modal-close')) {
			closeModal()
		}
		if (e.target.classList.contains('feedback') && inputPhone.classList.contains('success')) {
			submitForm()
		}
	})
}



