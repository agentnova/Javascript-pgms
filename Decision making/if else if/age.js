var byear = Number(prompt("enter the year of birth :"));
var bmonth = Number(prompt("enter the birth month :"));
var bday = Number(prompt("enter the birth day :"));

var cyear = Number(prompt("enter the current year :"));
var cmonth = Number(prompt("enter the current month :"));
var cday = Number(prompt("enter the current day :"));

var age = cyear - byear;

if(bmonth>cmonth){
    age-=1;
}
else if((bmonth==cmonth)&(bday>cday)){
    age-=1;
}
alert("You are "+age+" years old");
