import create6 from "./level_six";

const CENTER_HORIZONTAL = 400;
const CENTER_VERTICAL = 300;
let TILE_WIDTH = 40;
let TILE_HEIGHT = 40;

var config = {
  parent: "game",
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create1,
    update: update,
  },
};

var player;
var jewels;
var guards;
var cursors;
var gameOver = false;
var tileSize = TILE_WIDTH;
var moveIncrement = 10;
var moveTimer = 150;
var lastPosx = 0;
var lastPosy = 0;
var screenWidth = CENTER_HORIZONTAL * 2;
var screenHeight = CENTER_VERTICAL * 2;
var playerScale;
var pauseKeyboard = false;
var playerCenterX;
var playerCenterY;
var playerScale = 0.2;

var game = new Phaser.Game(config);

function preload() {
  this.load.image("checkerboard", "assets/checkerboard.png");
  this.load.image("blueT", "assets/tileBlue.png");
  this.load.image("whiteT", "assets/tileWhite.png");
  this.load.image("wallV", "assets/wallV.png");
  this.load.image("wallH", "assets/wallH.png");
  this.load.image("jewel", "assets/jewel.png");
  this.load.image("GameOver", "assets/Gameover.png");
  this.load.image("AvoidGuards", "assets/Avoidtheguards.png");
  this.load.spritesheet("dude", "assets/Robber.png", {
    frameWidth: 190,
    frameHeight: 340,
  });
  this.load.spritesheet("guard", "assets/Guard.png", {
    frameWidth: 28,
    frameHeight: 55,
  });
}

document.getElementById("level-select").addEventListener("change", (event) => {
  switchLevel(event.target.value);
});

function switchLevel(level) {
  game.destroy(true);
  switch (level) {
    case "1":
      config.scene.create = create1;
      game = new Phaser.Game(config);
      break;
    case "2":
      config.scene.create = create2;
      game = new Phaser.Game(config);
      break;
    case "3":
      config.scene.create = create3;
      game = new Phaser.Game(config);
      break;
    case "4":
      config.scene.create = create4;
      game = new Phaser.Game(config);
      break;
    case "5":
      config.scene.create = create1;
      game = new Phaser.Game(config);
      break;
    case "6":
      config.scene.create = create1;
      game = new Phaser.Game(config);
      break;
  }
}

function create1() {
  /// GENERATE CHECKERBOARD BACKGROUND ---------------------------------------------------
  generateBackground();

  // GENERATE WALLS ---------------------------------------------------------------------
  // Create the horizontal walls and the vertical walls
  wallsH = this.physics.add.staticGroup();
  wallsV = this.physics.add.staticGroup();

  // Generate the vertical maze walls
  wallsV.create(20, CENTER_VERTICAL, "wallV");
  wallsV.create(780, CENTER_VERTICAL, "wallV");

  // Generate the horizontal maze walls
  c = 0;
  for (let i = 60; i < 800; i += 120) {
    wall = wallsH.create(i, CENTER_VERTICAL - 80, "wallH");
    wall.name = "wallH" + c;
    c++;
  }
  c = 1;
  for (let i = 60; i < 800; i += 120) {
    wallsH.create(i, CENTER_VERTICAL + 80, "wallH");
    wall.name = "wallH" + c;
    c++;
  }
  console.log(wallsH.getChildren());

  // The player and its settings
  player = this.physics.add
    .sprite(20 + 6 * 40, CENTER_VERTICAL - 12, "dude")
    .setScale(playerScale);
  //  Player physics properties. Give the little guy a slight bounce.
  //player.setBounce(0.2);
  player.setCollideWorldBounds(true);
  player.body.onWorldBounds = true;

  //  Our player animations, turning, walking left and walking right.
  createAnims();

  //  Input Events
  cursors = this.input.keyboard.createCursorKeys();

  jewel = this.physics.add.sprite(
    800 - 20 - 6 * 40,
    CENTER_VERTICAL - 10,
    "jewel"
  );
  jewel.setScale(0.125);

  guards = this.physics.add.group();

  //  stops player from going through platforms
  /*this.physics.add.collider(player, wallsH, function () {
    player.y = lastPosy;
    player.x = lastPosx;
  });
  this.physics.add.collider(player, wallsV, function () {
    player.y = lastPosy;
    player.x = lastPosx;
  });*/
  this.physics.add.collider(guards, wallsH);

  //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
  this.physics.add.overlap(player, jewel, collectJewel, null, this);

  //this.physics.add.collider(player, guards, hitGuard, null, this);

  //Collision event
}

