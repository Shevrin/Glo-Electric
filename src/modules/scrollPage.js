import scroll from "./scroll"

export const scrollPage = () => {
	const menuItems = document.querySelector('.top-menu').querySelectorAll('ul>li>a')
	menuItems.forEach(item => scroll(item))
}