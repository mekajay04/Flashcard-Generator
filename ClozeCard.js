// JavaScript Document
"use strict";

function ClozeCard (text, cloze, name){
	this.cloze = cloze; 
	this.partial = text.replace(cloze, name);
	this.fullText = text;
}






//exports the constructor abililty to use script somewhere else. which is why we use require in the other file
module.exports = ClozeCard;