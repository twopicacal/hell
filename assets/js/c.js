//comments obvi
const subtitles = [
    "Welcome to Twopicals!",
    "Welcome to Twopicals!",
    "Welcome to Twopicals!",
    "Welcome to Twopicals!",
    "Welcome to Twopicals!",
    "Welcome to Twopicals!",
    "Welcome to Twopicals!",
    "Welcome to Twopicals!",
    "Welcome to Twopicals!",
    "Welcome to Twopicals!",
    "Welcome to Twopicals!",
    "Welcome to Twopicals!",
    "Welcome to Twopicals!",
    "Welcome to Twopicals!",
    "Welcome to Twopicals!",
    "Welcome to Twopicals!",
    "Welcome to Twopicals!",
    "Welcome to Twopicals!",
    "Welcome to Twopicals!",
    "Welcome to Twopicals!",
    "Welcome to Twopicals!",
    "Welcome to Twopicals!",
    "Welcome to Twopicals!",
];

function xd() {
    const subtitleElement = document.getElementById("subtitle");
    const randomIndex = Math.floor(Math.random() * subtitles.length);
    const randomSubtitle = subtitles[randomIndex];
    subtitleElement.textContent = randomSubtitle;
}

xd();
setInterval(updateSubtitle, 10);
