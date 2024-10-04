const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = 800;
canvas.height = 600;

let painting = false;
let color = '#000000';
let brushSize = 5;

// Function to start drawing
function startPosition(e) {
    painting = true;
    draw(e);
}

// Function to stop drawing
function endPosition() {
    painting = false;
    ctx.beginPath();
}

// Function to draw
function draw(e) {
    if (!painting) return;

    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.strokeStyle = color;

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

// Event listeners for mouse actions
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);

// Color picker change
document.getElementById('colorPicker').addEventListener('input', (e) => {
    color = e.target.value;
});

// Brush size change
document.getElementById('brushSize').addEventListener('input', (e) => {
    brushSize = e.target.value;
});

// Clear canvas function
document.getElementById('clearCanvas').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
