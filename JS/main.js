//   Stack


var   letter  = [];

var  word = "racecar";
var  reverceword = "";

for(  var  i=0;  i<word.length;  i++){
    letter.push(word[i]);
}

for(var  i =0;  i<word.length;  i++){
    reverceword+=letter.pop();
}

if(reverceword===word){
    console.log(word+"is  a  palindrom");
}
else{
    console.log(word+"is not  a  palindrom");

}