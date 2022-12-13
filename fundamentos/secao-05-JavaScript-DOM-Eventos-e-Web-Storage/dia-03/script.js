window.onload = () => {
    let button = document.querySelector("#button");

    let car1 = document.querySelector("#dk");
    let car2 = document.querySelector("#mario");
    let car3 = document.querySelector("#toad");
    let car4 = document.querySelector("#yoshi");

    car1.style.marginTop = 0;
    car2.style.marginTop = 0;
    car3.style.marginTop = 0;
    car4.style.marginTop = 0;


    button.addEventListener("click", () => {
        car1.style.marginTop = parseInt(car1.style.marginTop) - (Math.random() * 100) + 'px';
        car2.style.marginTop = parseInt(car2.style.marginTop) - (Math.random() * 100) + 'px';
        car3.style.marginTop = parseInt(car3.style.marginTop) - (Math.random() * 100) + 'px';
        car4.style.marginTop = parseInt(car4.style.marginTop) - (Math.random() * 100) + 'px';

        let winner = -480

        let car1Win = parseInt(car1.style.marginTop) < winner;
        let car2Win = parseInt(car2.style.marginTop) < winner;
        let car3Win = parseInt(car3.style.marginTop) < winner;
        let car4Win = parseInt(car4.style.marginTop) < winner;

        let allCars = [parseInt(car1.style.marginTop), parseInt(car2.style.marginTop), parseInt(car3.style.marginTop), parseInt(car4.style.marginTop)]
        
        let topCar = Math.min(...allCars);

        let car1WinTop = topCar == parseInt(car1.style.marginTop);
        let car2WinTop = topCar == parseInt(car2.style.marginTop);
        let car3WinTop = topCar == parseInt(car3.style.marginTop);
        let car4WinTop = topCar == parseInt(car4.style.marginTop);

        if ((car1Win) && (car1WinTop)) {
            alert("DK WINNER!!!");
            location.reload(true);
        }
        if ((car2Win) && (car2WinTop)) {
            alert("Mario WINNER!!!");
            location.reload(true);
        }
        if ((car3Win) && (car3WinTop)) {
            alert("Toad WINNER!!!");
            location.reload(true);
        }
        if ((car4Win) && (car4WinTop)) {
            alert("Yoshi WINNER!!!");
            location.reload(true);
        }


    });

    let player = document.querySelector("#p1");

    let dk = document.querySelector("#dk-select");
    let mario = document.querySelector("#mario-select");
    let toad = document.querySelector("#toad-select");
    let yoshi = document.querySelector("#yoshi-select");

    if (dk.addEventListener("click", () => {
        dk.style.backgroundColor = 'red'
        mario.style.backgroundColor = 'rgba(245, 245, 245, 0.500)'
        toad.style.backgroundColor = 'rgba(245, 245, 245, 0.500)'
        yoshi.style.backgroundColor = 'rgba(245, 245, 245, 0.500)'
        player.style.opacity = '100%'
        player.style.left = '11vh'
    }));

    if (mario.addEventListener("click", () => {
        dk.style.backgroundColor = 'rgba(245, 245, 245, 0.500)'
        mario.style.backgroundColor = 'red'
        toad.style.backgroundColor = 'rgba(245, 245, 245, 0.500)'
        yoshi.style.backgroundColor = 'rgba(245, 245, 245, 0.500)'
        player.style.opacity = '100%'
        player.style.left = '36vh'
    }));

    if (toad.addEventListener("click", () => {
        dk.style.backgroundColor = 'rgba(245, 245, 245, 0.500)'
        mario.style.backgroundColor = 'rgba(245, 245, 245, 0.500)'
        toad.style.backgroundColor = 'red'
        yoshi.style.backgroundColor = 'rgba(245, 245, 245, 0.500)'
        player.style.opacity = '100%'
        player.style.left = '60vh'
    }));

    if (yoshi.addEventListener("click", () => {
        dk.style.backgroundColor = 'rgba(245, 245, 245, 0.500)'
        mario.style.backgroundColor = 'rgba(245, 245, 245, 0.500)'
        toad.style.backgroundColor = 'rgba(245, 245, 245, 0.500)'
        yoshi.style.backgroundColor = 'red'
        player.style.opacity = '100%'
        player.style.left = '85vh'
    }));

}