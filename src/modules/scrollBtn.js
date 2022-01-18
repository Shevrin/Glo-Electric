import scroll from "./scroll"

export const scrollBtn = () => {
	const upBtn = document.querySelector('.up')
	upBtn.style.display = 'none'

	const toBlock = document.getElementById('scroll-1')

	window.addEventListener('scroll', () => {
		if (window.pageYOffset > 500) {
			upBtn.style.display = 'block'
		} else {
			upBtn.style.display = 'none'
		}
	})

	upBtn.addEventListener('click', scroll(toBlock, upBtn, 'end'))

}