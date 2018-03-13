function toggle(){
    document.getElementById("caption").innerHTML= "Various asteroids not in scale";
    document.getElementById("Modal").style.display = "block";
    document.getElementById("img01").src = "images/asteroidsFull.png";
}

function toggle2(){
    document.getElementById("caption").innerHTML= "Ceres";
    document.getElementById("Modal").style.display = "block";
    document.getElementById("img01").src = "images/ceresFull.png";
}

function remove(){
    document.getElementById("Modal").style.display = "none";
}