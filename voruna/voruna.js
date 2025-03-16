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

//Voruna's Ab

const Abgifs = ["../Vorunaimg/Voruna1st.gif","../Vorunaimg/Voruna2nd.gif","../Vorunaimg/Voruna3rd.gif","../Vorunaimg/Voruna4th.gif",];
const Abgif = document.querySelector(".Abgif");
const Ab1st = document.querySelector(".Ab1st");
const Ab2st = document.querySelector(".Ab2st");
const Ab3st = document.querySelector(".Ab3st");
const Ab4st = document.querySelector(".Ab4st");

Ab1st.addEventListener('click', () => {
    const ab1st = Ab1st.classList.toggle("active1");

    if (ab1st){
        Abgif.style.backgroundImage = `url('${Abgifs[0]}')`;
    } else {
        Abgif.style.backgroundImage = "url(../Vorunaimg/Voruna.png)"
    }

    Ab2st.classList.toggle("hidden");
    Ab3st.classList.toggle("hidden");
    Ab4st.classList.toggle("hidden");
});
Ab2st.addEventListener('click', () => {
    const ab2st = Ab2st.classList.toggle("active2")

    if (ab2st){  
        Abgif.style.backgroundImage = `url('${Abgifs[1]}')`;
    } else {
        Abgif.style.backgroundImage = "url(../Vorunaimg/Voruna.png)"
    }

    Ab1st.classList.toggle("hidden");
    Ab3st.classList.toggle("hidden");
    Ab4st.classList.toggle("hidden");
});
Ab3st.addEventListener('click', () => {
    const ab3st = Ab3st.classList.toggle("active3")

    if (ab3st){  
        Abgif.style.backgroundImage = `url('${Abgifs[2]}')`;
    } else {
        Abgif.style.backgroundImage = "url(../Vorunaimg/Voruna.png)"
    }

    Ab1st.classList.toggle("hidden");
    Ab2st.classList.toggle("hidden");
    Ab4st.classList.toggle("hidden");
});
Ab4st.addEventListener('click', () => {
    const ab4st = Ab4st.classList.toggle("active4")

    if (ab4st){  
        Abgif.style.backgroundImage = `url('${Abgifs[3]}')`;
    } else {
        Abgif.style.backgroundImage = "url(../Vorunaimg/Voruna.png)"
    }


    Ab1st.classList.toggle("hidden");
    Ab2st.classList.toggle("hidden");
    Ab3st.classList.toggle("hidden");
});