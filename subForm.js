document.getElementById("residential").style.display = "none";
document.getElementById("commercial").style.display = "none";
document.getElementById("corporate").style.display = "none";
document.getElementById("hybrid").style.display = "none";


function on_change(){
    var it= document.getElementById('setBuilding').value;
    console.log(it)

    if(it == 0){
        document.getElementById("residential").style.display = "none";
        document.getElementById("commercial").style.display = "none";
        document.getElementById("corporate").style.display = "none";
        document.getElementById("hybrid").style.display = "none";
    } 

    else if(it == 1){
        document.getElementById("residential").style.display = "block";
        document.getElementById("commercial").style.display = "none";
        document.getElementById("corporate").style.display = "none";
        document.getElementById("hybrid").style.display = "none";
    }

    else if(it == 2){
        document.getElementById("residential").style.display = "none";
        document.getElementById("commercial").style.display = "block";
        document.getElementById("corporate").style.display = "none";
        document.getElementById("hybrid").style.display = "none";
    }
    else if(it == 3){
        document.getElementById("residential").style.display = "none";
        document.getElementById("commercial").style.display = "none";
        document.getElementById("corporate").style.display = "block";
        document.getElementById("hybrid").style.display = "none";

    }
    else if(it == 4){
        document.getElementById("residential").style.display = "none";
        document.getElementById("commercial").style.display = "none";
        document.getElementById("corporate").style.display = "none";
        document.getElementById("hybrid").style.display = "block";

    }

}