import Phaser from "phaser";
import FpsText from "../objects/fpsText";

export default class Scene2 extends Phaser.Scene {
    fpsText: FpsText;
    happyNumberText: Phaser.GameObjects.Text;
    public happyNumber2!: number;

    constructor() {
        super({ key: "Scene2" });
    }
    //To recieve data from mainScene
    init(data: { happyNum: number }): void {
        this.happyNumber2 = data.happyNum;
    }
    create() {
        //Images
        this.fpsText = new FpsText(this);
        this.add.image(400, 300, "sky");
        const message = `Phaser v${Phaser.VERSION}`;
        this.add
            .text(this.cameras.main.width - 15, 15, message, {
                color: "#000000",
                fontSize: "24px",
            })
            .setOrigin(1, 0);
        this.add.image(100, 450, "dude").setScale(3.0);

        //Make button to click to update Happy Count
        this.happyNumberText = this.add.text(100, 200, "", { color: "#0f0" });
        this.add
            .text(100, 100, "Click me if happy!", { color: "#0f0" })
            .setInteractive()
            .on("pointerdown", () => {
                this.updateHappyNumberText((this.happyNumber2 += 1));
            });

        this.updateHappyNumberText(this.happyNumber2);

        //Make button to switch to next scene, Scene3
        const clickButton = this.add.text(100, 300, "Click for next scene", {
            color: " #0f0",
        });
        clickButton.setInteractive();
        clickButton.on("pointerdown", () =>
            this.scene.start("Scene3", {
                happyNum: this.happyNumber2,
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
