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

//Gauss Ab

const Abgifs = ["../Vorunaimg/Voruna1st.gif","../Vorunaimg/Voruna2nd.gif","../Vorunaimg/Voruna3rd.gif","../Vorunaimg/Voruna4th.gif",];
const Abgif = document.querySelector(".Abgif");
const Ab1st = document.querySelector(".Ab1img");
const Ab2st = document.querySelector(".Ab2img");
const Ab3st = document.querySelector(".Ab3img");
const Ab4st = document.querySelector(".Ab4img");
const ab1st = document.querySelector(".Ab1st");
const ab2st = document.querySelector(".Ab2st");
const ab3st = document.querySelector(".Ab3st");
const ab4st = document.querySelector(".Ab4st");
const AbClose1 = document.querySelector(".AbClose1")

function closeAll() {
    ab1st.classList.remove("active1");
    ab2st.classList.remove("active2");
    ab3st.classList.remove("active3");
    ab4st.classList.remove("active4");

    ab1st.classList.remove("hidden");
    ab2st.classList.remove("hidden");
    ab3st.classList.remove("hidden");
    ab4st.classList.remove("hidden");

    Abgif.style.backgroundImage = "url(../Vorunaimg/Voruna.png)";
}

// Expand functions
Ab1st.addEventListener('click', () => {
    ab1st.classList.toggle("active1");

    if (ab1st.classList.contains("active1")) {
        Abgif.style.backgroundImage = `url('${Abgifs[0]}')`;
        ab2st.classList.add("hidden");
        ab3st.classList.add("hidden");
        ab4st.classList.add("hidden");
    } else {
        closeAll();
    }
});

Ab2st.addEventListener('click', () => {
    ab2st.classList.toggle("active2");

    if (ab2st.classList.contains("active2")) {
        Abgif.style.backgroundImage = `url('${Abgifs[1]}')`;
        ab1st.classList.add("hidden");
        ab3st.classList.add("hidden");
        ab4st.classList.add("hidden");
    } else {
        closeAll();
    }
});

Ab3st.addEventListener('click', () => {
    ab3st.classList.toggle("active3");

    if (ab3st.classList.contains("active3")) {
        Abgif.style.backgroundImage = `url('${Abgifs[2]}')`;
        ab1st.classList.add("hidden");
        ab2st.classList.add("hidden");
        ab4st.classList.add("hidden");
    } else {
        closeAll();
    }
});

Ab4st.addEventListener('click', () => {
    ab4st.classList.toggle("active4");

    if (ab4st.classList.contains("active4")) {
        Abgif.style.backgroundImage = `url('${Abgifs[3]}')`;
        ab1st.classList.add("hidden");
        ab2st.classList.add("hidden");
        ab3st.classList.add("hidden");
    } else {
        closeAll();
    }
});

AbClose1.addEventListener('click', () => {
    closeAll();
});