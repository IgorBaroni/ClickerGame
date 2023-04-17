let clicks = 0;
let thieves = 0;
let atms = 0;
let cars = 0;
let banks = 0;
let mansions = 0;
let clicksec = 0;


function update(){
	document.getElementById("clickcount").innerHTML = "Money: " + clicks;
	document.getElementById("clicksec").innerHTML = "CPS: " + clicksec;
}
function timer(){
	clicks = clicks + clicksec;
	update();
}
setInterval(timer, 1000)

function add(){
	clicks++;
	document.getElementById("clickcount").innerHTML = "Money: " + clicks;
	const msc = document.querySelector('audio')
    msc.src = "audio/seffct.mp3";
	msc.play();
}

function buy1(){
	var thiefprice = 10
	if(clicks >= thiefprice){
		clicks = clicks - thiefprice
		clicksec = clicksec + 1
		thieves++
		document.getElementById("thiefcount").innerHTML = " " + thieves
		const msc = document.querySelector('audio')
		msc.src = "audio/seffct2.mp3";
		msc.play();
		update()
	}else{
	const msc = document.querySelector('audio')
    msc.src = "audio/seffct3.mp3";
	msc.play();
	}
	
	
}

function buy2(){
	var atmprice = 100
	if(clicks >= atmprice){
		clicks = clicks - atmprice
		clicksec = clicksec + 5
		atms++
		document.getElementById("atmcount").innerHTML = " " + atms
		const msc = document.querySelector('audio')
		msc.src = "audio/seffct2.mp3";
		msc.play();
		update()
	}else{
	const msc = document.querySelector('audio')
    msc.src = "audio/seffct3.mp3";
	msc.play();
	}
}

function buy3(){
	var carprice = 500
	if(clicks >= carprice){
		clicks = clicks - carprice
		clicksec = clicksec + 25
		cars++
		document.getElementById("carcount").innerHTML = " " + cars
		const msc = document.querySelector('audio')
		msc.src = "audio/seffct2.mp3";
		msc.play();
		update()
	}else{
	const msc = document.querySelector('audio')
    msc.src = "audio/seffct3.mp3";
	msc.play();
	}
}

function buy4(){
	var bankprice = 1000
	if(clicks >= bankprice){
		clicks = clicks - bankprice
		clicksec = clicksec + 50
		banks++
		document.getElementById("bankcount").innerHTML = " " + banks
		const msc = document.querySelector('audio')
		msc.src = "audio/seffct2.mp3";
		msc.play();
		update()
	}else{
	const msc = document.querySelector('audio')
    msc.src = "audio/seffct3.mp3";
	msc.play();
	}
}

function buy5(){
	var mansionprice= 10000
	if(clicks >= mansionprice){
		clicks = clicks - mansionprice
		clicksec = clicksec + 500
		mansions++
		document.getElementById("mansioncount").innerHTML = " " + mansions
		const msc = document.querySelector('audio')
		msc.src = "audio/seffct2.mp3";
		msc.play();
		update()
	}else{
	const msc = document.querySelector('audio')
    msc.src = "audio/seffct3.mp3";
	msc.play();
	}
	
}

function save(){
	alert("game saved successfully!")
	const msc = document.querySelector('audio')
    msc.src = "audio/seffct4.mp3";
	msc.play();
	var gameSave = {
		clicks: clicks,
		clicksec: clicksec,
		thieves: thieves,
		atms: atms,
		cars: cars,
		banks: banks,
		mansions: mansions,
	}
	localStorage.setItem("gameSave", JSON.stringify(gameSave))
}
function load(){
	alert("game loaded successfully!")
	const msc = document.querySelector('audio')
    msc.src = "audio/seffct5.mp3";
	msc.play();
	var gameSaved = JSON.parse(localStorage.getItem("gameSave"))
	if (typeof gameSaved.clicks !== "undefined") clicks = gameSaved.clicks;
	if (typeof gameSaved.clicksec !== "undefined") clicksec = gameSaved.clicksec;
	if (typeof gameSaved.thieves !== "undefined") thieves = gameSaved.thieves;
	if (typeof gameSaved.atms !== "undefined") atms = gameSaved.atms;
	if (typeof gameSaved.cars !== "undefined") cars = gameSaved.cars;
	if (typeof gameSaved.banks !== "undefined") banks = gameSaved.cars;
	if (typeof gameSaved.mansions !== "undefined") mansions = gameSaved.mansions;
	document.getElementById("clickcount").innerHTML = "Money: " + clicks;
	document.getElementById("clicksec").innerHTML = "CPS: " + clicksec;
	document.getElementById("thiefcount").innerHTML = " " + thieves;
	document.getElementById("atmcount").innerHTML = " " + atms;
	document.getElementById("carcount").innerHTML = " " + cars;
	document.getElementById("bankcount").innerHTML = " " + banks;
	document.getElementById("mansioncount").innerHTML = " " + mansions;
}
function reset(){
	if (confirm("Are you sure you want to reset your game? (You'll lose all your saves!)")){
		var gameSave = {};
		localStorage.setItem("gameSave", JSON.stringify(gameSave));
		location.reload();
	}
}

		
	
		

