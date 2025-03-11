// For the info boxes

const infobox1 = document.querySelector(".Infobox1");
const infobox2 = document.querySelector(".Infobox2");

infobox1.addEventListener("click", function () {
    expand(this);
});
infobox2.addEventListener("click", function () {
    expand1(this);
});

function expand(element) {
    element.classList.toggle("active1");
}
function expand1(element) {
    element.classList.toggle("active2");
}

// img hover

let currentImg = 0;

const imageV = './Vorunaimg/Voruna.png';
const images2V = ['./Vorunaimg/voruna1.png', './Vorunaimg/voruna2.png', './Vorunaimg/voruna3.png'];
const Vimage = document.querySelector('.Vimage');

Vimage.addEventListener('mouseenter', () => {
    let img = setInterval(() => {
        currentImg = (currentImg + 1) % images2V.length;
        Vimage.style.backgroundImage = `url('${images2V[currentImg]}')`;
    }, 1000);

    Vimage.addEventListener('mouseleave', () => {
        clearInterval(img);
        Vimage.style.backgroundImage = `url('${imageV}')`;
    });
});

const imageG = './Gaussimg/Gauss.png';
const images2G = ['./Gaussimg/gauss1.png', './Gaussimg/gauss2.png', './Gaussimg/gauss3.png'];
const Gimage = document.querySelector('.Gimage')

Gimage.addEventListener('mouseenter', () => {
    let img = setInterval(() => {
        currentImg = (currentImg + 1) % images2G.length;
        Gimage.style.backgroundImage = `url('${images2G[currentImg]}')`;
    }, 1000);

    Gimage.addEventListener('mouseleave', () => {
        clearInterval(img);
        Gimage.style.backgroundImage = `url('${imageG}')`;
    });
});
