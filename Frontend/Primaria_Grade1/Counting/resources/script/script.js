// Left menu elements

const button_aprendiendo = document.getElementById('button-aprendiendo');
const button_entrenando = document.getElementById('button-entrenando');
const button_compitiendo = document.getElementById('button-compitiendo');

const normalButtonColor = 'rgb(156, 155, 160)';
const pressedButtonColor = 'rgb(107, 106, 108)';


// Handle button color depending on selection

function modeButtonSelection(event) {
    switch (event.target.id) {
        case 'button-aprendiendo':
            event.target.style.backgroundColor = pressedButtonColor;
            button_compitiendo.style.backgroundColor = normalButtonColor;
            button_entrenando.style.backgroundColor = normalButtonColor;
            break;

        case 'button-entrenando':
            event.target.style.backgroundColor = pressedButtonColor;
            button_compitiendo.style.backgroundColor = normalButtonColor;
            button_aprendiendo.style.backgroundColor = normalButtonColor;
            break;

        case 'button-compitiendo':
            event.target.style.backgroundColor = pressedButtonColor;
            button_entrenando.style.backgroundColor = normalButtonColor;
            button_aprendiendo.style.backgroundColor = normalButtonColor;
            break;
    
        default:
            break;
    }
}

button_aprendiendo.addEventListener('click', modeButtonSelection);
button_entrenando.addEventListener('click', modeButtonSelection);
button_compitiendo.addEventListener('click', modeButtonSelection);
