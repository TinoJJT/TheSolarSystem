function toggle(){
    document.getElementById("caption").innerHTML= "Jupiter";
    document.getElementById("Modal").style.display = "block";
    document.getElementById("img01").src = "images/jupiter1500.png";
}

function toggle2(){
    document.getElementById("caption").innerHTML= "Io";
    document.getElementById("Modal").style.display = "block";
    document.getElementById("img01").src = "images/io1500.png";
}

function toggle3(){
    document.getElementById("caption").innerHTML= "Europa";
    document.getElementById("Modal").style.display = "block";
    document.getElementById("img01").src = "images/europaFull.png";
}

function toggle4(){
    document.getElementById("caption").innerHTML= "Ganymede";
    document.getElementById("Modal").style.display = "block";
    document.getElementById("img01").src = "images/ganymedeFull.png";
}

function toggle5(){
    document.getElementById("caption").innerHTML= "Callisto";
    document.getElementById("Modal").style.display = "block";
    document.getElementById("img01").src = "images/callistoFull.png";
}

function remove(){
    document.getElementById("Modal").style.display = "none";
}