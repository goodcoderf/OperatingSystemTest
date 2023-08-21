/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Browser extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Unhovered", "./Browser/costumes/Unhovered.png", {
        x: 14,
        y: 25
      }),
      new Costume("Hovered", "./Browser/costumes/Hovered.png", { x: 33, y: 59 })
    ];

    this.sounds = [new Sound("click", "./Browser/sounds/click.wav")];

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
    this.broadcast("Browser");
  }
}
