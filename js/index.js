const menuButtons = document.querySelectorAll('.menu__button');
const components = document.querySelectorAll('.component');

// display corresponding component when clicking menu buttons
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


// ------------------------- accordion -------------------------

const accordion = document.querySelector('.component-state--interactive .accordion');
const accordionButton = accordion.querySelector('.accordion__button');

function displayAccordionContent() {
	accordion.classList.toggle('accordion--expanded');
}

accordionButton.addEventListener('click', displayAccordionContent);

// ------------------------- switch -------------------------

const switchComponent = document.querySelector('.component-state--interactive .switch__container');

function toggleSwitchAndSlider() {
	switchComponent.classList.toggle('switch--on');
	switchComponent.classList.toggle('switch__slider--on');
}

switchComponent.addEventListener('click', toggleSwitchAndSlider);
