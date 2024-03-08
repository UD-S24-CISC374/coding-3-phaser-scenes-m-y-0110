import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        this.load.image("bomb", "assets/img/bomb.png");
        this.load.image("star", "assets/img/star.png");
        this.load.image("sky", "assets/sky.png");
        this.load.image("phaser-logo", "assets/img/phaser-logo.png");
        this.load.spritesheet("dude", "assets/img/dude.png", {
            frameWidth: 32,
            frameHeight: 48,
        });
    }

    create() {
        this.scene.start("MainScene");
    }
}
