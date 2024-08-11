class Drawing {
    constructor() {
        this.canvas = document.getElementById("canvas");
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
            this.cordinate.x = e.clientX - rect.left; // Koordinat x relatif terhadap canvas
            this.cordinate.y = e.clientY - rect.top; // Koordinat y relatif terhadap canvas
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
            color.addEventListener("click", () => {
                if (color.classList.contains("black")) {
                    return (this.defaultColor = "black");
                }
                if (color.classList.contains("red")) {
                    return (this.defaultColor = "red");
                }
                if (color.classList.contains("yellow")) {
                    return (this.defaultColor = "yellow");
                }
                if (color.classList.contains("green")) {
                    return (this.defaultColor = "green");
                }
                if (color.classList.contains("blue")) {
                    return (this.defaultColor = "blue");
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

    download() {}
}

const drawing = new Drawing();
