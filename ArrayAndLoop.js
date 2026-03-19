let fruits = ["apple", "banana", "orange"];
 do{
     console.log("fruits: " + fruits); fruits++; 
    }
    while
       (fruits< fruits.length);
    
let sizes=["square","circle", "rectangle"];
 for(let i = 0; i < sizes.length; i++) {
    console.log("sizes using for loop are: " +sizes[i]); }


 for (let size of sizes) { 
    console.log("sizes using for of loop are:" + sizes);
 }

 do{
     console.log("sizes using  do while loop are:: " + sizes); sizes++; 
    }
    while
       (sizes< sizes.length);
