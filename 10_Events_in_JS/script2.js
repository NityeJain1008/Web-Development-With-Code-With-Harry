const firstBox = document.getElementById("firstBox") ; 

firstBox.addEventListener('click', ()=>{
    alert("Dont touch my box") ;
})

const input = document.getElementById("input") ; 

input.addEventListener('keyup', (event)=>{

    // alert("key pressed") ; 
    // console.log(event.key) ; 

    if(event.key == "Enter"){
        alert("form is submitted") ; 
    }
})

const secondBox = document.getElementById("secondBox") ; 

secondBox.addEventListener('mouseover', ()=>{
    secondBox.style.backgroundColor = 'blue' ; 
})
secondBox.addEventListener('mouseout', ()=>{
    secondBox.style.backgroundColor = '' ; 
})
