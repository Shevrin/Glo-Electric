const validation = () => {
	const inputsName = document.querySelectorAll('input[name="fio"]')
	const inputsPhone = document.querySelectorAll('input[name="tel"]')

	let regName = /^([а-яА-ЯёЁ]+\s)*[а-яА-ЯёЁ]*$/
	let regPhoneSubmit = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
	//  Валидация при вводе
	inputsPhone.forEach(item => {
		item.addEventListener('keyup', () => {
			item.classList.remove('error')
			item.value = item.value.replace(/[^\+\d]/g, '')
		})
	})

	inputsName.forEach(item => {
		item.addEventListener('keyup', () => {
			item.classList.remove('error')
			item.value = item.value.replace(/[^а-яА-Я\s]/g, '')
		})
	})

	//  Валидация при смене инпута
	inputsPhone.forEach(item => {
		item.addEventListener('change', () => {
			if (!regPhoneSubmit.test(item.value)) {
				item.classList.add('error')
				item.value = ''
			}
			if (regPhoneSubmit.test(item.value)) {
				item.classList.add('success')
			}
		})
	})

	inputsName.forEach(item => {
		item.addEventListener('change', () => {
			item.classList.remove('error')
			if (!regName.test(item.value)) {
				item.classList.add('error')
				item.value = ''
			}
			if (regName.test(item.value)) {
				item.classList.add('success')
			}
		})
	})
}

export default validation
