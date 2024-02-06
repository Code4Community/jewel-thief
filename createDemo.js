arr0 = getLevel(0);

function createDemo() {

  document.getElementById("nextLevel").addEventListener("click", (event) => {
    switchLevel("2");
  });

  document.getElementById("respawn").addEventListener("click", (event) => {
    gameOver = false;
    this.scene.restart();
  });

  document.getElementById('level-select').value = '1';


  avoidGuard = this.physics.add.staticGroup();
  avoidGuard.create(400, CENTER_VERTICAL + 200, "AvoidGuards").setScale(0.75);


  array_levDemo = getLevel(0);
  generateCheckerboard(this, 8); // Generate background
  setup(this);

  // GENERATE WALLS ---------------------------------------------------------------------
  // Create the horizontal walls and the vertical walls
  wall = this.physics.add.staticGroup();

  //Sets framework for multiple guards, adds them to an array to be used in collisions
  var guards = []
  guardIndex = 0;

  for (i = 0; i < arr0.length; i++){
    for(j=0; j < arr0[i].length; j++){
      if (arr0[i][j] ==1){
        wall.create(j*40+20, i*40+20, "wall");

      }
      //adding robber to that position
      else if(arr0[i][j]==2){
        player = this.physics.add.sprite(j*40+20,i*40+8, "dude").setScale(playerScale);
        playerRow = i;
        playerCol = j;
      }
      //adding guard to that position
      else if(arr0[i][j]==3){
        //adds the guards to the array of guards
        guards[guardIndex] = this.physics.add.sprite(j*40+20,i*40+20, "guard").setScale(guardScale);
        guardIndex++;
      }
      //adding gem to that position
      else if(arr0[i][j]==4){
        jewel = this.physics.add.sprite(j*40+20,i*40+20, "jewel").setScale(0.125);
      }
    }
  }

  avoidGuard = this.physics.add.staticGroup();
  avoidGuard.create(400, CENTER_VERTICAL + 175, "AvoidGuards").setScale(1);

  //  Input Events
  cursors = this.input.keyboard.createCursorKeys();

  this.physics.add.collider(guards, wall);

  //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
  this.physics.add.overlap(player, jewel, collectJewel, null, this);
  
  // this.hitGuard = hitGuard.bind(this);

  logo = this.add.image(730, 50, 'jewelg');

}