// Pop up for abilities

const abilities = document.getElementById("Ab");
const AbPop = document.querySelector(".AbPopup");
const AbClose = document.querySelector(".AbClose");

abilities.addEventListener('click', () => {
    AbPop.style.display = "flex";
});

AbPop.addEventListener('click', (e) => {
    if (e.target === AbPop){
        AbPop.style.display = "none";
    }
});

AbClose.addEventListener('click', () => {
    AbPop.style.display = "none";
});

// Pop up for Building

const build = document.getElementById("buil");
const BuilPopup = document.querySelector(".BuilPopup");
const BuilClose = document.querySelector(".BuilClose");

build.addEventListener('click', () => {
    BuilPopup.style.display = "flex";
});

BuilPopup.addEventListener('click', (e) => {
    if (e.target === BuilPopup){
        BuilPopup.style.display = "none";
    }
});

BuilClose.addEventListener('click', () => {
    BuilPopup.style.display = "none";
});

// Pop up for about

const about = document.getElementById("about");
const APop = document.querySelector(".APopup");
const AClose = document.querySelector(".AClose");

about.addEventListener('click', () => {
    APop.style.display = "flex";
});

APop.addEventListener('click', (e) => {
    if (e.target === APop){
        APop.style.display = "none";
    }
});

AClose.addEventListener('click', () => {
    APop.style.display = "none";
});

// Pop up for lore

const lore = document.getElementById("lore");
const LPop = document.querySelector(".LPopup");
const LClose = document.querySelector(".LClose");

lore.addEventListener('click', () => {
    LPop.style.display = "flex";
});

LPop.addEventListener('click', (e) => {
    if (e.target === LPop){
        LPop.style.display = "none";
    }
});

LClose.addEventListener('click', () => {
    LPop.style.display = "none";
});