function create2() {
  /// GENERATE CHECKERBOARD BACKGROUND --------------------------------------------------
  generateBackground();

  // GENERATE WALLS ---------------------------------------------------------------------
  // Create the horizontal walls and the vertical walls
  wallsH = this.physics.add.staticGroup();
  wallsV = this.physics.add.staticGroup();

  // Horizontal maze walls
  // Bottom walls
  const LEVEL_TWO_BOTTOM = 2 * CENTER_VERTICAL - 100;
  c = 0;
  for (let i = 180; i < 480; i += 120, c++) {
    wall = wallsH.create(i, LEVEL_TWO_BOTTOM, "wallH");
    wall = wallsH.create(i, LEVEL_TWO_BOTTOM - 160, "wallH");
    //wall.name = "wallH" + c;
  }
  wallsH.create(660, LEVEL_TWO_BOTTOM, "wallH");
  wallsH.create(540, LEVEL_TWO_BOTTOM, "wallH");

  // Middle overflow
  wallsH.create(500, LEVEL_TWO_BOTTOM - 160, "wallH");
  wallsH.create(500, LEVEL_TWO_BOTTOM - 240, "wallH");

  // Top walls
  c = 0;
  for (let i = 180; i < 480; i += 120, c++) {
    wall = wallsH.create(i, LEVEL_TWO_BOTTOM - 240, "wallH");
    wall = wallsH.create(i, LEVEL_TWO_BOTTOM - 400, "wallH");
    //wall.name = "wallH" + c;
  }
  wallsH.create(660, LEVEL_TWO_BOTTOM - 400, "wallH");
  wallsH.create(540, LEVEL_TWO_BOTTOM - 400, "wallH");

  // Vertical walls
  // Bottom left
  wall = wallsH.create(100, LEVEL_TWO_BOTTOM - 40, "wallV");
  wall = wallsH.create(100, LEVEL_TWO_BOTTOM - 120, "wallV");

  // Top left
  wall = wallsH.create(100, LEVEL_TWO_BOTTOM - 280, "wallV");
  wall = wallsH.create(100, LEVEL_TWO_BOTTOM - 360, "wallV");

  // Right side
  for (let i = LEVEL_TWO_BOTTOM - 80; i > LEVEL_TWO_BOTTOM - 400; i -= 120) {
    wall = wallsH.create(700, i, "wallV");
  }

  // Middle wall
  wall = wallsH.create(540, LEVEL_TWO_BOTTOM - 200, "wallV");

  // The player and its settings
  player = this.physics.add
    .sprite(20 + 4 * 40, LEVEL_TWO_BOTTOM - 55, "dude")
    .setScale(0.2);

  //  Player physics properties. Give the little guy a slight bounce.
  //player.setBounce(0.2);
  player.setCollideWorldBounds(true);
  player.body.onWorldBounds = true;

  //  Our player animations, turning, walking left and walking right.
  createAnims();

  // Input Events
  cursors = this.input.keyboard.createCursorKeys();
  jewel = this.physics.add.sprite(180, LEVEL_TWO_BOTTOM - 322, "jewel");
  jewel.setScale(0.125);
  guards = this.physics.add.group();

  // stops player from going through platforms
  this.physics.add.collider(player, wallsH, () => {
    player.y = lastPosy;
    player.x = lastPosx;
  });
  this.physics.add.collider(player, wallsV, () => {
    player.y = lastPosy;
    player.x = lastPosx;
  });
  // this.physics.add.collider(guards, platforms);

  //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
  this.physics.add.overlap(player, jewel, collectJewel, null, this);

  // this.physics.add.collider(player, guards, hitGuard, null, this);

  // Collision event
}

