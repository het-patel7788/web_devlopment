//           ..........ex 1...........
//    \\//test button out....
// let btn = document.getElementById("hoverBtn");

// btn.addEventListener("mouseout", function () {
//     btn.innerText = "You moved your mouse out!";
//     btn.style.backgroundColor = "red";
// });



//    \\//test keypress....
//    Note: Modern JS prefers keydown, 
//    but keypress still works for character keys.
// let input = document.getElementById("typingInput");
// let output = document.getElementById("typedText");

// input.addEventListener("keypress", function (event) {
//     output.innerText = `You pressed: ${event.key}`;
// });



//     \\//test scroll....
// window.addEventListener("scroll", function () {
//     document.getElementById("scrollMsg").innerText = "You're scrolling!";
// });



//      \\//test load....
// window.addEventListener("load", function () {
//   alert("The page is fully loaded!");
// });




//           ............ex2..........
// let btn = document.createElement("button");
// btn.innerText = "Toggle Color";
// document.body.append(btn);

// let isDark = false;

// btn.addEventListener("click", function () {
//     if (isDark) {
//         btn.style.backgroundColor = "white";
//         btn.style.color = "black";
//     } else {
//         btn.style.backgroundColor = "black";
//         btn.style.color = "white";
//     }

//     isDark = !isDark; // flip the state
// });




//              ..........ex 3.............
let inp = document.querySelector("#inp");

let hed = document.querySelector("#hed");

inp.addEventListener("keypress", function(){
    hed.innerText = inp.value;
});