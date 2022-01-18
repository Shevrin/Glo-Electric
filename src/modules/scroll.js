const scroll = (elem, btn = elem, position = 'start') => {
	btn.addEventListener('click', (e) => {
		e.preventDefault()
		if (elem.getAttribute('href')) {
			const blockId = elem.getAttribute('href')
			document.querySelector(elem.getAttribute('href') + blockId).scrollIntoView({
				behavior: "smooth",
				block: 'start'
			})
		} else {
			elem.scrollIntoView({
				behavior: "smooth",
				block: position
			})
		}
	})
}

export default scroll
// const scroll = (elem) => {
// 	elem.addEventListener('click', (e) => {
// 		e.preventDefault()
// 		const blockId = elem.getAttribute('href')
// 		document.querySelector(elem.getAttribute('href') + blockId).scrollIntoView({
// 			behavior: "smooth",
// 			block: 'start'
// 		})
// 	})
// }