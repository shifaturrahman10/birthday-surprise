/* =========================
   ELEMENTS
========================= */

const collectGiftBtn =
    document.getElementById("collectGiftBtn");

const giftCollectionScreen =
    document.getElementById("giftCollectionScreen");

const giftGrid =
    document.getElementById("giftGrid");

const giftResult =
    document.getElementById("giftResult");

const allGiftsMessage =
    document.getElementById("allGiftsMessage");

const collectGifts =
    document.querySelectorAll(".collect-gift");

const messageScreen =
    document.getElementById("messageScreen");

const memoriesBtn =
    document.getElementById("memoriesBtn");

const gardenContinue =
    document.getElementById("gardenContinue");

const gameScreen =
    document.getElementById("gameScreen");

const gameArea =
    document.getElementById("gameArea");

const heartCount =
    document.getElementById("heartCount");

const gameComplete =
    document.getElementById("gameComplete");

const unlockBtn =
    document.getElementById("unlockBtn");

const openGiftBtn = 
  document.getElementById("openGiftBtn");

const welcomeScreen =
    document.getElementById("welcomeScreen");

const giftScreen =
    document.getElementById("giftScreen");

const giftBox =
    document.querySelector(".gift-box");

const tapText =
    document.querySelector(".tap-text");

const birthdayCelebration =
    document.getElementById("birthdayCelebration");

const surpriseScreen =
    document.getElementById("surpriseScreen");

const discoverBtn =
    document.getElementById("discoverBtn");

const surpriseContent =
    document.querySelector(".surprise-content");

const garden =
    document.getElementById("garden");


/* =========================
   STEP 1 → STEP 2
   OPEN GIFT SCREEN
========================= */

openGiftBtn.addEventListener("click", function () {

    welcomeScreen.classList.add("hidden");

    giftScreen.classList.remove("hidden");

});


/* =========================
   STEP 2 → STEP 3
   OPEN GIFT BOX
========================= */

giftBox.addEventListener("click", function () {

    // Prevent clicking multiple times
    if (giftBox.classList.contains("open")) {
        return;
    }

    // Open lid
    giftBox.classList.add("open");

    // Hide tap text
    tapText.style.opacity = "0";


    /* After lid opens */

    setTimeout(function () {

        // Hide gift box
        giftBox.style.display = "none";

        // Show birthday celebration
        birthdayCelebration.classList.remove("hidden");

    }, 900);

});


/* =========================
   STEP 3 → STEP 4
   BIRTHDAY → SURPRISE
========================= */

function goToSurprise() {

    birthdayCelebration.style.opacity = "0";

    setTimeout(function () {

        birthdayCelebration.classList.add("hidden");

        birthdayCelebration.style.opacity = "1";

        surpriseScreen.classList.remove("hidden");

    }, 1000);

}


/* =========================
   CAKE → SURPRISE BUTTON
========================= */

const surpriseNextBtn =
    document.getElementById("surpriseNextBtn");

surpriseNextBtn.addEventListener("click", function () {

    goToSurprise();

});


/* =========================
   STEP 4 → GARDEN
========================= */

discoverBtn.addEventListener("click", function () {

    surpriseContent.style.opacity = "0";

    setTimeout(function () {

        surpriseContent.classList.add("hidden");

        garden.classList.remove("hidden");

    }, 700);

});


/* =========================
   STEP 5 → STEP 6
   GARDEN → HEART GAME
========================= */

gardenContinue.addEventListener("click", function () {

    garden.classList.add("hidden");

    gameScreen.classList.remove("hidden");

    startHeartGame();

});


/* =========================
   HEART GAME
========================= */

let heartsCaught = 0;

function startHeartGame() {

    heartsCaught = 0;

    heartCount.textContent = heartsCaught;

    gameComplete.classList.add("hidden");

    createHeart();

}


/* =========================
   CREATE HEART
========================= */

function createHeart() {

    // Remove previous heart
    gameArea.innerHTML = "";

    const heart = document.createElement("div");

    heart.className = "game-heart";

    heart.textContent = "❤️";


    // Random position
    const x =
        Math.random() * 80 + 10;

    const y =
        Math.random() * 55 + 25;


    heart.style.left = x + "%";
    heart.style.top = y + "%";


    /* Click heart */

    heart.addEventListener("click", function () {

        heartsCaught++;

        heartCount.textContent =
            heartsCaught;


        if (heartsCaught >= 10) {

            gameArea.innerHTML = "";

            setTimeout(function () {

                gameComplete.classList.remove("hidden");

            }, 400);

        } else {

            createHeart();

        }

    });


    gameArea.appendChild(heart);

}

/* =========================
   GAME → PERSONAL MESSAGE
========================= */

unlockBtn.addEventListener("click", function () {

    gameScreen.classList.add("hidden");

    messageScreen.classList.remove("hidden");

});

/* =========================
   PERSONAL MESSAGE → GIFTS
========================= */

collectGiftBtn.addEventListener("click", function () {

    messageScreen.classList.add("hidden");

    giftCollectionScreen.classList.remove("hidden");

});

/* =========================
   OPEN GIFT
========================= */

collectGifts.forEach(function (gift) {

    gift.addEventListener("click", function () {

        // Prevent clicking again
        if (gift.classList.contains("opened")) {
            return;
        }

        // Open selected gift
        gift.classList.add("opened");


        // Show sad message
        setTimeout(function () {

            giftResult.classList.remove("hidden");

        }, 700);


        // Hide sad message
        setTimeout(function () {

            giftResult.classList.add("hidden");

            // Show just kidding
            allGiftsMessage.classList.remove("hidden");

        }, 3000);


        // Open all remaining gifts
        setTimeout(function () {

            allGiftsMessage.classList.add("hidden");

            openAllGifts();

        }, 5500);

    });

});

/* =========================
   OPEN ALL GIFTS
========================= */

function openAllGifts() {

    collectGifts.forEach(function (gift, index) {

        setTimeout(function () {

            gift.classList.add("opened");

            setTimeout(function () {

                gift.classList.add("gift-revealed");

            }, 500);

        }, index * 600);

    });


    /* Wait until all gifts are revealed */

    setTimeout(function () {

        showFinalScreen();

    }, 9 * 600 + 2200);

}

/* =========================
   FINAL SURPRISE
========================= */

const finalScreen =
    document.getElementById("finalScreen");


function showFinalScreen() {

    giftCollectionScreen.classList.add("hidden");

    setTimeout(function () {

        finalScreen.classList.remove("hidden");

    }, 500);
}

/* =========================
   LAST MESSAGE
========================= */

const finalMessageBtn =
    document.getElementById("finalMessageBtn");

const lastMessageScreen =
    document.getElementById("lastMessageScreen");


finalMessageBtn.addEventListener("click", function () {

    finalScreen.classList.add("hidden");

    setTimeout(function () {

        lastMessageScreen.classList.remove("hidden");

    }, 500);

});