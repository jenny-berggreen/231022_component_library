const menuButtons = document.querySelectorAll('.menu__button');
const components = document.querySelectorAll('.component');

menuButtons.forEach(menuButton => {
	const displayComponent = (event) => {
		const button = event.currentTarget;
		const componentToShow = button.dataset.componentToShow;
	
		menuButtons.forEach(menuButton => {
			menuButton.classList.remove('menu__button--active');

			if (menuButton.dataset.componentToShow === componentToShow) {
				button.classList.add('menu__button--active');
			}
		})
	
		components.forEach(component => {
			component.classList.remove('component--visible');
	
			const componentName = component.dataset.componentName;
	
			if (componentName === componentToShow) {
				component.classList.add('component--visible');
			}
		});
	}

	menuButton.addEventListener('click', displayComponent);
});