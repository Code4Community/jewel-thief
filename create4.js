arr4 = getLevel(4);

function create4() {
    generateCheckerboard(this, 8); // Generate background
    setup(this)

    document.getElementById("nextLevel").addEventListener("click", (event) => {
      switchLevel("6");
    });

    document.getElementById("respawn").addEventListener("click", (event) => {
      gameOver = false;
      this.scene.restart();
    });

    document.getElementById('level-select').value = '5';

    // GENERATE WALLS ---------------------------------------------------------------------
    // Create the horizontal walls and the vertical walls
    wall = this.physics.add.staticGroup();

    for(i=0; i<arr4.length; i++){
      for(j=0;j<arr4[i].length;j++){
        if(arr4[i][j]==1){
          wall.create(j*40+20,i*40+20, "wall");
         }
        //adding GUARD to that position
        else if(arr4[i][j]==3){
          guards = this.physics.add.sprite(j*40+20,i*40+8, "guard").setScale(guardScale);
          }
        //adding GEM to that position
        else if(arr4[i][j]==4){
          jewel = this.physics.add.sprite(j*40+20,i*40+20, "jewel").setScale(0.125);
          }
        }
       }  
     
       for(i=0; i<arr4.length; i++){
         for(j=0;j<arr4[i].length;j++){
          //adding ROBBER to that position
          if(arr4[i][j]==2){
            player = this.physics.add.sprite(j*40+20,i*40+8, "dude").setScale(playerScale);
            playerRow = i;
            playerCol = j;
           }
         }
       }

    //  Input Events
    cursors = this.input.keyboard.createCursorKeys();
  
    this.physics.add.collider(guards, wall);
  
    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    this.physics.add.overlap(player, jewel, collectJewel, null, this);

    logo = this.add.image(730, 50, 'jewelg');
  }