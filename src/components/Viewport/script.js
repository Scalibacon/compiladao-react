import mapImg from '../../assets/viewport-map.png';
import charImg from '../../assets/viewport-char.png';

let canvas, ctx;

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

    document.addEventListener('keydown', handleKeyDown);

    loop();
}

export function canvasStop(){
    document.removeEventListener('keydown', handleKeyDown);
}

function handleKeyDown(e){

}

function update(){

}

function render(){
    state.map.render(ctx);
    state.char.render(ctx);
}

function loop(){
    update();
    render();
    requestAnimationFrame(loop);
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

