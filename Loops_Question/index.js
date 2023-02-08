for (let i = 0 ; i <= 10 ; i++){
  for (let j = 10 ; j >= 0 ; j--)
  {
    break;  
    
   console.log(i,j);
  }
}

for(var i=0;i<=10;i++){
  console.log(i)
}
for(var i=10;i>=10;i--){
  console.log(i)
}
for (let i = 0 ; i <= 10 ; i++){
console.log(++i);
}
for (let i = 0 ; i <= 10 ; i++){
  for (let j = 10 ; j >= 0 ; j--){
    console.log(i,j);
  }
}


for (let i = 0 ; i <= 10 ; i++){
  for (let j = 10 ; j >= 0 ; j--){
    continue;
    console.log(i,j);
  }
}