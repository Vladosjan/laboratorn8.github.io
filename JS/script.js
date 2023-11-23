document.addEventListener("DOMContentLoaded", () =>{
let body = document.querySelector("body");
 body.style.width = "100%"; 
 body.style.height = "25%"; 
 body.style.backgroundColor = "blue";  
  let firstLabel = document.getElementById("label1").innerHTML =  prompt("Enter your name:");  
  let firstLabel1 = document.getElementById("label2");
  let textInput1 = document.getElementById("input1");  
  textInput1.innerHTML = "1"; 
  let textInput2 = document.getElementById("input2");  
  textInput2.innerHTML = "2";
   let test = document.getElementById("button1"); 
 for(let i = 0; i < 3; i++){   
test.onclick = Game;  
 
let random = Math.floor(Math.random() * 2);  
let random1 = Math.floor(Math.random() * 2);   
  let circle1 = document.getElementById("circle1");   
circle1.style.fontFamily = "Times New Roman" 
 circle1.style.fontSize = "30px"; 
  circle1.style.fontWeight = "bold";
 let circle2 = document.getElementById("circle2");
circle2.style.fontFamily = "Times New Roman" 
 circle2.style.fontSize = "30px"; 
  circle2.style.fontWeight = "bold";       
   function Game(){  
      if(random == 1){  
        circle1.innerHTML = random;
     circle1.innerHTML = "You are win	" + random; 
	   }if(random1 == 1){ 
      circle2.innerText = random;
      circle2.innerHTML = "You are lose	" + random;
       }
      } 
 }
}
);

 

