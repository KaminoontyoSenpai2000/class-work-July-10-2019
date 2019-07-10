//var button = document.getElementById("button1");
//button.innerHTML = "Hello World";
//<script defer src=""> !!!

//var div = document.querySelector(".wrapper");
//div.innerHTML = "<button>Click Me</button>";
//alert(div.classList);

/*var div = document.querySelector(".wrapper");
div.addEventListener("click", function() {
	if(div.classList.contains ("wrapper")) {
	div.classList.remove("wrapper")
	div.classList.add("block")
	} else {
		div.classList.remove("block")
		div.classList.add("wrapper")
	}
})*/

/*var div = document.getElementById("wrapper");
div.addEventListener("click", function() {
	div.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255)
	+ "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255)
	+ ",";
});*/

var readMoreLink = document.getElementById("readMore");

readMoreLink.addEventListener("click", function() {

	var expand = document.getElementById("expand");

	if(expand.style.display == "block") {
		expand.style.display = "none";
		readMoreLink.innerHTML = "Read More";

	}else {
		expand.style.display = "block";
		readMoreLink.innerHTML = "Read More";
	}

}) 