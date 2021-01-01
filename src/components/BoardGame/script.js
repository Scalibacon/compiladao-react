let canvas, ctx, state;

export function startCanvas(){
    canvas = document.querySelector('#boardgameSection #boardgameCanvas');
    ctx = canvas.getContext('2d');

    state = new State();
    // console.log(state.board.squares);

    loop();
}

export function stopCanvas(){

}

function loop(){
    update();
    render(ctx);
    requestAnimationFrame(loop);
}

function update(){

}

function render(ctx){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    state.board.render(ctx);
}

class State{
    constructor(){
        this.board = new Board();
    }
}

class Board{
    constructor(){
        this.squares = [];
        this.generateSquares();
    }

    generateSquares(){
        for(let i = 0; i < 10; i++){
            this.squares[i] = [];
            for(let j = 0; j < 10; j++){
                this.squares[i][j] = 0;
            }
        }

        this.squares[0][0] = new Square(0);
        this.squares[0][1] = new Square(1);
        this.squares[0][2] = new Square(2);
        this.squares[0][3] = new Square(1);
        this.squares[0][4] = new Square(1);
        this.squares[1][4] = new Square(1);
        this.squares[2][4] = new Square(1);
        this.squares[2][5] = new Square(1);
        this.squares[2][6] = new Square(1);
        this.squares[1][6] = new Square(1);
        this.squares[1][7] = new Square(1);
        this.squares[1][8] = new Square(1);
        this.squares[1][9] = new Square(1);
        this.squares[2][9] = new Square(1);
        this.squares[3][9] = new Square(1);
        this.squares[4][9] = new Square(1);
        this.squares[5][9] = new Square(1);
        this.squares[6][9] = new Square(1);
        this.squares[6][8] = new Square(1);
        this.squares[6][7] = new Square(1);
        this.squares[6][6] = new Square(1);
        this.squares[6][5] = new Square(1);
        this.squares[5][5] = new Square(1);
        this.squares[4][5] = new Square(1);
        this.squares[4][4] = new Square(1);
        this.squares[4][3] = new Square(1);
        this.squares[4][2] = new Square(1);
        this.squares[5][2] = new Square(1);
        this.squares[6][2] = new Square(1);
        this.squares[6][1] = new Square(1);
        this.squares[6][0] = new Square(1);
        this.squares[5][0] = new Square(1);
        this.squares[4][0] = new Square(1);
        this.squares[3][0] = new Square(1);
        this.squares[2][0] = new Square(1);
        this.squares[1][0] = new Square(1);
    }

    render(ctx){
        for(let i = 0; i < 10; i++){
            for(let j = 0; j < 10; j++){
                if(this.squares[i][j] !== 0){
                    //square-render
                    ctx.fillStyle = 'purple';
                    ctx.fillRect(j * 50, i * 50, 50, 50);
                }
            }
        }
    }
}

class Square{
    constructor(type){
        this.type = type;
    }
}

/*
class Event{
    constructor(id, duration){
        this.id = id;
        this.duration = duration;
    }

    execute(){
        console.log(`Executou o: ${this.id}`);
        return this.duration;
    }
}

class EventQueue {
    constructor(){
        this.events = [];
    }

    add(event){
        this.events.push(event);

        if(this.events.length === 1){
            console.log(`Startou na ${event.id}`)
            this.next();
        }
    }
    
    next(){
        if(this.events.length <= 0){
            return false;
        }

        const event = this.events[0];   
        const delay = event.execute();
        setTimeout(() => {
            this.events.shift();
            this.next();
        }, delay);
    }
}
*/