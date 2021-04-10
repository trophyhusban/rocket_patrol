class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        console.log("got the rocket constructor");
        // add object to existing scene
        scene.add.existing(this);
    }
}