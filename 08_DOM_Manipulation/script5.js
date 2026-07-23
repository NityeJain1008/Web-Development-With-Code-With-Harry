function magic(){
    let b1 = document.getElementsByClassName("box") ; 

    for(element of b1){
        element.innerHTML = "This is " + element.innerHTML ; 
    }
}