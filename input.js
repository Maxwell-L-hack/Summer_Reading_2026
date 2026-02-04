export class InputHandler {
    constructor() {
        this.keys = [];
        window.addEventListner('keydown', e => {
            console.log(e.key);
        });
    }
}