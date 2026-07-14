const onlineCount = document.getElementById("online-count");

let currentCount = 3842;

setInterval(function () {
    const change = Math.floor(Math.random() * 7) - 3;

    currentCount = currentCount + change;

    if (currentCount < 3810) {
        currentCount = 3810;
    }

    if (currentCount > 3890) {
        currentCount = 3890;
    }

    onlineCount.textContent = currentCount;
}, 2000);