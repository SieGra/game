'use strict';
const canvas = (function () {
    let publicMethods = {};

    publicMethods.new = class Canvas {
        constructor(id, width, height) {
            this.id = id;
            this.width = width;
            this.height = height;
            this.background = 'black';
            this.backgroundSrc = '../img/background.png';

            this.ground = this.height-200;
        }

        get render() {
            const body = document.querySelector('body');
            const canvas = document.createElement('canvas');
            canvas.width = this.width;
            canvas.height = this.height;
            canvas.id = this.id;
            body.appendChild(canvas);
        }

        get refresh(){
            const canvas = document.getElementById(this.id);
            const ctx = canvas.getContext("2d");
            const backgrounds = new Image(this.width, this.height);
            backgrounds.src = this.backgroundSrc;
            backgrounds.onload = () => {
                ctx.drawImage(backgrounds, 0,0, this.width, this.height);
            }
        }

    }
    return publicMethods;
})();