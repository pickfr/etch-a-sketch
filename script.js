
// App Properties

    let canvasSize = 8;
    let canvasSquared;
    let mouseDown = false;
    let hueValueRainbow = 0;
    let brushType = rgbRainbowMode();

// Stored Divs/Buttons/Other element/nodes.

    const resetButton = document.getElementById("reset");
    const containerDiv = document.getElementById("etch-a-sketch-container");
    const pixelSlider = document.getElementById("pixel-slider");
    const rgbSelectorNode = document.getElementById("color-mode-selector");


// create 16x16 divs that the array will map to.
buildPixelDivs();
window.addEventListener("mousedown", (e) => {mouseDown = true; alterPixel(e)});
window.addEventListener("mouseup", (e) => {mouseDown = false; alterPixel(e)});
resetButton.addEventListener("mousedown", resetCanvas);
pixelSlider.oninput = displaySliderValues;

// TODO: This doesn't really do anything. Was planning to go through chain and see where I could refactor the ui updates.
function refreshUI(){

    buildPixelDivs();


}

// Creates the blank canvas ready to paint on.
function buildPixelDivs(){

// TODO: rename function - decided to move in a different direction and use a slider instead of a prompt box
    askUserForSettings();





        // Generate each pixel for the canvas and add events
        for (let x = 0; x < canvasSquared; x++) {

            let pixel = document.createElement(`div`);
            pixel.classList.add(`pixel`);
            containerDiv.appendChild(pixel);
            pixel.style.width = `${parseInt(window.getComputedStyle(containerDiv).width) / canvasSize}px`;
            pixel.addEventListener("mouseover",alterPixel);
            pixel.addEventListener("mousedown", alterPixel);
        }
    }


    // Update this to choose functions automatically if possible.
    // This selects the function to use from the dropdown selection in the ui
function chooseRGBMode(){


    switch (rgbSelectorNode.value) {
        case "Rainbow":
            brushType = rgbRainbowMode();
        break;
        case "Random":
            brushType = rgbRandomiseMode();
        break;
        case "Solid":
            brushType = rgbSolidMode();
        break;
        default:
            brushType = rgbRainbowMode();
            break;
    }

}


// Brush modes
function rgbRandomiseMode(){

    let h = Math.ceil((Math.random()*360));
    return `hsl(${h},85%,75%)`;
}

function rgbRainbowMode(){


    hueValueRainbow = hueValueRainbow + 5;
    return `hsl(${hueValueRainbow},85%,75%)`;

}

function rgbSolidMode(){

    return `rgb(255,255,255)`

}
// End of brush modes

function alterPixel(e){
    
if(mouseDown && e.target.classList.contains("pixel")){
    
    e.target.style.backgroundColor = brushType;
    chooseRGBMode();
}


}


function askUserForSettings(){

canvasSquared = canvasSize * canvasSize;
    

}

// Removes all the pixel divs and runs buildPixelDivs to recreate them.
function resetCanvas(){

    let pixels = document.getElementsByClassName("pixel");

    while(pixels.length){

        pixels[0].remove();

    }
    buildPixelDivs();

}


// Adds a label to sliders so user can see value. 
// TODO: Update slider value on page load, instead of after user interaction. See TODO: update refresh UI at start of this JS file.
function displaySliderValues(){

    let resolutionDisplay = document.getElementById("resolution-display");
    canvasSize = pixelSlider.value;
    resolutionDisplay.textContent = `${canvasSize}`;

}