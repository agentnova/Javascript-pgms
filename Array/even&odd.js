var arr=[11,32,5,1,67,82,35];
var even=[];
var odd=[];
for (item of arr){
	if(item%2==0){
		even.push(item);
	}
	else{
		odd.push(item);
	}
   }
console.log("Even array : "+even)
console.log("Odd array : "+odd)
