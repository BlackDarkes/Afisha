let pick_first ={
    "ㅤ": "./image/main/slider/slider__main-image.jpg",
    "ㅤㅤ": "./image/main/slider/slider__last-image.jpg",
}

function check_value(event){
    document.getElementById("imagetest").src = pick_first[event.target.value]
}