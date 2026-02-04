class Player {
    constructor(game) {
        this.game = game;
        this.width = 100;
        this.height = 91.3;
        this.x = 0;
        this.y = this.game.height - this.height;
    }
    update() {

    }
    draw(context) {
        context.fillStyle = 'red';
        context.fellRect(this.x, this.y, this.width, this.height);
        context.drawImage()
    }
}
