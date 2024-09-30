// This is a class named Game
class Game {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.ctx = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.baseHeight = 720;
        this.ratio = this.height / this.baseHeight;
        this.player = new Player(this)
        this.gravity;

        this.resize(window.innerWidth, window.innerHeight);

        window.addEventListener('resize', (e) => {
            this.resize(e.currentTarget.innerWidth, e.currentTarget.innerHeight);
        });
    }
    resize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx.fillStyle = "gold";
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.ratio = this.height / this. baseHeight;

        this.gravity = 0.15;
        this.player.resize();
    }
    render() {
        this.player.update();
        this.player.draw();
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

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.render();
        requestAnimationFrame(animate);
    } 
    requestAnimationFrame(animate);
});