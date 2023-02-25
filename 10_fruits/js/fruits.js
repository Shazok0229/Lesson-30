let fruitImages = [
    { 'code': 1, 'url': 'apple.png' },
    { 'code': 2, 'url': 'banana.png' },
    { 'code': 3, 'url': 'grapes.png' },
    { 'code': 4, 'url': 'lemon.png' },
    { 'code': 5, 'url': 'orange.png' },
    { 'code': 6, 'url': 'pineapple.png' },
    { 'code': 7, 'url': 'strawberry.png' },
    { 'code': 8, 'url': 'water-melon.png' },
]

let gameImages = fruitImages.concat(fruitImages); // taze array doretdik
let fruits = document.getElementById('fruits'); // HTML-den id cekdik
let oldBtn = null; // kone basylan button
let newBtn = null; // taze basylan button
let foundImages = 0;
let oldBtnInterval = null;
let newBtnInterval = null;
let oldBtnTimer = 0;
let newBtnTimer = 0;

function loadGame() {
    gameImages.sort(() => Math.random() - 0.5); // shuffle etdik
    fruits.innerHTML = ''; // id-in icini arassaladyk
    gameImages.forEach(element => { // suratlary yerlesdirdik
        fruits.innerHTML += `<div class="col">
            <button class="btn btn-light btn-image p-1" value="${element['code']}">
                <img src="img/image.png" alt="" class="img-fluid">
            </button>
        </div>`;
    });

    oldBtn = null;
    newBtn = null;
    foundImages = 0;
    oldBtnInterval = null;
    newBtnInterval = null;
    oldBtnTimer = 0;
    newBtnTimer = 0;
    startGame();
}

function startGame() {
    let btnImages = document.getElementsByClassName('btn-image');

    for (const btnImage of btnImages) {
        btnImage.addEventListener('click', function () {
            oldBtnInterval = newBtnInterval;
            oldBtnTimer = newBtnTimer;

            clearInterval(newBtnInterval);
            newBtnTimer = 0;

            newBtnInterval = setInterval(function () {
                newBtnTimer += 1;
            }, 1000)

            console.log(oldBtnTimer, newBtnTimer);
            let self = this;

            // self-yn value-syndan image-yny tapyas
            // {code: 2, url: 'banana.png'}
            selfImage = fruitImages.find(obj => obj.code === +self.value);

            // self-yn suratyny calysyas
            self.classList.add('btn-warning');
            self.classList.remove('btn-light');
            self.firstElementChild.setAttribute('src', 'img/' + selfImage['url']);

            setTimeout(function () {
                self.classList.add('btn-light');
                self.classList.remove('btn-warning');
                self.firstElementChild.setAttribute('src', 'img/image.png');
            }, 2000);

            // buttonlary calysyas
            oldBtn = newBtn;
            newBtn = self;

            if (oldBtn != null && oldBtn !== newBtn && oldBtnTimer < 2) {
                if (oldBtn.value === newBtn.value) {
                    setTimeout(function () {
                        oldBtn.classList.add('invisible');
                        newBtn.classList.add('invisible');
                        foundImages += 1;
                    }, 500);
                }
            }

            if (foundImages > 7) {
                for (const btnImage of btnImages) {
                    btnImage.classList.remove('invisible');
                }
            }
        })
    }
}

loadGame();