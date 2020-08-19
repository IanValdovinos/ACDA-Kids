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


let mode = undefined;
let difficulty = undefined;
let selection = undefined;


// Handle button color depending on selection

function modeButtonSelection(event) {
    switch (event.target.id) {
        case 'button-aprendiendo':
            mode = 'aprendiendo';
            event.target.style.backgroundColor = pressedButtonColor;
            button_compitiendo.style.backgroundColor = normalButtonColor;
            button_entrenando.style.backgroundColor = normalButtonColor;
            break;

        case 'button-entrenando':
            mode = 'entrenando';
            event.target.style.backgroundColor = pressedButtonColor;
            button_compitiendo.style.backgroundColor = normalButtonColor;
            button_aprendiendo.style.backgroundColor = normalButtonColor;
            break;

        case 'button-compitiendo':
            mode = 'compitiendo';
            event.target.style.backgroundColor = pressedButtonColor;
            button_entrenando.style.backgroundColor = normalButtonColor;
            button_aprendiendo.style.backgroundColor = normalButtonColor;
            break;
    
        default:
            break;
    }
}

function difficultyButtonSelection(event) {
    switch (event.target.id) {
        case 'button-bajo':
            difficulty = 'bajo';
            event.target.style.backgroundColor = pressedButtonColor;
            button_medio.style.backgroundColor = normalButtonColor;
            button_alto.style.backgroundColor = normalButtonColor;
            break;

        case 'button-medio':
            difficulty = 'medio';
            event.target.style.backgroundColor = pressedButtonColor;
            button_bajo.style.backgroundColor = normalButtonColor;
            button_alto.style.backgroundColor = normalButtonColor;
            break;

        case 'button-alto':
            difficulty = 'alto';
            event.target.style.backgroundColor = pressedButtonColor;
            button_bajo.style.backgroundColor = normalButtonColor;
            button_medio.style.backgroundColor = normalButtonColor;
            break;
    
        default:
            break;
    }
}

function selectionButtonSelection(event) {
    switch (event.target.id) {
        case 'button-nivel':
            selection = 'nivel';
            event.target.style.backgroundColor = pressedButtonColor;
            button_grado.style.backgroundColor = normalButtonColor;
            button_curso.style.backgroundColor = normalButtonColor;
            button_materia.style.backgroundColor = normalButtonColor;
            button_objetivo.style.backgroundColor = normalButtonColor;
            break;

        case 'button-grado':
            selection = 'grado';
            event.target.style.backgroundColor = pressedButtonColor;
            button_nivel.style.backgroundColor = normalButtonColor;
            button_curso.style.backgroundColor = normalButtonColor;
            button_materia.style.backgroundColor = normalButtonColor;
            button_objetivo.style.backgroundColor = normalButtonColor;
            break;

        case 'button-curso':
            selection = 'curso';
            event.target.style.backgroundColor = pressedButtonColor;
            button_nivel.style.backgroundColor = normalButtonColor;
            button_grado.style.backgroundColor = normalButtonColor;
            button_materia.style.backgroundColor = normalButtonColor;
            button_objetivo.style.backgroundColor = normalButtonColor;
            break;

        case 'button-materia':
            selection = 'materia';
            event.target.style.backgroundColor = pressedButtonColor;
            button_nivel.style.backgroundColor = normalButtonColor;
            button_grado.style.backgroundColor = normalButtonColor;
            button_curso.style.backgroundColor = normalButtonColor;
            button_objetivo.style.backgroundColor = normalButtonColor;
            break;

        case 'button-objetivo':
            selection = 'objetivo';
            event.target.style.backgroundColor = pressedButtonColor;
            button_nivel.style.backgroundColor = normalButtonColor;
            button_grado.style.backgroundColor = normalButtonColor;
            button_curso.style.backgroundColor = normalButtonColor;
            button_materia.style.backgroundColor = normalButtonColor;
            break;
    
        default:
            break;
    }
}

button_aprendiendo.addEventListener('click', modeButtonSelection);
button_entrenando.addEventListener('click', modeButtonSelection);
button_compitiendo.addEventListener('click', modeButtonSelection);

button_bajo.addEventListener('click', difficultyButtonSelection);
button_medio.addEventListener('click', difficultyButtonSelection);
button_alto.addEventListener('click', difficultyButtonSelection);

button_nivel.addEventListener('click', selectionButtonSelection);
button_grado.addEventListener('click', selectionButtonSelection);
button_curso.addEventListener('click', selectionButtonSelection);
button_materia.addEventListener('click', selectionButtonSelection);
button_objetivo.addEventListener('click', selectionButtonSelection);

