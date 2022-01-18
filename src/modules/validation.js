const validation = () => {
	const inputsPhone = document.querySelectorAll('input[name="tel"]')

	let regPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/

	inputsPhone.forEach(item => {
		item.addEventListener('change', () => {
			item.classList.remove('error')
			if (!regPhone.test(item.value)) {
				item.classList.add('error')
				item.value = ''
			}
			if (regPhone.test(item.value)) {
				item.classList.add('success')
			}
		})
	})
}

export default validation
