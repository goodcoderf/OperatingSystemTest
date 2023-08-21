/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GalleryCanyon extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("desert", "./GalleryCanyon/costumes/desert.svg", {
        x: 240,
        y: 180
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
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.costume = "default wallpaper";
    this.visible = false;
  }

  *whenIReceiveCloseWindow() {
    this.visible = false;
  }

  *whenIReceiveGallery() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.stage.costume = "Canyon";
  }
}
