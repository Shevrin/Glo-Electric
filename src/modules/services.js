export const services = () => {
	const container = document.querySelector('.services-elements')
	const services = container.querySelectorAll('.element')
	// const tabPanel = document.querySelector('.service-header')
	// const tabs = document.querySelectorAll('.service-header-tab')
	// console.log(services);



	// tabPanel.addEventListener('click', (e) => {
	// 	if (e.target.closest('.service-header-tab')) {
	// 		const tabBtn = e.target.closest('.service-header-tab')
	// 		tabs.forEach((tab, index) => {
	// 			if (tab === tabBtn) {
	// 				tab.classList.add('active')
	// 				services[index].classList.remove('d-none')
	// 			} else {
	// 				tab.classList.remove('active')
	// 				services[index].classList.add('d-none')
	// 			}
	// 		});
	// 	}
	// })
}

