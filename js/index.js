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

    // After clicking, display correct hover state based on switch state
    if (switchComponent.classList.contains('switch--on')) {		// switch is on:
        switchComponent.classList.remove('switch--off-hover');	// remove off hover class
        switchComponent.classList.add('switch--on-hover');		// display on hover color
    } 
	else {														// switch is off:
        switchComponent.classList.remove('switch--on-hover');	// remove on hover class
        switchComponent.classList.add('switch--off-hover');		// display off hover color
    }
}

function addSwitchHoverClass() {
    if (!switchComponent.classList.contains('switch--on')) { 	// switch is off:
        switchComponent.classList.add('switch--off-hover'); 	// display off hover color
    } 
	else { 														// switch is on:
        switchComponent.classList.add('switch--on-hover'); 		// display on hover color
    }
}

// remove all hover classes, display only off or on state
function removeSwitchHoverClass() {
    switchComponent.classList.remove('switch--on-hover');
    switchComponent.classList.remove('switch--off-hover');
}

switchComponent.addEventListener('mouseover', addSwitchHoverClass);
switchComponent.addEventListener('mouseleave', removeSwitchHoverClass);
switchComponent.addEventListener('click', toggleSwitchAndSlider);


// ------------------------- button -------------------------

const button = document.querySelector('.component-state--interactive .button');

function addButtonHoverClass() {
	button.classList.add('button--hover');
}

function removeButtonHoverClass() {
	button.classList.remove('button--hover');
}

button.addEventListener('mouseover', addButtonHoverClass);
button.addEventListener('mouseleave', removeButtonHoverClass);