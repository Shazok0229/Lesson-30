let btns = document.getElementsByClassName('btn');

for (const btn of btns) {
    btn.addEventListener('click', function () {
        let btnClasses = this.classList;
        let bgColor = btnClasses[1].replace('btn', 'bg');
        document.body.classList = bgColor;
    })

    // // basda interval doredyas
    // let colorInterval = null;

    // btn.addEventListener('dblclick', function () {
    //     let btnClasses = this.classList;
    //     let bgColor = btnClasses[1].replace('btn', 'bg');
    //     let oldBgColor = document.body.classList[0];

    //     // islap duran interval bar bolsa ocurdi
    //     clearInterval(colorInterval);

    //     // taze interval belledi
    //     colorInterval = setInterval(function () {
    //         if (document.body.classList == oldBgColor) {
    //             document.body.classList = bgColor;
    //         } else {
    //             document.body.classList = oldBgColor;
    //         }
    //     }, 100);
    // })
}