var num=Number(prompt("Enter the number"));
var flg=0;
for(i=2;i<num;i++){
    if(num%i==0){
      flg=1;
      break;
    }
    else{
     flg=0;
    }
}
if(flg==o){
  alert(num+" is prime number")
}
else{
  alert(num+" is not prime number")
}
