/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class X extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [new Costume("X", "./X/costumes/X.png", { x: 24, y: 24 })];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Browser" },
        this.whenIReceiveBrowser
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "close window" },
        this.whenIReceiveCloseWindow
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gallery" },
        this.whenIReceiveGallery
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveBrowser() {
    this.moveAhead();
    this.visible = true;
  }

  *whenIReceiveCloseWindow() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("close window");
  }

  *whenIReceiveGallery() {
    this.moveAhead();
    this.visible = true;
  }
}
