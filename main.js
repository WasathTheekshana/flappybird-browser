// This is a class named Game
class Game {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.ctx = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }
    render() {
        this.ctx.fillRect(100, 100, 50, 150)

    }
}

// All the assets wait until its loaded
window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 720;
    canvas.height= 720;

    // Create an instance of Game class into a variable 
    const game = new Game(canvas, ctx);
    game.render();
});