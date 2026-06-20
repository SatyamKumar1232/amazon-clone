const images = [
    "amazo11.jpg",
    "amazon12.jpg",
    "amazon13.jpg",
    "amazon14.jpg",
    "amazon15.jpg"
];

let current = 0;

const slider = document.getElementById("slider");

function showImage(index){
    slider.src = images[index];
}

document.querySelector(".next").addEventListener("click", () => {
    current++;

    if(current >= images.length){
        current = 0;
    }

    showImage(current);
});

document.querySelector(".prev").addEventListener("click", () => {
    current--;

    if(current < 0){
        current = images.length - 1;
    }

    showImage(current);
});

setInterval(() => {
    current++;

    if(current >= images.length){
        current = 0;
    }

    showImage(current);
}, 3000);

function openMenu(){
    document.getElementById("sideMenu").style.left = "0";
    document.getElementById("overlay").style.display = "block";
}

function closeMenu(){
    document.getElementById("sideMenu").style.left = "-300px";
    document.getElementById("overlay").style.display = "none";
}