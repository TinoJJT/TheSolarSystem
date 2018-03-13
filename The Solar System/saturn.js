function toggle(){
    document.getElementById("caption").innerHTML= "Saturn";
    document.getElementById("Modal").style.display = "block";
    document.getElementById("img01").src = "images/saturn1500.png";
}

function toggle2(){
    document.getElementById("caption").innerHTML= "Titan";
    document.getElementById("Modal").style.display = "block";
    document.getElementById("img01").src = "images/titanFull.png";
}

function remove(){
    document.getElementById("Modal").style.display = "none";
}