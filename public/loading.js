const loadingMessage = document.getElementById("loading-message");
const loadingProgress = document.getElementById("loading-progress");

const messages = [
    "Reading your answers...",
    "Comparing personalities...",
    "Searching for compatible users...",
    "0 compatible users found.",
    "Switching search mode...",
    "Searching complete opposites...",
    "Perfect mismatch found."
];

let messageIndex = 0;
let progress = 0;

const loadingInterval = setInterval(function () {
    progress += 15;

    loadingProgress.style.width = progress + "%";

    if (messageIndex < messages.length) {
        loadingMessage.textContent = messages[messageIndex];
        messageIndex++;
    }

    if (progress >= 100) {
        clearInterval(loadingInterval);

        setTimeout(function () {
            window.location.href = "/results";
        }, 1000);
    }
}, 700);