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



