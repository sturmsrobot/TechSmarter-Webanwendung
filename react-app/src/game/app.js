const app = new PIXI.Application();
document.body.appendChild(app.view);

const hacker = PIXI.Sprite.from("assets/hacker.png");
hacker.x = 350;
hacker.y = 520;
hacker.scale.x = 0.1;
hacker.scale.y = 0.1;
app.stage.addChild(hacker);

gameInterval(function () {
  const bug = PIXI.Sprite.from("assets/bug.png");
  bug.x = random(0, 700);
  bug.y = -25;
  bug.scale.x = 0.1;
  bug.scale.y = 0.1;
  app.stage.addChild(bug);
  flyDown(bug, 1);

  waitForCollision(bug, hacker).then(function () {
    app.stage.removeChild(hacker);
    stopGame();
  });
}, 1000);

function leftKeyPressed() {
  hacker.x = hacker.x - 5;
}

function rightKeyPressed() {
  hacker.x = hacker.x + 5;
}

// const spider = PIXI.Sprite.from("assets/spider.png");
// spider.x = 200;
// spider.y = 150;
// spider.scale.x = 0.1;
// spider.scale.y = 0.1;
// app.stage.addChild(spider);

// const bugc = PIXI.Sprite.from("assets/bugc.png");
// bugc.x = 350;
// bugc.y = 80;
// bugc.scale.x = 0.1;
// bugc.scale.y = 0.1;
// app.stage.addChild(bugc);
