const box1 = document.getElementById("Box1") ;
const box2 = document.getElementById("Box2") ;
const container = document.querySelector(".container") ; 

box1.addEventListener("click", (e)=>{
    console.log("Box1 was clicked") ; 
    e.stopPropagation() ; 
})

container.addEventListener("click", ()=>{
    console.log("Container eas clicked") ; 
})



