var more = false;
function toggle() {
    if(more == false){
        for (var i = 0; i < 4; i++) { 
            document.getElementsByClassName("final4")[i].style.display="inline";
        }
        
        document.getElementById("toggleButton").innerHTML= "less ⇑";
        more = true;
    }
    else {
        for (var i = 0; i < 4; i++) { 
            document.getElementsByClassName("final4")[i].style.display="none";
        }
        
        document.getElementById("toggleButton").innerHTML="more ⇓";
        more = false;
    }
}