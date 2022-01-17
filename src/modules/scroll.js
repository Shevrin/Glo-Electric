const scroll = (elem, btn, position = 'start') => {
	btn.addEventListener('click', (e) => {
		e.preventDefault()
		// const blockId = elem.getAttribute('href')
		elem.scrollIntoView({
			behavior: "smooth",
			block: position
		})
	})
}

export default scroll
