var low=Number(prompt("enter lower limit :"));
var limit=Number(prompt("enter higher limit :"));
for(low;low<=limit;low++){
	if(low%2==0){
	   console.log(low+" Even number");
         }
        else{
           console.log(low+" Odd number");
         }
}
