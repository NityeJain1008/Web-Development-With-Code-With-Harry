for(let i = 0 ; i<5 ; i++){
    console.log(i) ;
}

let j = 0 ; 

while(j < 5)
{
    console.log(j) ;
    j++ ; 
}

let obj = {
    name : "John" , 
    salary : 25000 , 
    age : 45 , 
    isadmin : false
}

for(key in obj){
    console.log("the value of ", key, "for john is", obj[key]) ; 
}

 