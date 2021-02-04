var phrase2 = "10:00 AM";
var phrase3 = "I refuse to acknowledge what you just said.";
var phrase4 = "I am going to write you a disapproving letter.";
var phrase5 = "I really appreciate what you just did.";
var phrase6 = "It's time for us to leave.";
var phrase7 = "The horse was an accident.";
var phrase8 = "I look like a mess.";
var phrase9 = "Lucien just donated 5,000 bits.";

var answer2 = "10:30 AM";
var answer3 = "I don't know what you're talking about.";
var answer4 = "Imma fight you.";
var answer5 = "Stop! What are you doing? That's too much!";
var answer6 = "Let's skedoodle skedaddle out of here.";
var answer7 = "I yeeted a horse off a bridge.";
var answer8 = "I am an incredibly beautiful person.";

function progress1() {
	document.getElementById("answer").style.display = "inline";
	document.getElementById("submit").innerHTML = "CONTINUE";
	document.getElementById("submit").setAttribute("onclick", "continue1()");
}

function progress2() {
	document.getElementById("answer").style.display = "inline";
	document.getElementById("submit").innerHTML = "CONTINUE";
	document.getElementById("submit").setAttribute("onclick", "continue2()");
}

function progress3() {
	document.getElementById("answer").style.display = "inline";
	document.getElementById("submit").innerHTML = "CONTINUE";
	document.getElementById("submit").setAttribute("onclick", "continue3()");
}

function progress4() {
	document.getElementById("answer").style.display = "inline";
	document.getElementById("submit").innerHTML = "CONTINUE";
	document.getElementById("submit").setAttribute("onclick", "continue4()");
}

function progress5() {
	document.getElementById("answer").style.display = "inline";
	document.getElementById("submit").innerHTML = "CONTINUE";
	document.getElementById("submit").setAttribute("onclick", "continue5()");
}

function progress6() {
	document.getElementById("answer").style.display = "inline";
	document.getElementById("instruction").innerHTML = "Good job! Let's make this a little harder...";
	document.getElementById("submit").innerHTML = "CONTINUE";
	document.getElementById("submit").setAttribute("onclick", "continue6()");
}

function progress7() {
	document.getElementById("answer").style.display = "inline";
	document.getElementById("submit").innerHTML = "CONTINUE";
	document.getElementById("submit").setAttribute("onclick", "continue7()");
}

function progress8() {
	document.getElementById("answer").style.display = "inline";
	document.getElementById("submit").innerHTML = "CONTINUE";
	document.getElementById("submit").setAttribute("onclick", "continue8()");
}

function continue1() {
	document.getElementById("answer").style.display = "none";
	document.getElementById("answer").innerHTML = "Correct solution: " + answer2;
	document.getElementById("phrase").innerHTML = phrase2;
	document.getElementById("submit").innerHTML = "ENTER";
	document.getElementById("submit").setAttribute("onclick", "progress2()");
	document.getElementById("input").value = "";
}

function continue2() {
	document.getElementById("answer").style.display = "none";
	document.getElementById("answer").innerHTML = "Correct solution: " + answer3;
	document.getElementById("phrase").innerHTML = phrase3;
	document.getElementById("submit").innerHTML = "ENTER";
	document.getElementById("submit").setAttribute("onclick", "progress3()");
	document.getElementById("input").value = "";
}

function continue3() {
	document.getElementById("answer").style.display = "none";
	document.getElementById("answer").innerHTML = "Correct solution: " + answer4;
	document.getElementById("phrase").innerHTML = phrase4;
	document.getElementById("submit").innerHTML = "ENTER";
	document.getElementById("submit").setAttribute("onclick", "progress4()");
	document.getElementById("input").value = "";
}

function continue4() {
	document.getElementById("answer").style.display = "none";
	document.getElementById("answer").innerHTML = "Correct solution: " + answer5;
	document.getElementById("phrase").innerHTML = phrase5;
	document.getElementById("submit").innerHTML = "ENTER";
	document.getElementById("submit").setAttribute("onclick", "progress5()");
	document.getElementById("input").value = "";
}

function continue5() {
	document.getElementById("answer").style.display = "none";
	document.getElementById("answer").innerHTML = "Correct solution: " + answer6;
	document.getElementById("phrase").innerHTML = phrase6;
	document.getElementById("submit").innerHTML = "ENTER";
	document.getElementById("submit").setAttribute("onclick", "progress6()");
	document.getElementById("input").value = "";
}

function continue6() {
	document.getElementById("answer").style.display = "none";
	document.getElementById("answer").innerHTML = "Correct solution: " + answer7;
	document.getElementById("instruction").innerHTML = "Write this in English";
	document.getElementById("phrase").innerHTML = phrase7;
	document.getElementById("submit").innerHTML = "ENTER";
	document.getElementById("submit").setAttribute("onclick", "progress7()");
	document.getElementById("input").value = "";
}

function continue7() {
	document.getElementById("answer").style.display = "none";
	document.getElementById("answer").innerHTML = "Correct solution: " + answer8;
	document.getElementById("phrase").innerHTML = phrase8;
	document.getElementById("submit").innerHTML = "ENTER";
	document.getElementById("submit").setAttribute("onclick", "progress8()");
	document.getElementById("input").value = "";
}

function continue8() {
	document.getElementById("answer").style.display = "none";
	document.getElementById("phrase").innerHTML = phrase9;
	document.getElementById("submit").innerHTML = "ENTER";
	document.getElementById("submit").setAttribute("onclick", "");
	document.getElementById("input").value = "";
}

