class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
        this.speed = 3;
    }

    update() {
        this.x -= this.speed;

        if(this.x <= 0 - this.width) {
            this.x = config.width;
        }
    }
}