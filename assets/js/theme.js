// script for dark and light theme button

const body = document.querySelector("body"),
modeToggle = body.querySelector(".toggle-icon");

// let getMode = localStorage.getItem("mode");
// if(getMode && getMode === "dark"){
//     body.classList.toggle("dark");
// } 

// modeToggle.addEventListener("click", () => {
//     body.classList.toggle("dark");
//     if(body.classList.contains("dark")){
//         localStorage.setItem("mode", "dark");
//     }else{
//         localStorage.setItem("mode", "light");
//     }
// });


let getMode = localStorage.getItem("mode");
if(getMode && getMode === "light"){
    body.classList.toggle("light");
} 

modeToggle.addEventListener("click", () => {
    body.classList.toggle("light");
    if(body.classList.contains("light")){
        localStorage.setItem("mode", "light");
    }else{
        localStorage.setItem("mode", "dark");
    }
});

function f(x){
    x="x-" + x;
    return function(y){
          y="y-" + y;
          return function(z){
          z="z-" + z;
    } 
}

let g=f("a")("b")("c");
print(g);