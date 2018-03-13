function toggle(){
    document.getElementById("caption").innerHTML= "The 4 Largest Plutoids on scale";
    document.getElementById("Modal").style.display = "block";
    document.getElementById("img01").src = "images/plutoids1500.png";
}

function toggle2(){
    document.getElementById("caption").innerHTML= "Pluto";
    document.getElementById("Modal").style.display = "block";
    document.getElementById("img01").src = "images/plutoFull.png";
}

function toggle3(){
    document.getElementById("caption").innerHTML= "Eris artist impression";
    document.getElementById("Modal").style.display = "block";
    document.getElementById("img01").src = "images/erisFull.png";
}

function toggle4(){
    document.getElementById("caption").innerHTML= "Hamuea artist impression";
    document.getElementById("Modal").style.display = "block";
    document.getElementById("img01").src = "images/haumeaFull.png";
}

function remove(){
    document.getElementById("Modal").style.display = "none";
}