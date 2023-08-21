/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BrowserWindow extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("NoInternet", "./BrowserWindow/costumes/NoInternet.png", {
        x: 361,
        y: 239
      })
    ];

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
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveBrowser() {
    this.visible = true;
  }

  *whenIReceiveCloseWindow() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("close window");
  }
}