function create3() {
  /// GENERATE CHECKERBOARD BACKGROUND ---------------------------------------------------
  generateBackground();

  // GENERATE WALLS ---------------------------------------------------------------------
  // Create the horizontal walls and the vertical walls
  wallsH = this.physics.add.staticGroup();
  wallsV = this.physics.add.staticGroup();

  // Generate the vertical maze walls
  for (let i = 60; i < 800; i += 120) {
    wallsV.create(20, i, "wallV");
    wallsV.create(screenWidth - 20, i, "wallV");
  }

  for (let i = 60; i < 800; i += 120) {
    wallsH.create(i, 20, "wallH");
    wallsH.create(i, screenHeight - 20, "wallH");
    wallsH.create(i, 60, "wallH");
    wallsH.create(i, screenHeight - 60, "wallH");
  }

  wallsH.create(40, 140, "wallH");

  for (let i = 0; i < 5; ++i) {
    wallsV.create(180 + 80 * i, 100 + 80 * i, "wallV");
    wallsV.create(100 + 80 * i, 180 + 80 * i, "wallV");
    wallsH.create(220 + 80 * i, 140 + 80 * i, "wallH");
    wallsH.create(140 + 80 * i, 220 + 80 * i, "wallH");
  }

  // The player and its settings
  player = this.physics.add.sprite(500, 700, "dude").setScale(0.2);

  //Player physics properties. Give the little guy a slight bounce.
  player.setCollideWorldBounds(true);
  player.body.onWorldBounds = true;

  //  Our player animations, turning, walking left and walking right.
  createAnims();

  //  Input Events
  cursors = this.input.keyboard.createCursorKeys();

  jewel = this.physics.add.sprite(
    800 - 20 - 6 * 40,
    CENTER_VERTICAL - 10,
    "jewel"
  );
  jewel.setScale(0.125);

  guards = this.physics.add.group();

  //  stops player from going through platforms
  this.physics.add.collider(player, wallsH, function () {
    player.y = lastPosy;
    player.x = lastPosx;
  });
  this.physics.add.collider(player, wallsV, function () {
    player.y = lastPosy;
    player.x = lastPosx;
  });
  //this.physics.add.collider(guards, platforms);

  //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
  this.physics.add.overlap(player, jewel, collectJewel, null, this);

  this.physics.add.collider(player, guards, hitGuard, null, this);

  //Collision event
}

function create4() {
  /// GENERATE CHECKERBOARD BACKGROUND ---------------------------------------------------
  generateBackground();

  // GENERATE WALLS ---------------------------------------------------------------------
  // Create the horizontal walls and the vertical walls
  wallsH = this.physics.add.staticGroup();
  wallsV = this.physics.add.staticGroup();

  // Generate the vertical maze walls
  wallsV.create(20, CENTER_VERTICAL, "wallV");
  wallsV.create(780, CENTER_VERTICAL, "wallV");

  wallsH.create(CENTER_HORIZONTAL, CENTER_HORIZONTAL + 20, "wallH");

  // Generate the horizontal maze walls
  /*c=0;
  for (let i = 60; i < 800; i += 120) {
    wall = wallsH.create(i, CENTER_VERTICAL - 80, "wallH");
    wall.name = "wallH"+c;
    c++;
  }
  c=1
  for (let i = 60; i < 800; i += 120) {
    wallsH.create(i, CENTER_VERTICAL + 80, "wallH");
    wall.name = "wallH"+(c);
    c++
  }

  */

  console.log(wallsH.getChildren());

  // The player and its settings
  player = this.physics.add
    .sprite(20 + 6 * 40, CENTER_VERTICAL - 12, "dude") //
    .setScale(0.2);

  //  Player physics properties. Give the little guy a slight bounce.
  //player.setBounce(0.2);
  player.setCollideWorldBounds(true);
  player.body.onWorldBounds = true;

  //  Our player animations, turning, walking left and walking right.
  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("dude", { start: 2, end: 2 }),
    frameRate: 15,
    repeat: 1,
  });

  this.anims.create({
    key: "turn",
    frames: [{ key: "dude", frame: 0 }],
    frameRate: 20,
  });

  this.anims.create({
    key: "back",
    frames: [{ key: "dude", frame: 9 }],
    frameRate: 20,
  });

  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("dude", { start: 6, end: 6 }),
    frameRate: 15,
    repeat: 1,
  });

  //  Input Events
  cursors = this.input.keyboard.createCursorKeys();

  var jewel = this.physics.add.sprite(
    800 - 20 - 6 * 40,
    CENTER_VERTICAL - 10,
    "jewel"
  );
  jewel.setScale(0.125);

  var guard1 = this.physics.add.sprite(
    800 - 20 - 6 * 40,
    CENTER_VERTICAL - 250,
    "guard"
  );
  guard1.setScale(3);
  this.physics.add.overlap(player, guard1, hitGuard, null, this);

  var guard2 = this.physics.add.sprite(
    800 - 20 - 6 * 40,
    CENTER_VERTICAL + 250,
    "guard"
  );
  guard2.setScale(3);
  this.physics.add.overlap(player, guard2, hitGuard, null, this);

  var guard3 = this.physics.add.sprite(200, CENTER_VERTICAL - 250, "guard");
  guard3.setScale(3);
  this.physics.add.overlap(player, guard3, hitGuard, null, this);

  var guard4 = this.physics.add.sprite(200, CENTER_VERTICAL + 250, "guard");
  guard4.setScale(3);
  this.physics.add.overlap(player, guard4, hitGuard, null, this);

  guards = this.physics.add.group();

  //  stops player from going through platforms
  /*this.physics.add.collider(player, wallsH, function () {
    player.y = lastPosy;
    player.x = lastPosx;
  });
  this.physics.add.collider(player, wallsV, function () {
    player.y = lastPosy;
    player.x = lastPosx;
  });*/
  this.physics.add.collider(guards, wallsH);

  //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
  this.physics.add.overlap(player, jewel, collectJewel, null, this);

  //this.physics.add.collider(player, guards, hitGuard, null, this);

  //Collision event
}

