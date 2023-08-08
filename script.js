
// Start with a blank pixel grid of 16x16
// get cursor position and when clicked if the mouse hovers over a section colour that section in.

    let canvasSize = 8;
    let canvasSquared;
    let mouseDown = false;
    let hueValueRainbow = 0;
    let brushType = rgbRainbowMode();

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


function refreshUI(){

    buildPixelDivs();


}

function buildPixelDivs(){


    askUserForSettings();





        // Loop through each pixelArray's array (we're 2 deep)
        for (let x = 0; x < canvasSquared; x++) {

            let pixel = document.createElement(`div`);
            pixel.classList.add(`pixel`);
            containerDiv.appendChild(pixel);
            pixel.style.width = `${parseInt(window.getComputedStyle(containerDiv).width) / canvasSize}px`;
            pixel.addEventListener("mouseover",alterPixel);
            pixel.addEventListener("mousedown", alterPixel);
        }
    }


function chooseRGBMode(){

    console.log(rgbSelectorNode.value);

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

function rgbRandomiseMode(){

    let h = Math.ceil((Math.random()*360));
    console.log(`hsl(${h},85,75)`)
    return `hsl(${h},85%,75%)`;
}

function rgbRainbowMode(){


    hueValueRainbow = hueValueRainbow + 5;
    return `hsl(${hueValueRainbow},85%,75%)`;

}

function rgbSolidMode(){

    return `rgb(255,255,255)`

}


function alterPixel(e){
    
if(mouseDown && e.target.classList.contains("pixel")){
    
    e.target.style.backgroundColor = brushType;
    chooseRGBMode();
}


}


function askUserForSettings(){
 
//Take the user input as one side of the canvas and work out the amount of pixels    
canvasSquared = canvasSize * canvasSize;
    

}

function resetCanvas(){

    let pixels = document.getElementsByClassName("pixel");

    while(pixels.length){

        pixels[0].remove();

    }
    buildPixelDivs();

}

function displaySliderValues(){

    let resolutionDisplay = document.getElementById("resolution-display");
    canvasSize = pixelSlider.value;
    resolutionDisplay.textContent = `${canvasSize}`;

}