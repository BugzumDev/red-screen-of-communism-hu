progress = document.querySelector(".progress");

console.log(progress)

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function randomNumber(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

for (var i = 5; i < 100; i++) {
    progress = "Deleting files. " + i + "% complete";
    console.log(progress, i)
    sleep(1000)
}