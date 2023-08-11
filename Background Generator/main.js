const body = document.querySelector('body'),
    input1 = document.querySelector('.green-input'),
    input2 = document.querySelector('.blue-input'),
    lightBtn = document.querySelector('.light'),
    darkBtn = document.querySelector('.dark'),
    changecolor = document.querySelector('.changeColor'),
    h1 = document.querySelector('h1')


function setGradientBackgroundToBody() {
    body.style.background = `linear-gradient(to right , ${input1.value} , ${input2.value})`
}


function changeToDarkMode() {
    body.style.background = "#000000";
    h1.style.color = "#ffffff";
}

function changeToLightMode() {
    body.style.background = "#ffffff";
    h1.style.color = "#000000";
}


function randomColor() {
    var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ','
        + (Math.floor(Math.random() * 256)) + ','
        + (Math.floor(Math.random() * 256)) + ')';
    return color;
}

function getRandomColor() {
    var rndColor1 = randomColor();
    var rndColor2 = randomColor();
    body.style.background = `linear-gradient(to right , ${rndColor1} , ${rndColor2})`;

}


input1.addEventListener('input', setGradientBackgroundToBody)
input2.addEventListener('input', setGradientBackgroundToBody)
lightBtn.addEventListener('click', changeToLightMode)
darkBtn.addEventListener('click', changeToDarkMode)
changecolor.addEventListener('click', getRandomColor)
