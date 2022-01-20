export const accordion = () => {

	const accordionBlock = document.querySelector('.accordeon')
	const accordionElements = document.querySelectorAll('.accordeon > .element')
	accordionBlock.addEventListener('click', (e) => {
		accordionElements.forEach(element => {
			if (element == e.target.closest('.element') && !element.classList.contains('active')) {
				element.classList.toggle('active')
				element.children[1].style.display = 'block'
			} else {
				element.classList.remove('active')
				element.children[1].style.display = 'none'
			}
		});
	})
}