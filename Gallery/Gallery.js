/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Gallery extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Unhovered", "./Gallery/costumes/Unhovered.png", {
        x: 32,
        y: 32
      }),
      new Costume("Hovered", "./Gallery/costumes/Hovered.png", { x: 36, y: 56 })
    ];

    this.sounds = [new Sound("click", "./Gallery/sounds/click.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching("mouse")) {
        this.costume = "Hovered";
      } else {
        this.costume = "Unhovered";
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    yield* this.startSound("click");
    this.broadcast("Gallery");
  }
}
