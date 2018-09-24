'use strict';
const player = (function () {
    let publicMethods = {};

    publicMethods.new = class newPlayer {
        constructor(canvas, screen, posX, posY) {
            this.skinArray = ['../img/player.png', '../img/player2.png', '../img/player3.png']
            this.width = 50;
            this.height = (this.width / 100) * 150;
            this.posX = posX;
            this.posY = posY;
            this.moveLength = 1;
            this.skin = null;
            this.direction = 'right';
            this.canvas = canvas;
            this.screen = screen;
            this.moveFlag = true;
        }

        get render() {
            let ctx = this.canvas.getContext("2d");
            let img = new Image();
            img.src = this.skin.replace(".png", this.direction + ".png");
            img.onload = () => {
                ctx.drawImage(img, this.posX, this.posY, this.width, this.height);
            }
        }

        get move() {
            const ctx = this.canvas.getContext('2d');
            this.render;
            if (this.direction === 'left') {

                if (this.posX > 0) {
                    let count = 0;
                    let int = setInterval(() => {
                        if (!this.moveFlag) {
                            clearInterval(int);
                        }
                        ctx.clearRect(0, 0, this.screen.width, this.screen.height);
                        this.render;
                        count += 1;
                        this.posX -= this.moveLength;
                        if (count >= 10) {
                            clearInterval(int);
                        }
                    }, 20);
                } else {
                    let count = 0;
                    if (!this.moveFlag) {
                        
                    } else {


                        let int2 = setInterval(() => {
                            clearInterval(int2);

                            ctx.clearRect(0, 0, this.screen.width, this.screen.height);
                            this.render;
                            count += 1;
                            this.posX += this.moveLength;
                            if (count >= 5) {
                                clearInterval(int2);
                            }



                        }, 5);
                    }
                }
            } else if (this.direction === 'right') {
                if (this.posX < (this.screen.width - 30)) {
                    let count = 0;
                    let int3 = setInterval(() => {
                        if (!this.moveFlag) {
                            clearInterval(int3);
                        }
                        ctx.clearRect(0, 0, this.screen.width, this.screen.height);
                        this.render;
                        count += 1;
                        this.posX += this.moveLength;
                        if (count >= 10) {
                            clearInterval(int3);
                        }
                    }, 20);
                } else {
                    let count = 0;
                    let int4 = setInterval(() => {
                        if (!this.moveFlag) {
                            clearInterval(int4);
                        }
                        ctx.clearRect(0, 0, this.screen.width, this.screen.height);
                        this.render;
                        count += 1;
                        this.posX -= this.moveLength;
                        if (count >= 5) {
                            clearInterval(int4);
                        }
                    }, 5);
                }
            }
            this.render;
        }
    }
    return publicMethods;
})();