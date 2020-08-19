// Left menu elements

const button_aprendiendo = document.getElementById('button-aprendiendo');
const button_entrenando = document.getElementById('button-entrenando');
const button_compitiendo = document.getElementById('button-compitiendo');

const button_bajo = document.getElementById('button-bajo');
const button_medio = document.getElementById('button-medio');
const button_alto = document.getElementById('button-alto');

const button_nivel= document.getElementById('button-nivel');
const button_grado = document.getElementById('button-grado');
const button_curso = document.getElementById('button-curso');
const button_materia = document.getElementById('button-materia');
const button_objetivo = document.getElementById('button-objetivo');


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
