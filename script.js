// =====================================
// NAMA YANG ULANG TAHUN
// =====================================

const birthdayName = "Elvira";

const nameElement = document.getElementById("name");

let index = 0;

function typeName() {

    if (index < birthdayName.length) {

        nameElement.textContent += birthdayName.charAt(index);

        index++;

        setTimeout(typeName, 150);

    }

}

typeName();


// =====================================
// CONFETTI
// =====================================

const confettiContainer =
    document.getElementById("confetti-container");


function createConfetti(amount = 100) {

    for (let i = 0; i < amount; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        confetti.style.width =
            Math.random() * 8 + 5 + "px";

        confetti.style.height =
            Math.random() * 8 + 5 + "px";

        confetti.style.background =
            randomColor();

        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        confettiContainer.appendChild(confetti);


        setTimeout(() => {

            confetti.remove();

        }, 6000);

    }

}


function randomColor() {

    const colors = [

        "#ff4d6d",
        "#ffd166",
        "#06d6a0",
        "#118ab2",
        "#8338ec",
        "#ffbe0b"

    ];

    return colors[
        Math.floor(Math.random() * colors.length)
    ];

}


// Jalankan confetti saat halaman dibuka

setTimeout(() => {

    createConfetti(150);

}, 1000);


// =====================================
// HADIAH
// =====================================

const giftBtn =
    document.getElementById("giftBtn");

const giftBox =
    document.getElementById("giftBox");


giftBtn.addEventListener("click", () => {

    giftBox.classList.toggle("show");

    createConfetti(200);

});


// =====================================
// MUSIK
// =====================================

const music =
    document.getElementById("birthdayMusic");

const musicBtn =
    document.getElementById("musicBtn");

let playing = false;


musicBtn.addEventListener("click", () => {

    if (!playing) {

        music.play();

        musicBtn.textContent = "🔊";

        playing = true;

    } else {

        music.pause();

        musicBtn.textContent = "🎵";

        playing = false;

    }

});


// =====================================
// KONFETI BERKALA
// =====================================

setInterval(() => {

    createConfetti(15);

}, 8000);