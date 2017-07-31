// JavaScript Document
var name = process.argv[2];

var ClozeCard = require("./ClozeCard");

function BasicCard(front,back) {
	this.front = front;
	this.back = back;
	
}


var firstPresident = new BasicCard ( "Who was the first president of the United States?", "George Washington");


console.log(firstPresident.front);


console.log(firstPresident.back); 


var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.",  " ... was the first president of the United States.");

// "George Washington"
console.log(firstPresidentCloze.text); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.cloze); 




module.exports = BasicCard;