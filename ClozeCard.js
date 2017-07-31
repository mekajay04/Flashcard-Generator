// JavaScript Document
"use strict";

function ClozeCard (text, cloze){
	
	if (!(this instanceof ClozeCard)) {
		return new ClozeCard(text, cloze);
	}
	
	var clozePositions = clozeDelete (text, cloze);
	this.cloze = text.slice(clozePositions[0], clozePositions[1]);
	this.partial = getpartial(text, clozePositions);
	
	function getpartial(text,clozePositions) {
		var start = text.slice(0, clozePositions[0]);
		
		 var end = text.slice(clozePositions[1], text.length);
    // Return ellipsized version
    return start + "..." + end;
  }
//  function clozeDelete(text, cloze) {
//    var start = text.indexOf(cloze);
//    if (start !== -1) {
//      return [start, start + cloze.length];
//    }
//    throw new Error("Cloze deletion not found in input text.");
//  }
}
ClozeCard.prototype.displayCard = function displayCard() {
  return this.partial.replace(/\.\.\./, "'" + this.cloze + "'");
};
	






//exports the constructor abililty to use script somewhere else. which is why we use require in the other file
module.exports = ClozeCard;