let numberOne = JSON.parse(localStorage.getItem('numberOne')) || ''

let numberTwo = JSON.parse(localStorage.getItem('numberTWo')) || '';

let numberCheck;

let action;

// numberOne = '';
// console.log(numberOne);

function one() {
    numberOne = numberOne + '1'
    console.log(numberOne);
    localStorage.setItem('numberOne', JSON.stringify(numberOne))
    document.getElementById('check').textContent = numberOne;
}

function two() {
    numberOne = numberOne + '2'
    console.log(numberOne);
    localStorage.setItem('numberOne', JSON.stringify(numberOne))
    document.getElementById('check').textContent = numberOne;
}

function three() {
    numberOne = numberOne + '3'
    console.log(numberOne);
    localStorage.setItem('numberOne', JSON.stringify(numberOne))
    document.getElementById('check').textContent = numberOne;
}

function four() {
    numberOne = numberOne + '4'
    console.log(numberOne);
    localStorage.setItem('numberOne', JSON.stringify(numberOne))
    document.getElementById('check').textContent = numberOne;
}

function five() {
    numberOne = numberOne + '5'
    console.log(numberOne);
    localStorage.setItem('numberOne', JSON.stringify(numberOne))
    document.getElementById('check').textContent = numberOne;
}

function six() {
    numberOne = numberOne + '6'
    console.log(numberOne);
    localStorage.setItem('numberOne', JSON.stringify(numberOne))
    document.getElementById('check').textContent = numberOne;
}

function seven() {
    numberOne = numberOne + '7'
    console.log(numberOne);
    localStorage.setItem('numberOne', JSON.stringify(numberOne))
    document.getElementById('check').textContent = numberOne;
}

function eight() {
    numberOne = numberOne + '8'
    console.log(numberOne);
    localStorage.setItem('numberOne', JSON.stringify(numberOne))
    document.getElementById('check').textContent = numberOne;
}

function nine() {
    numberOne = numberOne + '9'
    console.log(numberOne);
    localStorage.setItem('numberOne', JSON.stringify(numberOne))
    document.getElementById('check').textContent = numberOne;
}

function zero() {
    numberOne = numberOne + '0'
    console.log(numberOne);
    localStorage.setItem('numberOne', JSON.stringify(numberOne))
    document.getElementById('check').textContent = numberOne;
}

function plus() {
    numberTwo = numberOne
    numberOne = '';
    action = 1;
}

function minus() {
    numberTwo = numberOne;
    numberOne = '';
    action = 2;
}


function multiply() {
    numberTwo = numberOne;
    numberOne = '';
    action = 3;
}

function divide() {
    numberTwo = numberOne;
    numberOne = '';
    action = 4;
}

function check() {
    console.log(action);
    console.log(numberOne);
    console.log(numberTwo);
    if (action === 1) {
        numberCheck = Number(numberOne) + Number(numberTwo);
        document.getElementById('check').textContent = numberCheck;
    } else if (action === 2) {
        numberCheck = Number(numberTwo) - Number(numberOne);
        document.getElementById('check').textContent = numberCheck;
    } else if (action === 3) {
        numberCheck = Number(numberOne) * Number(numberTwo);
        document.getElementById('check').textContent = numberCheck;
    } else if (action === 4) {
        numberCheck =Math.floor(Number(numberTwo) / Number(numberOne));
        document.getElementById('check').textContent = numberCheck;
    }
    console.log(numberCheck);
    numberOne = '';
    numberTwo = '';
}