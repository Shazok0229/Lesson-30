// 20 >= san >= 16 primary
// 15 >= san >= 11 success
// 10 >= san >=  6 warning
//  5 >= san >=  1 danger

let btns = document.getElementsByClassName('btn');
let finish = document.getElementById('finish');
let body = document.querySelector('body');

for (const btn of btns) {
    btn.addEventListener('click', function() {
        this.innerText = this.innerText - 1;
        
        if (this.innerText == 15) {
            this.classList.remove('btn-primary');
            this.classList.add('btn-success');
        } else if (this.innerText == 10) {
            this.classList.remove('btn-success');
            this.classList.add('btn-warning');
        } else if (this.innerText == 5) {
            this.classList.remove('btn-warning');
            this.classList.add('btn-danger');
        } else if (this.innerText == 0) {
            this.remove();
        }

        if (btns.length == 0) {
            body.classList.add('bg-black');
            finish.classList.add('text-white')
            finish.innerText = 'Finish';
            finish.classList.remove('d-none')
        }
    });
}