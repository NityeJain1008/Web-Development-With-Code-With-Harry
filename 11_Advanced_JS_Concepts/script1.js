const v = localStorage.getItem("name") ; 
if(v){
    document.getElementById("name").value = v ; 
}

document.getElementsByTagName("form")[0].addEventListener("submit", (e)=>{
    e.preventDefault() ; 
    const value = document.getElementById("name").value ; 
    console.log(value);
    localStorage.setItem("name", value) ; 
})

