
// Start with a blank pixel grid of 16x16
// get cursor position and when clicked if the mouse hovers over a section colour that section in.


    let canvasSize = 16;
    let pixelListener;
    let mouseDown = false;


// create 16x16 divs that the array will map to.
buildPixelDivs();
window.addEventListener("mousedown", (e) => {mouseDown = true; alterPixel(e)});
window.addEventListener("mouseup", (e) => {mouseDown = false; alterPixel(e)});

function buildPixelDivs(){


    askUserForSettings();

    const containerDiv = document.getElementById("etch-a-sketch-container");


    //Loop through the arrays in the pixelArray array to make the divs for the rows
    for (let y = 0; y < canvasSize; y++) {


        let pixelRow = document.createElement(`div`);
        pixelRow.classList.add(`row`);
        containerDiv.appendChild(pixelRow);

        // Loop through each pixelArray's array (we're 2 deep)
        for (let x = 0; x < canvasSize; x++) {

            let pixel = document.createElement(`div`);
            pixel.classList.add(`pixel`);
            pixelRow.appendChild(pixel);
            pixel.addEventListener("mouseover",alterPixel);
            pixel.addEventListener("mousedown", alterPixel);
        }
    }
}



function alterPixel(e){
    
if(mouseDown && e.target.classList.contains("pixel")){
    
    e.target.style = `background-color: rgb(0, 0, 0)`
}


}


function askUserForSettings(){


}