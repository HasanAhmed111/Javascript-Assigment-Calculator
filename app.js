var display = document.getElementById('display');

function clickToInput(value) {
    display.value += value;
}

function clearInput() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function cutLastInput() {
    display.value = display.value.slice(0, -1);
}