function update() {
  if (gameOver) {
    return;
  }

  //Player movement

  var invalidMove = false;

  if (pauseKeyboard == false) {
    if (this.input.keyboard.checkDown(cursors.left, moveTimer)) {
      //LEFT KEY
      if (checkBounds("left") == false) {
        player.x -= tileSize / 2;
      }
    } else if (this.input.keyboard.checkDown(cursors.right, moveTimer)) {
      if (checkBounds("right") == false) {
        player.x += tileSize / 2;
      }
    }
    if (this.input.keyboard.checkDown(cursors.up, moveTimer)) {
      if (checkBounds("up") == false) {
        player.y -= tileSize / 2;
      }
    } else if (this.input.keyboard.checkDown(cursors.down, moveTimer)) {
      if (checkBounds("down") == false) {
        player.y += tileSize / 2;
      }
    }
  }

  function checkBounds(dir) {
    wrongMove = false;
    //creates variables for each side of the player
    playerCenterX = player.x + (player.width * playerScale) / 2;
    playerCenterY = player.y + (player.height * playerScale) / 2;

    if (dir == "up") {
      playerCenterY -= tileSize / 2;
    } else if (dir == "down") {
      playerCenterY += tileSize / 2;
    } else if (dir == "left") {
      playerCenterX -= tileSize / 2;
    } else if (dir == "right") {
      playerCenterX += tileSize / 2;
    }

    wallsH.getChildren().forEach(function (wall) {
      //creates variables for each side of the walls for better readability
      var wallBoundsTop = wall.y;
      var wallBoundsBottom = wall.y + wall.height;
      var wallBoundsLeft = wall.x - TILE_WIDTH;
      var wallBoundsRight = wall.x + wall.width - TILE_WIDTH;

      if (
        playerCenterX <= wallBoundsRight &&
        playerCenterX >= wallBoundsLeft &&
        playerCenterY <= wallBoundsBottom &&
        playerCenterY >= wallBoundsTop
      ) {
        wrongMove = true;
      }
    });
    wallsV.getChildren().forEach(function (wall) {
      //creates variables for each side of the walls for better readability
      var wallBoundsTop = wall.y - TILE_HEIGHT;
      var wallBoundsBottom = wall.y + wall.height - TILE_HEIGHT;
      var wallBoundsLeft = wall.x;
      var wallBoundsRight = wall.x + wall.width;

      if (
        playerCenterX <= wallBoundsRight &&
        playerCenterX >= wallBoundsLeft &&
        playerCenterY <= wallBoundsBottom &&
        playerCenterY >= wallBoundsTop
      ) {
        wrongMove = true;
      }
    });
    return wrongMove;
  }

  function collectJewel(player, jewel) {
    jewel.disableBody(true, true);

    //TODO RUN GAMEOVER CODE

    avoidGuard = this.physics.add.staticGroup();
    avoidGuard.create(400, CENTER_VERTICAL + 200, "AvoidGuards").setScale(0.75);
    /*spawn guard code*/
    var guard = guards.create(100, 300, "guard").setScale(3);
    guard = guards.create(700, 300, "guard").setScale(3);
    guard.setBounce(1);
    guard.setCollideWorldBounds(true);
    // guard.setVelocity(Phaser.Math.Between(-200, 200), 20);
    guard.allowGravity = false;

    this.physics.add.overlap(player, guard, hitGuard, null, this);
  }

  function hitGuard(player, guard, avoidGuard) {
    this.physics.pause();

    player.setTint(0xff0000);

    gameOver = this.physics.add.staticGroup();
    gameOver.create(380, CENTER_VERTICAL + 200, "GameOver").setScale(1.75);

    player.anims.play("turn");
    gameOver = true;
  }

  function checkNextMove(dir) {
    var xFlag = false;
    var yFlag = false;
    wallsHXValues = wallsH.getChildren().forEach(function (sprite) {
      if (dir == "right") {
      } else if (dir == "left") {
      }
    });
  }
}

