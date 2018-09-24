'use strict';
const box = (function () {
    let publicMethods = {};
    publicMethods.add = class Box {
        constructor (canvas, posX, posY) {
            this.height = 40;
            this.width = 40;
            this.posX = posX;
            this.posY = posY;
            this.canvas = canvas;
            this.barrierL = this.posX;
            this.barrierR = this.posX;
            this.calcX = (this.posX/2);
            this.calcY = (this.posY/2);
            
        }

        get render (){
            let ctx = this.canvas.getContext("2d");
            let img = new Image();
            img.src = "../img/brick2.png";
            img.onload = () => {
                ctx.drawImage(img, this.posX, this.posY, this.width, this.height);
            }
        }
    }

    return publicMethods;
})();