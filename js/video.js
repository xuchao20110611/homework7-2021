var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

 document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	 let video = document.getElementById("player1");
	 video.play();
	 let volume = document.getElementById("volume");
	 let slider= document.getElementById("slider");
	 volume.innerHTML=slider.value + "%";
 });

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	let video = document.getElementById("player1");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {

	let video = document.getElementById("player1");
	video.playbackRate *= 0.95;
	console.log("New speed %s",video.playbackRate);
	video.play();
});

document.querySelector("#faster").addEventListener("click", function() {

	let video = document.getElementById("player1");
	video.playbackRate /= 0.95;
	console.log("New speed %s",video.playbackRate);
	video.play();
});



document.querySelector("#skip").addEventListener("click", function() {

	let video = document.getElementById("player1");
	if(video.currentTime +15 >=video.duration)
	{
		video.currentTime=0;

	}
	else
	{
		video.currentTime+=15;
	}
	console.log("Current time is %s",video.currentTime);
	video.play();
});

document.querySelector("#mute").addEventListener("click", function() {

	let video = document.getElementById("player1");
	let mutebo=document.getElementById("mute");
	if(video.muted)
	{
		video.muted=false;
		mutebo.innerHTML="Mute";
	}
	else
	{
		video.muted=true;
		mutebo.innerHTML="Unmute";
	}
});

document.getElementById("slider").oninput=function (e) {
	let video = document.getElementById("player1");
	video.volume=e.target.value/100;
	console.log("The value now is %s",video.volume)
	let volume = document.getElementById("volume");
	volume.innerHTML=e.target.value + "%";
}


document.querySelector("#vintage").addEventListener("click", function() {
	let video = document.getElementById("player1");
	video.className="oldSchool";
});

document.querySelector("#orig").addEventListener("click", function() {
	let video = document.getElementById("player1");
	video.className="video";
});