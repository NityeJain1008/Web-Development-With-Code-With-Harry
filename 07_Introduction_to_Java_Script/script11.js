let arr = [1, 2, 3, 4, "java"] ; 
arr.push(34) ; 

arr.pop() ; 
arr.shift() ; 
arr.unshift(33) ; 

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]) ;     
}

let arr1 = [4, 5, 6] ; 

function square(a){
    return a*a ; 
}

let arrSq = arr1.map(square) ; 

console.log(arrSq) ; 


function gt60(a){
    if(a>60) return true 
    else return false 
}

let marks = [34, 56 ,67, 78, 89 ,90] ; 

console.log(marks.filter(gt60)) ; 
console.log(arr) 