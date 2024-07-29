const display = document.getElementById('result');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        handleButtonClick(button);
    });
});

function handleButtonClick(button) {
    const buttonText = button.textContent;
    if (button.classList.contains('allClear')) {
        clearDisplay();
    } else if (button.classList.contains('equals')) {
        calculateResult();
    } else if (buttonText === 'Del') {
        deleteLastCharacter();
    } else if (button.classList.contains('number') || button.classList.contains('operator')) {
        appendToDisplay(buttonText);
    }
}

function appendToDisplay(text) {
    display.value += text;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}
