const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [], 
newAudio = new Audio(`tunes/a.wav`);

const playTune = (key) => {
    newAudio.src = `tunes/${key}.wav`;
    newAudio.play();

    const currentKey = document.querySelector(`[data-key="${key}"]`);
    currentKey.classList.add("active");
    setTimeout(() => {
        currentKey.classList.remove("active");
    }, 150);
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
    newAudio.volume = e.target.value;
    let percent = (e.target.value / e.target.max) * 100;
    volumeSlider.style.background = `linear-gradient(to right, #fff ${percent}%, #4B4B4B ${percent}%)`;
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) => {
    if(allKeys.includes(e.key)) playTune(e.key);
}

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);