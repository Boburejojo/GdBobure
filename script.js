let player = new Image();
let backgraund = new Image();
backgraund.src = "./img/Без імені.png";
player.src = "./img/Icono.png";
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;
let playerX = canvas.width / 3;
let playerY = canvas.height / 1.5;
let playerW = 50;
let playerH = 50;
let graviti = 9.8;
let bySpeed = 5;
let bgX = 0;
let jumpState = false;
setInterval(function () {
  ctx.drawImage(backgraund, bgX, 0, canvas.width, canvas.height);
  ctx.drawImage(backgraund, bgX + canvas.width, 0, canvas.width, canvas.height);
  ctx.drawImage(player, playerX, playerY, playerW, playerH);
  bgX -= bySpeed;
  if (bgX <= canvas.width * -1) {
    bgX = 0;
  } else {
    bgX -= bySpeed;
  }
  if (jumpState) {
    playerY -= graviti;

    if (playerY <= canvas.height - playerH - 100) {
        jumpState = false;
    }
  } else {
    if (!(playerY >= canvas.height - playerH)) {
      playerY += graviti;
    }
  }
}, 30);


canvas.addEventListener("click", function () {
  if (playerY >= canvas.height - playerH) {
    jumpState = true;
  }
});
