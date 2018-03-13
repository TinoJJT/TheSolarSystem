function toggle(){
    document.getElementById("caption").innerHTML= "Mars";
    document.getElementById("Modal").style.display = "block";
    document.getElementById("img01").src = "images/marsFull.png";
}

function toggle2(){
    document.getElementById("caption").innerHTML= "Phobos (enhanced color)";
    document.getElementById("Modal").style.display = "block";
    document.getElementById("img01").src = "images/phobos1500.png";
}

function toggle3(){
    document.getElementById("caption").innerHTML= "Deimos (enhanced color)";
    document.getElementById("Modal").style.display = "block";
    document.getElementById("img01").src = "images/deimosFull.png";
}

function remove(){
    document.getElementById("Modal").style.display = "none";
}