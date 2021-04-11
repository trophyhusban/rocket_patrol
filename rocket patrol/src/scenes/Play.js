class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images so they can be used
        this.load.image("rocket", "assets/rocket.png");
        this.load.image("spaceship", "assets/spaceship.png");
        this.load.image("starfield", "assets/starfield.png");
    }

    create() {

        // stars
        this.starfield = this.add.tileSprite(
            0, 
            0, 
            640, 
            480, 
            "starfield"
            ).setOrigin(0,0);

        // green UI background
        this.add.rectangle(
            0, 
            borderUISize + borderPadding, 
            game.config.width,
            borderUISize * 2,
            0x00FF00
            ).setOrigin(0,0);

        // white bars UI
        this.add.rectangle(
            0, 
            0, 
            game.config.width, 
            borderUISize, 
            0xFFFFFF
            ).setOrigin(0 ,0);
	    this.add.rectangle(
            0, 
            game.config.height - borderUISize, 
            game.config.width, 
            borderUISize, 
            0xFFFFFF
            ).setOrigin(0 ,0);
	    this.add.rectangle(
            0, 
            0, 
            borderUISize, 
            game.config.height, 
            0xFFFFFF
            ).setOrigin(0 ,0);
	    this.add.rectangle(
            game.config.width - borderUISize, 
            0, 
            borderUISize, 
            game.config.height, 
            0xFFFFFF
            ).setOrigin(0 ,0);

        this.p1Rocket = new Rocket(
            this, 
            game.config.width/2, 
            game.config.height - borderUISize*2, 
            "rocket"
            ).setOrigin(.5, 0);

        this.ship1 = new Spaceship(
            this, 
            config.width + borderUISize*6, 
            borderUISize*4, 
            "spaceship",
            0, 
            30);
        
        this.ship2 = new Spaceship(
            this, 
            config.width + borderUISize*3, 
            borderUISize*5, 
            "spaceship",
            0, 
            20);

        this.ship3 = new Spaceship(
            this, 
            config.width,
            borderUISize*6 + borderPadding*4, 
            "spaceship",
            0, 
            10); 


        // defining keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        this.starfield.tilePositionX -= 4;
        this.p1Rocket.update();
        this.ship1.update();
        this.ship2.update();
        this.ship3.update();
        
        if (this.checkCollision(this.p1Rocket, this.ship1)) {
            this.p1Rocket.reset();
            this.ship1.reset();
        }
        if (this.checkCollision(this.p1Rocket, this.ship2)) {
            this.p1Rocket.reset();
            this.ship2.reset();
        }
        if (this.checkCollision(this.p1Rocket, this.ship3)) {
            this.p1Rocket.reset();
            this.ship3.reset();
        }
    }

    checkCollision(rocket, ship) {
        // simple AABB checking
        if (rocket.x < ship.x + ship.width && 
            rocket.x + rocket.width > ship.x && 
            rocket.y < ship.y + ship.height &&
            rocket.height + rocket.y > ship. y) {
                return true;
        } else {
            return false;
        }
    }
}