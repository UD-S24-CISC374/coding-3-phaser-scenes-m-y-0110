import Phaser from "phaser";
import FpsText from "../objects/fpsText";

export default class Scene3 extends Phaser.Scene {
    fpsText: FpsText;
    happyNumberText: Phaser.GameObjects.Text;
    public happyNumber3!: number;

    constructor() {
        super({ key: "Scene3" });
    }
    init(data: { happyNum: number }): void {
        this.happyNumber3 = data.happyNum;
    }
    create() {
        this.fpsText = new FpsText(this);
        this.add.image(400, 300, "sky");
        this.add.image(400, 300, "star").setScale(3.0);

        const message = `Phaser v${Phaser.VERSION}`;
        this.add
            .text(this.cameras.main.width - 15, 15, message, {
                color: "#000000",
                fontSize: "24px",
            })
            .setOrigin(1, 0);
        //Make button to switch to next scene, Scene3
        const clickButton = this.add.text(100, 300, "Click for next scene", {
            color: " #0f0",
        });
        clickButton.setInteractive();
        //Make Happy Number
        this.happyNumberText = this.add.text(100, 200, "", { color: "#0f0" });
        this.add
            .text(100, 100, "Click me if happy!", { color: "#0f0" })
            .setInteractive()
            .on("pointerdown", () => {
                this.updateHappyNumberText((this.happyNumber3 += 1));
            });

        this.updateHappyNumberText(this.happyNumber3);
        clickButton.on("pointerdown", () =>
            this.scene.start("Scene4", {
                happyNum: this.happyNumber3,
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
