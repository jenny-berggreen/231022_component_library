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

function addButtonActiveClass() {
	button.classList.add('button--active');
}

function removeButtonActiveClass() {
	button.classList.remove('button--active');
}

button.addEventListener('mouseover', addButtonHoverClass);
button.addEventListener('mouseleave', removeButtonHoverClass);
button.addEventListener('mousedown', addButtonActiveClass);
button.addEventListener('mouseup', removeButtonActiveClass);


// ------------------------- checkbox -------------------------

const checkbox = document.querySelector('.component-state--interactive .checkbox__input');

function toggleCheckboxCheckedClass() {
	checkbox.classList.toggle('checkbox--checked');

	// After clicking, display correct hover state based on checkbox state
	if (checkbox.classList.contains('checkbox--checked')) {		// checkbox is checked:
        checkbox.classList.remove('checkbox--unchecked-hover');	// remove unchecked hover class
        checkbox.classList.add('checkbox--checked-hover');		// display checked hover color
    } 
	else {														// checkbox is unchecked:
        checkbox.classList.remove('checkbox--checked-hover');	// remove checked hover class
        checkbox.classList.add('checkbox--unchecked-hover');	// display unchecked hover color
    }
}

function addCheckboxHoverClass() {
	if (!checkbox.classList.contains('checkbox--checked')) { // checkbox is unchecked
		checkbox.classList.add('checkbox--unchecked-hover');
	}
	else {													// checkbox is checked
		checkbox.classList.add('checkbox--checked-hover');
	}
}

function removeCheckboxHoverClass() {
	checkbox.classList.remove('checkbox--unchecked-hover');
	checkbox.classList.remove('checkbox--checked-hover');
}



checkbox.addEventListener('mouseover', addCheckboxHoverClass);
checkbox.addEventListener('mouseleave', removeCheckboxHoverClass);
checkbox.addEventListener('click', toggleCheckboxCheckedClass);

// ------------------------- radio button -------------------------

const radiobuttons = document.querySelectorAll('.component-state--interactive .radiobutton__button');

function toggleRadiobuttonChosenClass(event) {
	// Remove "chosen" class from all radio buttons
	radiobuttons.forEach(button => {
	  button.classList.remove('radiobutton__button--chosen');
	});
  
	// Add "chosen" class to the clicked radio button
	const clickedButton = event.currentTarget;
	clickedButton.classList.add('radiobutton__button--chosen');
}

function addRadiobuttonHoverClass(event) {
	const hoveredButton = event.currentTarget;
	if (!hoveredButton.classList.contains('radiobutton__button--chosen')) { // hovering over non chosen button
	  hoveredButton.classList.add('radiobutton__button--hover');			// display darker border color
	}
  }
  
  function removeRadiobuttonHoverClass(event) {
	const hoveredButton = event.currentTarget;
	hoveredButton.classList.remove('radiobutton__button--hover'); // display normal border color when mouse leaves button
  }

// Attach click event listener to each radio button
radiobuttons.forEach(button => {
	button.addEventListener('click', toggleRadiobuttonChosenClass);
	button.addEventListener('mouseover', addRadiobuttonHoverClass);
	button.addEventListener('mouseleave', removeRadiobuttonHoverClass);
});
