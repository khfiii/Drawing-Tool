class Drawing {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.canvas.width = innerWidth;
        this.canvas.height = innerHeight;
        this.ctx = this.canvas.getContext("2d");
        this.cordinate = { x: 0, y: 0 };
        this.defaultColor = "black";
        this.colors = document.querySelectorAll(".item");
        this.isDrawing = false;
        this.initCanvas();
    }

    initCanvas() {
        this.chooseColor();
        this.canvas.addEventListener("mousedown", () => this.startDrawing());
        this.canvas.addEventListener("mouseup", () => this.stopDrawing());
        this.canvas.addEventListener("mousemove", (e) => this.onDrawing(e));
    }

    onDrawing(e) {
        if (this.isDrawing) {
            const rect = this.canvas.getBoundingClientRect();
            this.cordinate.x = e.layerX;
            this.cordinate.y = e.layerY;
            this.drawingWithPen();
        }
    }

    startDrawing() {
        this.isDrawing = true;
        this.ctx.beginPath();
    }

    stopDrawing() {
        this.isDrawing = false;
    }

    chooseColor() {
        this.colors.forEach((color) => {
            color.style.border = 'none';
            color.addEventListener("click", () => {
                if (color.classList.contains("black")) {
                    return (this.defaultColor = "black");
                }
                else if (color.classList.contains("red")) {
                    return (this.defaultColor = "red");
                }
                else if (color.classList.contains("yellow")) {
                    return (this.defaultColor = "yellow");
                }
                else if (color.classList.contains("green")) {
                    return (this.defaultColor = "green");
                }
                else if (color.classList.contains("blue")) {
                    return (this.defaultColor = "blue");
                }else{
                    color.style.border = 'none';
                }
            });
        });
    }

    drawingWithPen() {
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = this.defaultColor;
        this.ctx.lineTo(this.cordinate.x, this.cordinate.y);
        this.ctx.stroke();
    }
}

const drawing = new Drawing();
