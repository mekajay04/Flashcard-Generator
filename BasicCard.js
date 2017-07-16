// JavaScript Document
var name = process.argv[2];

var ClozeCard = require("./ClozeCard");

function BasicCard(front,back) {
	this.front = front;
	this.back = back;
	
}


var firstPresident = new BasicCard ( "Who is the first president of the United States?", "George Washington")

"Who was the first president of the United States?"
console.log(firstPresident.front);

"George Washington"
console.log(firstPresident.back); 

if(name !== "" && typeof name !== "undefined"){
var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington", name);

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); 

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

}

module.exports = BasicCard;