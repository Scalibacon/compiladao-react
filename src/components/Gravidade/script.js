let canvas, ctx, animationId;

let state;

export function canvasStart(){
    canvas = document.querySelector('#gravidadeSection #gravidadeCanvas');
    ctx = canvas.getContext('2d');

    state = new State();
    state.ball = new Ball();

    canvas.addEventListener('mousemove', handleCanvasMousemove);
    canvas.addEventListener('mousedown', handleCanvasMouseDown);
    canvas.addEventListener('mouseup', handleCanvasMouseup);

    loop();
}

export function canvasStop(){
    cancelAnimationFrame(animationId);

    canvas.removeEventListener('mousemove', handleCanvasMousemove);
    canvas.removeEventListener('mousedown', handleCanvasMouseDown);
    canvas.removeEventListener('mouseup', handleCanvasMouseup);    

    state = {
        ball: {}
    }
}

class State{
    constructor(){
        this.ball = {}
        this.gravity = 0.2;
    }
}

function handleCanvasMousemove(e){
    // console.log(`x: ${e.offsetX} y: ${e.offsetY}`);
    if(state.ball.dragging){
        state.ball.drag(e.offsetX, e.offsetY);
    }
    
}

function handleCanvasMouseDown(e){
    if(e.offsetX >= state.ball.x - state.ball.radius && 
     e.offsetX <= state.ball.x + state.ball.radius &&
     e.offsetY >= state.ball.y - state.ball.radius &&
     e.offsetY <= state.ball.y + state.ball.radius){
        state.ball.dragging = true;
    }
    
}

function handleCanvasMouseup(e){
    state.ball.dragging = false;
}

function loop(){
    update();
    render();
    animationId = requestAnimationFrame(loop);
}

function update(){
    state.ball.update();
}

function render(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    state.ball.render(ctx);
}

class Ball{
    constructor(){
        this.x = 50;
        this.radius = 20;
        this.y = canvas.height - this.radius;

        this.dragging = false;
        this.gravitySpeed = 0;
    }

    render = (ctx) => {
        ctx.fillStyle = "turquoise";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    update = () => {
        if(!this.dragging && this.y + this.radius < canvas.height){
            this.gravitySpeed += state.gravity;
            this.y += this.gravitySpeed;
        } else {
            this.gravitySpeed = 0;
        }            

        if(this.x - this.radius < 0)
            this.x = this.radius;

        if(this.x + this.radius > canvas.width)
            this.x = canvas.width - this.radius

        if(this.y - this.radius < 0)
            this.y = this.radius;

        if(this.y + this.radius > canvas.height)
            this.y = canvas.height - this.radius;
    }

    drag = (x, y) => {
        this.x = x;
        this.y = y;
    }
}