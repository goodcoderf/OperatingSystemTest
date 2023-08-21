/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "default wallpaper",
        "./Stage/costumes/default wallpaper.svg",
        { x: 302.55255255255247, y: 248.49849849849846 }
      ),
      new Costume("desert wallpaper", "./Stage/costumes/desert wallpaper.svg", {
        x: 314.56456456456453,
        y: 205.70570570570567
      }),
      new Costume("Canyon", "./Stage/costumes/Canyon.png", { x: 480, y: 360 })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];
  }
}
