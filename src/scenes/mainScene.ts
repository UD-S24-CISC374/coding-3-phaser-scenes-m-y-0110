import Phaser from "phaser";
import PhaserLogo from "../objects/phaserLogo";
import FpsText from "../objects/fpsText";

export default class MainScene extends Phaser.Scene {
    fpsText: FpsText;
    happyNumberText: Phaser.GameObjects.Text;
    public happyNumber1: number = 0;

    constructor() {
        super({ key: "MainScene" });
    }

    create() {
        //Images
        new PhaserLogo(this, this.cameras.main.width / 2, 0);
        this.fpsText = new FpsText(this);
        //this.add.image(500, 400, "sky");

        const message = `Phaser v${Phaser.VERSION}`;
        this.add
            .text(this.cameras.main.width - 15, 15, message, {
                color: "#000000",
                fontSize: "24px",
            })
            .setOrigin(1, 0);

        //Make button to click to update Happy Count
        this.happyNumberText = this.add.text(100, 200, "", { color: "#0f0" });
        this.add
            .text(100, 100, "Click me if happy!", { color: "#0f0" })
            .setInteractive()
            .on("pointerdown", () => {
                this.updateHappyNumberText((this.happyNumber1 += 1));
            });

        this.updateHappyNumberText(this.happyNumber1);

        //Make button to switch to next scene, Scene2
        const clickButton = this.add.text(100, 300, "Click for next scene", {
            color: "#0f0",
        });
        clickButton.setInteractive();
        clickButton.on("pointerdown", () =>
            this.scene.start("Scene2", {
                happyNum: this.happyNumber1,
            })
        );
    }

    updateHappyNumberText(happyNumber: number) {
        this.happyNumberText.setText(
            `You have been happy ${happyNumber} times.`
        );
    }

    update() {
        this.fpsText.update();
    }
}
