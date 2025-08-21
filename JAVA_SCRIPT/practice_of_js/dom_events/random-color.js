let btn = document.querySelector(".btn button"); 

btn.addEventListener("click", function () {
    let randomColor = getRandomColor();

    // Update background color
    let colorBox = document.querySelector(".color");
    colorBox.style.backgroundColor = randomColor;

    // Update the <p> text inside .color
    let p = document.querySelector(".color p");
    p.innerText = `This is your new color: ${randomColor}`;

    console.log("color updated.");
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}
