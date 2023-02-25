let btnsA = document.getElementsByClassName('btn-a'); // btn
let btnsB = document.getElementsByClassName('btn-b'); // btn

let numberA = document.getElementById('number-a'); // text
let numberB = document.getElementById('number-b'); // text

let gosmak = document.getElementById('gosmak'); // btn
let ayyrmak = document.getElementById('ayyrmak'); // btn
let kopeltmek = document.getElementById('kopeltmek'); // btn
let bolmek = document.getElementById('bolmek'); // btn

let result = document.getElementById('result'); // text

let reset = document.getElementById('reset'); // btn

for (const btnA of btnsA) {
    btnA.addEventListener('click', function() {
        if (numberA.textContent == '0') {
            numberA.textContent = '';
        }
        numberA.textContent += this.value;
    })
}

for (const btnB of btnsB) {
    btnB.addEventListener('click', function() {
        if (numberB.textContent == '0') {
            numberB.textContent = '';
        }
        numberB.textContent += this.value;
    })
}

gosmak.addEventListener('click', function () {
    result.textContent = parseInt(numberA.textContent) + parseInt(numberB.textContent);
});

ayyrmak.addEventListener('click', function () {
    result.textContent = parseInt(numberA.textContent) - parseInt(numberB.textContent);
});

kopeltmek.addEventListener('click', function () {
    result.textContent = parseInt(numberA.textContent) * parseInt(numberB.textContent);
});

bolmek.addEventListener('click', function () {
    result.textContent = (parseInt(numberA.textContent) / parseInt(numberB.textContent)).toFixed(3);
});

reset.addEventListener('click', function () {
    numberA.textContent = 0;
    numberB.textContent = 0;
    result.textContent = 0;
});