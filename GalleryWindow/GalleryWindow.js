/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GalleryWindow extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./GalleryWindow/costumes/costume1.png", {
        x: 361,
        y: 239
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "close window" },
        this.whenIReceiveCloseWindow
      ),
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

  *whenIReceiveCloseWindow() {
    this.visible = false;
  }

  *whenIReceiveGallery() {
    this.visible = true;
  }
}
