// Your code goes here

//All Global Selectors
const navigation = document.querySelector('.main-navigation')
const para = document.querySelectorAll('p')
const images = document.querySelectorAll('img')
const titles = document.querySelectorAll('h2')
//const buttons = document.querySelectorAll('.bttn')

//-----------------------------------------------------------------------------------//
// #1 Mouseover
const link = document.querySelector('nav');

//This Handler Allows Nav Bar To Change Over Mouse Over
link.addEventListener("mouseover", function (event) {
    // Highlight The Font Red When Mouseover The Nav
    event.target.style.color = "red";

    // Reset The Color After Moving Mouse Off
    setTimeout(function () {
        event.target.style.color = "";
    }, 500);
}, false);

//-----------------------------------------------------------------------------------//
// #2 DoubleClick
window.ondblclick = colorChange;

function colorChange() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "lightblue";
}

//-----------------------------------------------------------------------------------//
// #3 Created A Button

const allDivs = document.querySelectorAll(".btn");
allDivs.forEach((div) => {
    let btn = document.createElement("button");
    btn.textContent = div.innerHTML;
    div.replaceWith(btn);
});

//-----------------------------------------------------------------------------------//
// #4 KeyDown / KeyUp

// Arrow Keys Cause Pictures To Disappear and Re-Appear
images.forEach(image => {
    window.addEventListener('keydown', (e) => {
        if (e.keyCode === 40)
            image.style.display = 'none'
    });
});

images.forEach(image => {
    window.addEventListener('keyup', (e) => {
        if (e.keyCode === 38)
            image.style.display = 'block'
    });
});

//-----------------------------------------------------------------------------------//
// #5 Load 

window.addEventListener('load', () => {
    alert("Welcome to Fun Bus Travel Agency! Let's Plan Your Next Adventure!")
})

//-----------------------------------------------------------------------------------//
// #6 Resize

images.addEventListener("")
