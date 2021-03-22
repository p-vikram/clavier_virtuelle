/*Récup les touches*/
window.addEventListener('load', () => {
	let kbdKey = document.querySelectorAll('#write');
	let textWriting = document.querySelector('#text');
	let deleteBtn = document.querySelector('#erase');
	let space = document.querySelector('#space-key');
	let monButton = document.getElementById('IDmonButton');
	let mode = document.querySelector('#changeMode');

	let newValue = '';
	let isNightMode = false;

	// retour a la ligne
	enterKbd.addEventListener('click', () => {
		text.value += '\n';
	});
	// espace
	space.addEventListener('click', () => {
		text.value += ' ';
	});

	// effacer
	erase.addEventListener('click', () => {
		text.value = text.value.slice(0, -1);
	});

	// text pour écrire
	kbdKey.forEach(val => {
		val.addEventListener('click', event => {
			newValue = event.target.value;
			text.value += newValue;
		});
	});
	/*changer style caps lock bouton*/

	monButton.addEventListener('click', function() {
		if (monButton.className == 'key fas fa-lock') {
			// monButton.className.remove('fas fa-lock');
			monButton.className = 'key fas fa-lock-open';
		} else if (monButton.className == 'key fas fa-lock-open') {
			// monButton.className.remove('fas fa-lock-open');
			monButton.className = 'key fas fa-lock';
		}
		// } else {
		// 	monButton.textContent = monButton.className;
		// }
	});

	// Create one event on click
	// changer de mode style
	mode.addEventListener('click', () => {
		if (!isNightMode) {
			mode.value = '|NIGHTMOD-ON|';
			// Create a new link for add css's nightmod
			let link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = 'css/keyboard-night.css';
			// Check this link at the index[0] in link's HEAD
			document.getElementsByTagName('HEAD')[0].appendChild(link);
			isNightMode = true;
		} else {
			isNightMode = false;
			mode.value = '|NIGHTMOD-OFF|';
			// Remove the link just created
			document.getElementsByTagName('link')[2].remove();
		}
	});
	mode.addEventListener('click', function() {
		if (mode.className == 'far fa-moon') {
			mode.className = 'far fa-sun';
		} else if (mode.className == 'far fa-sun') {
			mode.className = 'far fa-moon';
		}
	});
});
