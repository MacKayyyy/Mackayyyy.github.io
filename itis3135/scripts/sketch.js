function setup() {
    createCanvas(800, 600); // Canvas size
    background(220); // Light gray background
}

function draw() {
    if (mouseIsPressed) {
        stroke(random(255), random(255), random(255)); // Random color
        strokeWeight(4); // Brush thickness
        line(mouseX, mouseY, pmouseX, pmouseY); // Draw line following the mouse
    }
}
