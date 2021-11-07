var config = {
    type: Phaser.AUTO,
    width: 504,
    height: 600,
    parent: 'container',
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 400 },
        debug: false,
      },
    },
    scene: {
      preload: preload,
      create: create,
      update: update,
    },
  };

  var segundos = 10;
  var posicion = 0;
  var bolatiempo = 5;
  var piedratiempo = 5;
  var final = 0;
  var teclaenter = 0;
  var cnubefinal = 0;

  var game = new Phaser.Game(config);

  function preload() {
    this.load.image("p1", "./img/portada1.png");
    this.load.image("pfinal", "./img/fin.png");
    this.load.image("p2", "./img/portada2.png");
    this.load.image("bola", "./img/bola.png");
    this.load.image("piedra", "./img/piedra.png");
    this.load.image("fondo", "./img/fondo2.png");
    this.load.image("nube", "./img/nube.png");
    this.load.image("nube2", "./img/nubemala.png");
    this.load.image("platform", "./img/platform.png");
    this.load.image("ground", "./img/suelo2.png");
    this.load.spritesheet("goku", "./img/ste.png", {
      frameWidth: 34,
      frameHeight: 44,
    });
    
    this.load.bitmapFont("myfont", "./img/font.png", "font.xml");
    this.load.audio("bolasound", "./sound/bola.mp3");
    this.load.audio("piedrasound", "./sound/piedra.mp3");
    this.load.audio("saltosound", "./sound/saltosonido.mp3");
    this.load.audio("song", "./sound/song.mp3");
    this.load.audio("perder", "./sound/perder.mp3");
    this.load.audio("svictoria", "./sound/victoria.mp3");
    this.load.image("victoria", "./img/victoria.png");


    this.load.image("menu-bg", "./img/menu.png")
  }

  function create() {

    //var playBtn = this.add.bitmapText(200, 200, "myfont", { fontSize: "32px" }).setScrollFactor(0).setInteractive();
    //playBtn.setText("Jugar", { fontFamily: "font1" }).setDepth(99)
    //this.add.image(252, 1650, "menu-bg").setDepth(90);

    //playBtn.on("pointerdown", (event) => {
      //console.log(event);
    //})
    


    // no me toques

    this.add.image(252, 474, "fondo");

    this.cameras.main.setBounds(0, 0, 504, 1950);

    this.physics.world.setBounds(0, 0, 504, 1950);
    // no tocar

    bolasonido = this.sound.add("bolasound", { volume: 0.02 });
    piedrasonido = this.sound.add("piedrasound", { volume: 0.02 });
    cancion = this.sound.add("song", { volume: 0.005 });
    saltosonido = this.sound.add("saltosound", { volume: 0.009 });
    perdersonido = this.sound.add("perder", { volume: 0.005 });
    cancionv = this.sound.add("svictoria", { volume: 0.001 });
    cancion.play();

    //bola 1
    bola1 = this.physics.add.image(372, 1830, "bola")
    bola2 = this.physics.add.image(436, 1830, "bola");
    bola3 = this.physics.add.image(447, 1550, "bola");
    bola4 = this.physics.add.image(336, 400, "bola");
    bola4.body.allowGravity = false;
    bola5 = this.physics.add.image(25, 320, "bola");


    //piedra1
    piedra1 = this.physics.add.image(90, 1270, "piedra");
    piedra1.body.allowGravity = false;

    //piedra2
    piedra2 = this.physics.add.image(400, 560, "piedra");
    piedra2.body.allowGravity = false;

    //piedra3
    piedra3 = this.physics.add.image(450, 560, "piedra");
    piedra3.body.allowGravity = false;

    // 1a nube
    movingPlatform = this.physics.add.image(60, 1750, "nube");

    movingPlatform.setImmovable(true);

    movingPlatform.body.allowGravity = false;

    movingPlatform.setVelocityX(50);

    // 2a nube
    movingPlatform2 = this.physics.add.image(460, 1600, "nube");

    movingPlatform2.setImmovable(true);

    movingPlatform2.body.allowGravity = false;

    movingPlatform2.setVelocityX(-50);

    // 3a nube
    movingPlatform3 = this.physics.add.image(60, 1450, "nube");

    movingPlatform3.setImmovable(true);

    movingPlatform3.body.allowGravity = false;

    movingPlatform3.setVelocityX(-50);

    // 4a nube (NEGRA)
    movingPlatform4 = this.physics.add.image(300, 1200, "nube2");

    movingPlatform4.setImmovable(true);

    movingPlatform4.body.allowGravity = false;

    movingPlatform4.setVelocityX(-50);

    // 5a nube
    movingPlatform5 = this.physics.add.image(60, 1050, "nube");

    movingPlatform5.setImmovable(true);

    movingPlatform5.body.allowGravity = false;

    movingPlatform5.setVelocityX(-50);

    // 6a nube (NEGRA)
    movingPlatform6 = this.physics.add.image(300, 900, "nube2");

    movingPlatform6.setImmovable(true);

    movingPlatform6.body.allowGravity = false;

    movingPlatform6.setVelocityX(-50);

    // 7a nube (NEGRA)
    movingPlatform7 = this.physics.add.image(50, 650, "nube2");

    movingPlatform7.setImmovable(true);

    movingPlatform7.body.allowGravity = false;

    movingPlatform7.setVelocityX(-50);

    // 8a nube (NEGRA)
    movingPlatform8 = this.physics.add.image(300, 500, "nube2");

    movingPlatform8.setImmovable(true);

    movingPlatform8.body.allowGravity = false;

    movingPlatform8.setVelocityX(-50);

    // plataformas normales
    platforms = this.physics.add.staticGroup();
    platforms.create(252, 1950, "ground");
    platforms.create(420, 1860, "platform");
    platforms.create(50, 1300, "platform");
    platforms.create(500, 1150, "platform");
    platforms.create(0, 750, "platform");
    platforms.create(0, 350, "platform");
    nubefinal = this.physics.add.image(250, 250, "nube");
    nubefinal.body.allowGravity = false;
    nubefinal.setImmovable(true);

    player = this.physics.add.sprite(252, 1910, "goku").setScale(1.5);

    player.setCollideWorldBounds(true);

    // animaciones goku
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("goku", {
        start: 9,
        end: 11,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turnl",
      frames: this.anims.generateFrameNumbers("goku", {
        start: 3,
        end: 5,
      }),
      frameRate: 7,
      repeat: -1,
    });

    this.anims.create({
      key: "turnr",
      frames: this.anims.generateFrameNumbers("goku", {
        start: 0,
        end: 2,
      }),
      frameRate: 7,
      repeat: -1,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("goku", {
        start: 6,
        end: 8,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "upr",
      frames: this.anims.generateFrameNumbers("goku", {
        start: 12,
        end: 14,
      }),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: "upl",
      frames: this.anims.generateFrameNumbers("goku", {
        start: 15,
        end: 17,
      }),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: "downl",
      frames: this.anims.generateFrameNumbers("goku", {
        start: 21,
        end: 23,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "downr",
      frames: this.anims.generateFrameNumbers("goku", {
        start: 18,
        end: 20,
      }),
      frameRate: 10,
      repeat: -1,
    });
    // animaciones goku

    player.setCollideWorldBounds(true);
    this.cameras.main.startFollow(player, true, 0.05, 0.05);
    this.physics.add.collider(player, platforms);
    cursors = this.input.keyboard.createCursorKeys();
    this.input.keyboard.on("keyup", function (event) {
      if (event.keyCode === 13) {
        teclaenter = 1;
      }
    });

    //plataformas colisiones
    this.physics.add.collider(player, movingPlatform);
    this.physics.add.collider(
      player,
      movingPlatform4,
      touchnube1,
      null,
      this
    );
    this.physics.add.collider(
      player,
      movingPlatform6,
      touchnube2,
      null,
      this
    );
    this.physics.add.collider(
      player,
      movingPlatform7,
      touchnube3,
      null,
      this
    );
    this.physics.add.collider(
      player,
      movingPlatform8,
      touchnube4,
      null,
      this
    );
    this.physics.add.collider(player, movingPlatform2);
    this.physics.add.collider(player, movingPlatform3);
    this.physics.add.collider(player, movingPlatform5);

    pantini = this.add.image(252, 1650, "p2");
    pantini.depth = 25;
    pantini2 = this.add.image(252, 1650, "p1");
    pantini2.depth = 26;

    //BOLA 1
    this.physics.add.collider(bola1, platforms);
    this.physics.add.overlap(player, bola1, tbola, null, this);

    //bola2
    this.physics.add.collider(bola2, platforms);
    this.physics.add.overlap(player, bola2, tbola2, null, this);

    //bola3
    this.physics.add.collider(bola3, movingPlatform2);
    this.physics.add.overlap(player, bola3, tbola3, null, this);

    //bola4
    this.physics.add.overlap(player, bola4, tbola4, null, this);

    //bola5
    this.physics.add.collider(bola5, platforms);
    this.physics.add.overlap(player, bola5, tbola5, null, this);

    //PIEDRAs
    this.physics.add.collider(piedra1, platforms);
    this.physics.add.overlap(player, piedra1, tpiedra, null, this);

    this.physics.add.overlap(player, piedra2, tpiedra2, null, this);
    this.physics.add.overlap(player, piedra3, tpiedra3, null, this);

    //prueba = this.add.text(252, 200, 'hola3', { fontSize: '32px', fill: '#ff0000' }).setScrollFactor(0);
    //prueba2 = this.add.text(252, 400, 'hola3', { fontSize: '32px', fill: '#ff0000' }).setScrollFactor(0);

    i1 = this.time.addEvent({
      delay: 500,
      callback: inicio1,
      callbackScope: this,
      loop: true,
    });
    i2 = this.time.addEvent({
      delay: 1000,
      callback: inicio2,
      callbackScope: this,
      loop: true,
    });

    this.physics.add.collider(player, nubefinal, touchnubef, null, this);

    //textotiempo = this.add.text(0, 0, 'hola3', { fontSize: '32px', fill: '#ff0000' }).setScrollFactor(0);
    textotiempo = this.add
      .bitmapText(3, 3, "myfont", { fontSize: "32px" })
      .setScrollFactor(0);
  }

  function update() {
    //cancion = this.sound.add('song');
    //cancion.play();
    textotiempo.setText("Temps: " + segundos, { fontFamily: "font1" });

    //prueba.setText('x ' + player.x);
    //prueba2.setText('y ' + player.y);

    if (segundos === 0 && final === 0) {
      if (player.y <= 1650 && player.y >= 300) {
        this.add.image(252, player.y, "pfinal").setScale(1.1);
      } else if (player.y <= 300) {
        this.add.image(252, 300, "pfinal").setScale(1.1);
      } else {
        this.add.image(252, 1650, "pfinal").setScale(1.1);
      }
      cancion.stop();
      perdersonido.play();
      this.cameras.main.fade(5000, 0, 0, 0);
      this.cameras.main.shake(250, 0.01);
      this.physics.pause();
      final = 1;
    }

    if (teclaenter === 1 && pantini != null) {
      pantini.destroy();
      pantini2.destroy();
      pantini = null;
      pantini2 = null;
      player.setPosition(252, 1910);
      if (cnubefinal === 0)
        timedEvent2 = this.time.addEvent({
          delay: 1000,
          callback: cuentatras,
          callbackScope: this,
          loop: true,
        });
    }

    // controles personaje
    if (cursors.left.isDown) {
      player.setVelocityX(-160);
      posicion = 0;
      player.anims.play("left", true);
    } else if (cursors.right.isDown) {
      player.setVelocityX(160);
      posicion = 1;
      player.anims.play("right", true);
    } else {
      if (posicion === 0) {
        player.setVelocityX(0);
        player.anims.play("turnl", true);
      }
      if (posicion === 1) {
        player.setVelocityX(0);
        player.anims.play("turnr", true);
      }
    }

    if (cursors.up.isDown && player.body.touching.down) {
      if (teclaenter === 1 && cnubefinal === 0) {
        saltosonido.play();
        player.setVelocityY(-360);
      }
      //saltosonido.play();
      //player.setVelocityY(-360);
    }

    if (!player.body.touching.down) {
      if (player.body.velocity.y <= 0) {
        if (posicion === 0) {
          //saltosonido.play();
          player.anims.play("upl", true);
        }

        if (posicion === 1) {
          //saltosonido.play();
          player.anims.play("upr", true);
        }
      } else {
        if (posicion === 0) {
          player.anims.play("downl", true);
        }

        if (posicion === 1) {
          player.anims.play("downr", true);
        }
      }
    }
    // controles personaje

    // nubes
    if (movingPlatform.x >= 320) {
      movingPlatform.setVelocityX(-50);
    } else if (movingPlatform.x <= 60) {
      movingPlatform.setVelocityX(50);
    }

    if (movingPlatform2.x >= 460) {
      movingPlatform2.setVelocityX(-50);
    } else if (movingPlatform2.x <= 60) {
      movingPlatform2.setVelocityX(50);
    }

    if (movingPlatform3.x >= 460) {
      movingPlatform3.setVelocityX(-50);
    } else if (movingPlatform3.x <= 60) {
      movingPlatform3.setVelocityX(50);
    }

    if (movingPlatform4.x >= 350) {
      movingPlatform4.setVelocityX(-50);
    } else if (movingPlatform4.x <= 170) {
      movingPlatform4.setVelocityX(50);
    }

    if (movingPlatform5.x >= 390) {
      movingPlatform5.setVelocityX(-50);
    } else if (movingPlatform5.x <= 100) {
      movingPlatform5.setVelocityX(60);
    }

    if (movingPlatform6.x >= 460) {
      movingPlatform6.setVelocityX(-50);
    } else if (movingPlatform6.x <= 60) {
      movingPlatform6.setVelocityX(50);
    }

    if (movingPlatform7.x >= 460) {
      movingPlatform7.setVelocityX(-50);
    } else if (movingPlatform7.x <= 60) {
      movingPlatform7.setVelocityX(50);
    }

    if (movingPlatform8.x >= 460) {
      movingPlatform8.setVelocityX(-50);
    } else if (movingPlatform8.x <= 60) {
      movingPlatform8.setVelocityX(50);
    }
  }

  function touchnube1(player, movingPlatform4) {
    if (player.y <= 1155) {
      timedTimer = this.time.delayedCall(3000, disapear, [], this);
    }
  }

  function disapear() {
    movingPlatform4.disableBody(true, false);
  }

  function touchnube2(player, movingPlatform6) {
    if (player.y <= 855) {
      timedChof = this.time.delayedCall(3000, plof, [], this);
    }
  }

  function plof() {
    movingPlatform6.disableBody(true, false);
  }

  function touchnube3(player, movingPlatform7) {
    if (player.y <= 705) {
      timedBoom = this.time.delayedCall(3000, gone, [], this);
    }
  }

  function gone() {
    movingPlatform7.disableBody(true, false);
  }

  function touchnube4(player, movingPlatform8) {
    if (player.y <= 455) {
      timedBaam = this.time.delayedCall(3000, klak, [], this);
    }
  }

  function klak() {
    movingPlatform8.disableBody(true, false);
  }

  function cuentatras() {
    if (segundos > 0) {
      if (cnubefinal === 0) {
        segundos -= 1;
      }
    }
  }

  function inicio1() {
    if (pantini != null) {
      pantini.depth = 27;
    }
    //pantini.depth = 27
  }

  function inicio2() {
    if (pantini != null) {
      pantini.depth = 25;
    }
  }

  function tbola() {
    bolasonido.play();
    bola1.disableBody(true, true);
    segundos += bolatiempo;
  }

  function tpiedra() {
    if (segundos > 5) {
      piedrasonido.play();
      piedra1.disableBody(true, true);
      segundos -= piedratiempo;
    } else {
      piedrasonido.play();
      piedra1.disableBody(true, true);
      segundos -= segundos;
    }
    //piedrasonido.play();
    //piedra1.disableBody(true, true);
    //segundos -= piedratiempo;
  }

  function tpiedra2() {
    piedrasonido.play();
    piedra2.disableBody(true, true);
    segundos -= piedratiempo;
  }

  function tpiedra3() {
    piedrasonido.play();
    piedra3.disableBody(true, true);
    segundos -= piedratiempo;
  }

  function tbola2() {
    bolasonido.play();
    bola2.disableBody(true, true);
    segundos += bolatiempo;
  }

  function tbola3() {
    bolasonido.play();
    bola3.disableBody(true, true);
    segundos += bolatiempo;
  }

  function tbola4() {
    bolasonido.play();
    bola4.disableBody(true, true);
    segundos += bolatiempo;
  }

  function tbola5() {
    bolasonido.play();
    bola5.disableBody(true, true);
    segundos += bolatiempo;
  }

  function touchnubef() {
    if (player.y <= 195) {
      cancion.stop();
      cnubefinal = 1;
      this.add.image(252, 300, "victoria").setScale(1.01);
      this.physics.pause();
    }
  }
