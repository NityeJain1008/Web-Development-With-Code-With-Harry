const form1 = document.getElementById("form1") ; 

form1.addEventListener("submit", (e)=>{
    e.preventDefault() ; 
    // console.log("Submitted", e.target[0].value, e.target[1].value) ; 
    const name = e.target[0].value ; 
    const tel = e.target[1].value ; 
    console.log(name) ; 
    console.log(tel) ; 
})

console.log(name) ; 