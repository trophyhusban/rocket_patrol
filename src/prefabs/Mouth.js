class Mouth extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue, ai) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
        this.speed = game.settings.mouthSpeed;
        this.ai = ai;
        this.direction = -1;
        this.time = 0;
    }

    update() {
        if (this.ai == "back and forth") {
            this.x += this.speed * this.direction;
            if (this.x <= borderUISize) {
                this.direction = 1;
            }
            if (this.x + this.width >= config.width - borderUISize) {
                this.direction = -1;
            }
        } 
        if (this.ai == "sin") {
            this.time++;
            this.x = config.width/2 + this.width+ ((config.width-borderUISize*2-this.width)/2) * Math.sin(this.time/100);
            console.log("time: " + this.time);
            console.log("x: " + this.x);
        } 
    }

    reset() {
        this.x = config.width;
    }
}