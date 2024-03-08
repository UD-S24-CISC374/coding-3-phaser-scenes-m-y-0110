import Phaser from "phaser";
import FpsText from "../objects/fpsText";

export default class Scene4 extends Phaser.Scene {
    fpsText: FpsText;
    happyNumberText: Phaser.GameObjects.Text;
    public happyNumber4!: number;

    constructor() {
        super({ key: "Scene4" });
    }
    init(data: { happyNum: number }): void {
        this.happyNumber4 = data.happyNum;
    }

    create() {
        this.fpsText = new FpsText(this);
        this.add.image(400, 300, "sky");
        this.add.image(400, 300, "bomb").setScale(2.0);

        const message = `Phaser v${Phaser.VERSION}`;
        this.add
            .text(this.cameras.main.width - 15, 15, message, {
                color: "#000000",
                fontSize: "24px",
            })
            .setOrigin(1, 0);
        //No button needed to switch to next scene since this is the last scene
        //Make Happy Number
        this.happyNumberText = this.add.text(100, 200, "", { color: "#0f0" });
        this.add
            .text(100, 100, "Click me if happy!", { color: "#0f0" })
            .setInteractive()
            .on("pointerdown", () => {
                this.updateHappyNumberText((this.happyNumber4 += 1));
            });

        this.updateHappyNumberText(this.happyNumber4);
        this.add.text(100, 300, "The End!"),
            {
                color: " #0f0",
            };
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
