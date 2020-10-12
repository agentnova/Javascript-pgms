var low=Number(prompt("enter lower limit :"));
var upper=Number(prompt("enter upper limit :"));
var evensum=0;
var oddsum=0;
for(i=low;i<upper;i++){
    if(i%2==0){
        evensum=evensum+i;
	}
    else{
        oddsum=oddsum+i;
	}
}
console.log("even sum :"+evensum);
console.log("odd sum :"+oddsum);
