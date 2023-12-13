let imageElement = document.getElementById("image");

let originalImageWidth = "200px";

imageElement.style.width = originalImageWidth;

let currentWidth = parseInt(originalImageWidth);

function increment_Button() {
    let currentWidth = parseInt(originalImageWidth);
    if (currentWidth < 300) {
        let updatedImageWidth = currentWidth + 5;
        originalImageWidth = updatedImageWidth + "px";
        imageWidth.textContent = originalImageWidth;
        imageElement.style.width = originalImageWidth;
        warningMessage.textContent = "";
    } else {
        document.getElementById("warningMessage").textContent = "Too big, Please Decrese the size of image! ";
    }
}

function decrement_Button() {
    let currentWidth = parseInt(originalImageWidth);
    if (currentWidth > 100) {
        let updatedImageWidth = currentWidth - 5;
        originalImageWidth = updatedImageWidth + "px";
        imageWidth.textContent = originalImageWidth;
        imageElement.style.width = originalImageWidth;
        warningMessage.textContent = "";
    } else {
        document.getElementById("warningMessage").textContent = "Can't visible! please increse the size!";
    }
}