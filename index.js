import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import LoadingScreen from "./LoadingScreen/LoadingScreen.js";
import Browser from "./Browser/Browser.js";
import BrowserWindow from "./BrowserWindow/BrowserWindow.js";
import X from "./X/X.js";
import Gallery from "./Gallery/Gallery.js";
import GalleryWindow from "./GalleryWindow/GalleryWindow.js";
import GalleryDesert from "./GalleryDesert/GalleryDesert.js";
import GalleryCanyon from "./GalleryCanyon/GalleryCanyon.js";

const stage = new Stage({ costumeNumber: 3 });

const sprites = {
  LoadingScreen: new LoadingScreen({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 15,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Browser: new Browser({
    x: -187,
    y: 97,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 200,
    visible: true,
    layerOrder: 2
  }),
  BrowserWindow: new BrowserWindow({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  X: new X({
    x: 155,
    y: 99,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 8
  }),
  Gallery: new Gallery({
    x: -186,
    y: 35,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  GalleryWindow: new GalleryWindow({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  GalleryDesert: new GalleryDesert({
    x: -111,
    y: -25,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 5
  }),
  GalleryCanyon: new GalleryCanyon({
    x: 5.543224446421192,
    y: -27.08706892832474,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 6
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
