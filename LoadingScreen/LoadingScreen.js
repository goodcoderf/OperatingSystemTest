/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class LoadingScreen extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Waiting For Input",
        "./LoadingScreen/costumes/Waiting For Input.png",
        { x: 480, y: 360 }
      ),
      new Costume("Loading", "./LoadingScreen/costumes/Loading.png", {
        x: 480,
        y: 360
      }),
      new Costume("Loading2", "./LoadingScreen/costumes/Loading2.png", {
        x: 480,
        y: 360
      }),
      new Costume("Loading3", "./LoadingScreen/costumes/Loading3.png", {
        x: 480,
        y: 360
      }),
      new Costume("Loading4", "./LoadingScreen/costumes/Loading4.png", {
        x: 480,
        y: 360
      }),
      new Costume("Loading5", "./LoadingScreen/costumes/Loading5.png", {
        x: 480,
        y: 360
      }),
      new Costume("Loading6", "./LoadingScreen/costumes/Loading6.png", {
        x: 480,
        y: 360
      }),
      new Costume("Loading7", "./LoadingScreen/costumes/Loading7.png", {
        x: 480,
        y: 360
      }),
      new Costume("Loading8", "./LoadingScreen/costumes/Loading8.png", {
        x: 480,
        y: 360
      }),
      new Costume("Loading9", "./LoadingScreen/costumes/Loading9.png", {
        x: 480,
        y: 360
      }),
      new Costume("Loading10", "./LoadingScreen/costumes/Loading10.png", {
        x: 480,
        y: 360
      }),
      new Costume("Loading11", "./LoadingScreen/costumes/Loading11.png", {
        x: 480,
        y: 360
      }),
      new Costume("Loading12", "./LoadingScreen/costumes/Loading12.png", {
        x: 480,
        y: 360
      }),
      new Costume("Loading13", "./LoadingScreen/costumes/Loading13.png", {
        x: 480,
        y: 360
      }),
      new Costume("Loading14", "./LoadingScreen/costumes/Loading14.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [new Sound("Meow", "./LoadingScreen/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.moveAhead();
    this.costume = "Waiting For Input";
    while (!this.keyPressed("any")) {
      yield;
    }
    this.costume = "Loading";
    for (let i = 0; i < 12; i++) {
      this.costumeNumber++;
      yield* this.wait(0.1);
      yield;
    }
    yield* this.wait(1);
    this.costume = "Loading14";
    yield* this.wait(3);
    this.visible = false;
  }
}
