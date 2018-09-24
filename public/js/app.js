'use strict';
const app = (function () {
    let publicMethods = {};
    (function () {

        let backgroundCanvas = new canvas.new('bgscreen', 1500, 500);
        backgroundCanvas.render;
        backgroundCanvas.refresh;
        let screen = new canvas.new('screen', 1500, 500);
        screen.render;
        const backgroundCanvasSelector = document.getElementById(backgroundCanvas.id);
        const screenSelector = document.getElementById(screen.id);
        const ctx = screenSelector.getContext('2d');

        setTimeout(() => {
            box1.render;
        }, 200);



        let kjetil = new player.new(screenSelector, screen, 50, screen.ground);
        kjetil.skin = kjetil.skinArray[Math.floor(Math.random() * (kjetil.skinArray.length))];
        kjetil.render;

        function freshFrame() {
            ctx.clearRect(0, 0, screenSelector.width, screenSelector.height);
            kjetil.render;
        }

        let upCounter = 0;

        function fall() {
            if (kjetil.posY < screen.ground) {
                let falling = setInterval(() => {
                    kjetil.posY += 5;
                    freshFrame();
                    if (kjetil.posY >= screen.ground) {
                        clearInterval(falling);
                        kjetil.posY = screen.ground;
                        setTimeout(() => {
                            upCounter = 0;
                        }, 100);
                        freshFrame();
                    }
                }, 5);
            }
        }


        freshFrame();
        addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft' || event.which === '37' || event.code === 'ArrowLeft') {
                event.preventDefault();
                kjetil.direction = 'left';
                
                if (kjetil.moveFlag || kjetil.posY < (screen.ground - box1.height)) {
                    kjetil.direction = 'left';
                    kjetil.move;
                } else {
                    kjetil.posX += 10;
                    kjetil.move;
                    freshFrame();
                }
            }

            if (event.key === 'ArrowRight' || event.which === '39' || event.code === 'ArrowRight') {
                event.preventDefault();
                kjetil.direction = 'right';
                
                if (kjetil.moveFlag || kjetil.posY < (screen.ground - box1.height)) {
                    kjetil.direction = 'right';
                    kjetil.move;
                } else {
                    kjetil.posX -= 10;
                    kjetil.move;
                    freshFrame();
                }
            }



            if (upCounter === 0) {
                if (event.key === 'ArrowUp' || event.which === '38' || event.code === 'ArrowUp') {
                    
                    event.preventDefault();
                    if (upCounter === 0) {
                        upCounter = 1;
                        let jump = setInterval(() => {
                            kjetil.posY -= 10;
                            if (kjetil.posY <= screen.ground - 100) {
                                fall();
                                clearInterval(jump);
                            }
                            kjetil.posY -= kjetil.moveLength + 5;
                            freshFrame();
                        }, 10);
                    }
                }
            }

        });

    })();
    return publicMethods;
})();