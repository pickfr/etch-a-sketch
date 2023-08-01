
// Start with a blank pixel grid of 16x16
// get cursor position and when clicked if the mouse hovers over a section colour that section in.

// Update to new Array(len).fill(0) when done
    const pixelArray = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];


                        let pixelListener;
    

// create 16x16 divs that the array will map to.
buildPixelDivs();


function buildPixelDivs(){

    const containerDiv = document.getElementById("etch-a-sketch-container");

    for (let y = 0; y < pixelArray.length; y++) {

        let pixelDivRow = document.createElement(`div`);
        pixelDivRow.classList.add(`row`);
        pixelDivRow.classList.add(`row-${y}`);
        containerDiv.appendChild(pixelDivRow)



        for (let x = 0; x < pixelArray[y].length; x++) {
        
            pixelArray[y][x] = document.createElement(`div`);
            pixelArray[y][x].classList.add(`y${y}x${x}`);
            pixelArray[y][x].classList.add(`pixel`);
            pixelDivRow.appendChild(pixelArray[y][x]);
            pixelArray[y][x].textContent = `[x]`;
            pixelArray[y][x].addEventListener("mouseover",alterPixel);
        }
    }
}



function alterPixel(e){


    console.log(e.target);
    e.target.textContent = `[o]`;


}





// Use this to make a 16 x 16 group of divs probs with a loop
//const pixels = document.createElement(`div`);


//pixels.classList.add("pixels")
// Put the pixels inside the container div.
//containerDiv.appendChild(pixels)

