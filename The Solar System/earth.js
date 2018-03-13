function toggle(){
    document.getElementById("caption").innerHTML= "Earth";
    document.getElementById("Modal").style.display = "block";
    document.getElementById("img01").src = "images/earth1500.png";
}

function toggle2(){
    document.getElementById("caption").innerHTML= "The moon";
    document.getElementById("Modal").style.display = "block";
    document.getElementById("img01").src = "images/moon1500.png";
}

function remove(){
    document.getElementById("Modal").style.display = "none";
}