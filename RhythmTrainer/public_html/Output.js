function showDiv() {
	var para = document.createElement("p");
	var node = document.createTextNode(elapsedTime);
	userGeneratedTrack.push(elapsedTime);
	para.appendChild(node);
	
	var element = document.getElementById("timestamp");
	element.appendChild(para);
}