function createAnims() {
  // Robber animations
  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("dude", { start: 2, end: 2 }),
    frameRate: 15,
    repeat: 1,
  });

  this.anims.create({
    key: "turn",
    frames: [{ key: "dude", frame: 0 }],
    frameRate: 20,
  });

  this.anims.create({
    key: "back",
    frames: [{ key: "dude", frame: 9 }],
    frameRate: 20,
  });

  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("dude", { start: 6, end: 6 }),
    frameRate: 15,
    repeat: 1,
  });

  // Guard animations
  this.anims.create({
    key: "front",
    frames: [{ key: "guard", frame: 0 }],
    frameRate: 20,
  });

  this.anims.create({
    key: "back",
    frames: [{ key: "guard", frame: 1 }],
    frameRate: 20,
  });

  this.anims.create({
    key: "walk",
    frames: this.anims.generateFrameNumbers("guard", { start: 2, end: 5 }),
    frameRate: 15,
    repeat: 1,
  });
}

function generateBackground() {
  let whiteTile = false;
  // Number of tiles from and including the middle row of tiles
  const bottom = CENTER_VERTICAL + 8 * TILE_HEIGHT;
  const tileScale = 0.99;
  const tileAdjustment = 0 * tileScale;

  // Loop through the columns
  for (
    let hl = CENTER_VERTICAL, hu = CENTER_VERTICAL;
    hl < bottom;
    hl += TILE_HEIGHT + tileAdjustment, hu -= TILE_HEIGHT + tileAdjustment
  ) {
    // Loop through the row
    for (
      let w = TILE_WIDTH / 2;
      w < config.width;
      w += TILE_WIDTH + tileAdjustment
    ) {
      // Is the first row being generated?
      if (hl === CENTER_VERTICAL) {
        // White or blue tile?
        if (whiteTile) {
          this.add.image(w, hl, "whiteT").setScale(tileScale);
        } else {
          this.add.image(w, hl, "blueT").setScale(tileScale);
        }
        // Switch colors
        whiteTile = !whiteTile;
      } else {
        // White or blue tile?
        if (whiteTile) {
          this.add.image(w, hu, "whiteT").setScale(tileScale);
          this.add.image(w, hl, "whiteT").setScale(tileScale);
        } else {
          this.add.image(w, hu, "blueT").setScale(tileScale);
          this.add.image(w, hl, "blueT").setScale(tileScale);
        }
        // Switch colors
        whiteTile = !whiteTile;
      }
    }
    // Alternate orders for row
    whiteTile = !whiteTile;
  }
}
