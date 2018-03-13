function toggle(){
    document.getElementById("caption").innerHTML= "Neptune";
    document.getElementById("Modal").style.display = "block";
    document.getElementById("img01").src = "images/neptune1500.png";
}

function toggle2(){
    document.getElementById("caption").innerHTML= "Triton";
    document.getElementById("Modal").style.display = "block";
    document.getElementById("img01").src = "images/tritonFull.png";
}

function remove(){
    document.getElementById("Modal").style.display = "none";
}