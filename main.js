import { Player } from './player.js';
import { InputHandler } from './input.js';

window.addEventListener('load'.function() {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.player = new Player(this);
        this.input = new InputHandler();
    }
    update() {
        this.player.update(this.input.keys);
    }
    draw(context) {
        this.player.draw();
    }
});
    const game = new Game(canvas.width.canvas.height);
console.log(game);

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update();
    game.draw(ctx);
    requestAnimationFrame(animate);
}
animate();
});

//Scientist spritesheet
const Scientist = new Image();
playerImage.src = 'scientist_animations.png'
const spriteHeight = 500;
const spriteWidth = 400;

//Dino 1 spritesheet
const Dino1 = new Image();
Dino1.src = 'dino1_animations.png'
const spriteHeight = 400;
const spriteWidth = 600;

//Dino 2 spritesheet
const Dino2 = new Image();
Dino2.src = 'dino2_animations.png'
const spriteHeight = 400;
const spriteWidth = 600;

//Dino 3 spritesheet
const Dino3 = new Image();
Dino3.src = 'dino2_animations.png'
const spriteHeight = 700;
const spriteWidth = 600;

//Dino DNA spritesheet
const DNA = new Image();
DNA.src = 'DNA.png'
const spriteHeight = 700;
const spriteWidth = 200;

let gameFrame = 0;
const staggerFrames = 5;
const SpriteAnimation = [];
const animationScentist = [
    {
        name: 'idle',
        frames: ?;
    },
    {
        name: 'walk_right',
        frames: ?;
    },    {
        name: 'walk_left',
        frames: ?;
    }   
];
const animationDino1 = [
    {

    }
];
const animationDino2 = [
    {

    }
];
const animationDino3 = [
    {

    }
];
animationScentist.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j =0; j < state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations [playerState]. loc.length;
    let frameX = spriteWidth * position;
let frameY = spriteAnimations[playerState].loc[position].y;

    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    
    gameFrame++;
    requestAnimationFrame(animate)
};
animate();