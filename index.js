// function calculatrice(term1 , operation, term2){
//     if (operation=="+"){
//         return add(term1, term2);
//     } else if(operation == "-"){
//          return subs(term1, term2);
//     } else if (operation == "/"){
//           return div(term1, term2);
//     }
//     else if (operation == "*"){
//           return mult(term1, term2);
//     } else{
//         return "something went wrong with your input"
//     }
    
// }
//  function add(a, b){
//      return a + b;
//  }
//   function subs(a, b){
//      return a - b;
//  }
//   function div(a, b){
//      return a / b;
//  }
//   function mult(a, b){
//      return a * b;
//  }


// let response = calculatrice(4, "*", 2)
// console.log(response);


// 


// function rec(m){

//     for(let i=0; i<m+1;i++){
//         console.log("#".repeat(i))
//     }
//     for(let i=1; i<m;i++){
//         console.log(" ".repeat(i) + "#".repeat(m-i))
//     }
  
// }

// rec(15)

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const s = "ATGCTTCAGAAAAGGTCAGCG"

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

// let counta = 0
// let countc = 0
// let countg = 0
// let countt = 0
// for(let i=0 ; i<s.length; i++){
//     if(s[i].tolowercase()=="a"){
//         counta +=1
//     }
//     if(s[i].tolowercase()=="c"){
//         countc +=1
//     }
//     if(s[i].tolowercase()=="g"){
//         countg +=1
//     }
//     if(s[i].tolowercase()=="t"){
//         countt +=1
//     }
// }

// console.log(counta);


let ans  = parseInt(prompt("Do you wanna playing"));

let set1= ['i', 'you', 'he or she' ,'we', 'they']
let set2= ['Accept', 'Reach', 'Watch' ,'Ask', 'Boil', ' Marry','Study','Multiply','Play','Obey']

let set3= ['0%', '50%', '100%']
let ans1 = ""
let ans2 = ""
let ans3 = ""

while(ans>2){
    const randomIndex = Math.floor(Math.random() * set1.length);
    const ans1 = set1[randomIndex];
     const randomIndex1 = Math.floor(Math.random() * set2.length);
    const ans2= set2[randomIndex1];
    const randomIndex2 = Math.floor(Math.random() * set3.length);
    const ans3= set3[randomIndex2];
  console.log(ans1,ans2,ans3);  
  ans  = parseInt(prompt("continue playing again"));
}



