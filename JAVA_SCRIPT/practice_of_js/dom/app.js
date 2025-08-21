// let smallImages = document.getElementsByClassName("oldImg");

// for(let i = 0; i<smallImages.length; i++){
//     console.dir(smallImages[i])
// }



// console.dir(document.querySelector("h1"));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelector("div a"));

// console.dir(document.querySelectorAll("div a"));




let links = document.querySelectorAll(".box a");

for (i = 0; i < links.length; i++) {
    links[i].style.color = "green";
}



let para1 = document.createElement("p");
para1.innerText = "here are some comics of spiderman.";
document.querySelector("body").append(para1);
para1.classList.add("red");



let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "mcu";
para2 = "stan lee start writing story of spiderman."

div.append(h1);
div.append(para2);
div.classList.add("boxY");

document.querySelector("body").append(div);


//pq1.....
// let button=document.createElement("button");
// let input=document.createElement("input");
// button.innerText="Clickme";
// document.querySelector("body").append(input);
// document.querySelector("body").append(button);


//pq2.....
// let button=document.createElement("button");
// let input=document.createElement("input");
// button.innerText="Clickme";
// document.querySelector("body").append(input);
// document.querySelector("body").append(button);
// button.setAttribute("id", "btn");
// input.setAttribute("placeholder", "username");


//pq3.....
// let button=document.createElement("button");
// let input=document.createElement("input");
// button.innerText="Clickme";
// document.querySelector("body").append(input);
// document.querySelector("body").append(button);
// button.setAttribute("id", "btn");
// input.setAttribute("placeholder", "username");
// let btn = document.querySelector("#btn");
// btn.classList.add("btnST");


//pq4.....
// let he1 = document.createElement("h1");
// he1.innerText = "it's practice of DOM";
// he1.classList.add("purpleCOl")
// document.querySelector("body").append(he1);


