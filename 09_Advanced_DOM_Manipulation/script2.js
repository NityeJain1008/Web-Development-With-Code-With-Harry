const img = document.getElementById("image") ; 
img.setAttribute("alt", "Green background") ; 

console.log(img.getAttribute("alt")) ; 

// img.classList.add("red") ; 

function func1() {
    img.classList.remove("red") ;
    img.classList.add("blue") ; 
}


function func2(){
    img.classList.toggle("blue") ; 

    if(img.classList.contains("blue")){
        document.getElementById('btn').innerText = "Remove Blue" ; 
    }
    else{
        document.getElementById('btn').innerText = "Add Blue" ; 
    }

}



