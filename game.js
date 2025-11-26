
import { drawPlayer, drawEnemy } from "./engine.js";

let player = { x: 200, y: 200, hp: 100, inv: [] };
let enemy = { x: 500, y: 300, hp: 40 };

document.addEventListener("keydown", e => {
    if(e.key === "w") player.y -= 10;
    if(e.key === "s") player.y += 10;
    if(e.key === "a") player.x -= 10;
    if(e.key === "d") player.x += 10;
});

function attack() {
    const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y);
    if(dist < 40) {
        enemy.hp -= 5;
        if(enemy.hp <= 0) {
            player.inv.push("Lumina Shard");
            updateInventory();
            enemy.x = Math.random()*canvas.width;
            enemy.y = Math.random()*canvas.height;
            enemy.hp = 40;
        }
    }
}

function updateInventory() {
    const invDiv = document.getElementById("inventory");
    invDiv.innerHTML = "<b>Inventory:</b><br>" + player.inv.join("<br>");
}

document.addEventListener("click", attack);

function loop() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawPlayer(player.x, player.y);
    drawEnemy(enemy.x, enemy.y);
    requestAnimationFrame(loop);
}
updateInventory();
loop();
