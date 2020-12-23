//   Stack


var   letter  = [];

var  word = "dsfdfd";
var  reverceword = "";

for(  var  i=0;  i<word.length;  i++){
    letter.push(word[i]);
}

for(var  i =0;  i<word.length;  i++){
    reverceword+=letter.pop();
}

if(reverceword===word){
    console.log(word+" is  a  palindrom");
}
else{
    console.log(word+" is not  a  palindrom");

}

 
//QUEUE

function  Queue(){
    collection = [];
    this.print = function(){
        console.log(collection);
    };
    this.enqueue = function(element){
        collection.push(element);
    };
    this.dequeue =  function(){
        return  collection.shift();
    };
    this.front =  function(){
        return  collection[0];
    };
    this.size =  function(){
        return  collection.length;
    };
    this.isEmpty =  function(){
        return (collection.length===0);
    };

}



var   queue = new  Queue();
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
queue.enqueue("d");
queue.print();
queue.dequeue();
queue.front();
queue.print();





















