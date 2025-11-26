
export function playMusic() {
    const a = new Audio("bgm.mp3");
    a.loop = true;
    a.volume = 0.5;
    a.play();
}
