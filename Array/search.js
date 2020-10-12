var arr=[3,5,78,32,45,78,11]
var num=Number(prompt("enter number to search"))
for (item of arr){
    if(item==num){
        alert("number found")
        break;
    }
    else {
        alert("number not found")
    }
}
