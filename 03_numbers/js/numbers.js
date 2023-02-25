let btns = document.getElementsByClassName('btn');
let result = document.getElementById('result');
let dividedBy2 = document.getElementById('dividedBy2');
let dividedBy3 = document.getElementById('dividedBy3');
let dividedBy5 = document.getElementById('dividedBy5');

for (const btn of btns) {
    btn.addEventListener('click', function () {
        let resultNumber = parseInt(result.textContent)
        
        resultNumber += parseInt(this.textContent);
        
        if (resultNumber % 2 == 0) {
            dividedBy2.classList.remove('d-none');
        } else {
            dividedBy2.classList.add('d-none');
        }

        if (resultNumber % 3 == 0) {
            dividedBy3.classList.remove('d-none');
        } else {
            dividedBy3.classList.add('d-none');
        }

        if (resultNumber % 5 == 0) {
            dividedBy5.classList.remove('d-none');
        } else {
            dividedBy5.classList.add('d-none');
        }

        result.textContent = resultNumber;
    })
}