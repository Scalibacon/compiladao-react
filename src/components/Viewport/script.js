import mapImg from '../../assets/viewport-map.png';
import charImg from '../../assets/viewport-char.png';

let canvas, ctx;
let isCanvasSelected = false;
let animationId; 

const state = {
    map: {},
    char: {},
    cam: {}
};

export function canvasStart(){
    canvas = document.querySelector('.viewportContainer #viewportCanvas');
    ctx = canvas.getContext('2d');

    state.map =  new Element(0,0,819,532,mapImg);
    state.char = new Element(0,0,38,48,charImg);    
    state.cam = new Camera();

    //centralizar o char
    state.char.x = (state.map.width - state.char.width)/2;
    state.char.y = (state.map.height - state.char.height)/2;

    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    document.addEventListener('click', handleViewportCanvasClick);

    loop();
}

export function canvasStop(){
    cancelAnimationFrame(animationId);
    document.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('keyup', handleKeyUp);
    document.removeEventListener('click', handleViewportCanvasClick);
    state.map = {};
    state.char = {};
    state.cam = {};
}

function handleViewportCanvasClick(e){
    if(e.target === canvas){
        isCanvasSelected = true;
    } else {
        isCanvasSelected = false;
    }
}

function handleKeyDown(e){
    if(!isCanvasSelected){
        return;
    }    

    const key = e.keyCode;
    
    switch(key){
        case 37:
            state.char.left = true;
            break;
        case 38:
            state.char.up = true;
            e.preventDefault();
            break;
        case 39:
            state.char.right = true;
            break;
        case 40:
            state.char.down = true;
            e.preventDefault();
            break;
        default:
            /*DO-NOTHING*/;
    }
}

function handleKeyUp(e){
    const key = e.keyCode;
    
    switch(key){
        case 37:
            state.char.left = false;
            break;
        case 38:
            state.char.up = false;
            break;
        case 39:
            state.char.right = false;
            break;
        case 40:
            state.char.down = false;
            break;
        default:
            /*DO-NOTHING*/;
    }
}

function update(){
    //Move o char ******************************
    if(state.char.right && !state.char.left)
        state.char.x += 2;

    if(state.char.left && !state.char.right)
        state.char.x -= 2;

    if(state.char.up && !state.char.down)
        state.char.y -= 2;

    if(state.char.down && !state.char.up)
        state.char.y += 2;

    //Limites do mapa **************************
    if(state.char.x < 0)
        state.char.x = 0;
    
    if(state.char.x + state.char.width > state.map.width){
        state.char.x = state.map.width - state.char.width;
    }

    if(state.char.y < 0){
        state.char.y = 0;
    }

    if(state.char.y + state.char.height > state.map.height){
        state.char.y = state.map.height - state.char.height;
    } 
    
    state.cam.update();
}

function render(){
    ctx.save();
    ctx.translate(-state.cam.x, -state.cam.y);
    
    state.map.render(ctx);
    state.char.render(ctx);
    state.cam.render(ctx);

    ctx.restore();
}

function loop(){
    update();
    render();
    animationId = requestAnimationFrame(loop);
}

class Element {
    constructor(x,y,width,height,img){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        const image = new Image();
        image.src = img;
        this.img = image;
    }

    render(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
} 

class Camera{
    constructor(){
        this.width = canvas.width;
        this.height = canvas.height;
        this.x = (state.map.width - this.width)/2;
        this.y = (state.map.height - this.height)/2;
    }
       
    //Estabelece os limites da câmera (usado pra atualizar posição quando o char tocar)
    //0.25 e 0.75 são usados pros limites não serem grudados nas bordas
    leftEdge = () => {
        return this.x + (this.width * 0.25);
    };

    rightEdge = () => {
        return this.x + (this.width * 0.75);
    };
        
    topEdge = () => {
        return this.y + (this.height * 0.25)
    };

    bottomEdge = () => {
        return this.y + (this.height * 0.75)
    };

    //Atualiza a posição da câmera baseado na poição do char
    update = () => {
        if(state.char.x < this.leftEdge()){
            this.x = state.char.x - (this.width * 0.25);
        }
        if(state.char.x + state.char.width > this.rightEdge()){
            this.x = state.char.x + state.char.width - (this.width * 0.75);
        }
        if(state.char.y < this.topEdge()){
            this.y = state.char.y - (this.height * 0.25);
        }
        if(state.char.y + state.char.height > this.bottomEdge()){
            this.y = state.char.y + state.char.height - (this.height * 0.75);
        }

        if(this.x < 0){
            this.x = 0;
        }
        if(this.x + this.width > state.map.width){
            this.x = state.map.width - this.width;
        }
        if(this.y < 0){
            this.y = 0;
        }
        if(this.y + this.height > state.map.height){
            this.y = state.map.height - this.height;
        }
    };

    //É 0.5 porque nos edge() sobram 0.25 de um lado e 0.25 de outro
    render = (ctx) => {
        ctx.fillStyle = 'red';
        ctx.strokeRect(
            this.leftEdge(),
            this.topEdge(),            
            this.width * 0.5,
            this.height * 0.5
        )
    }    
}