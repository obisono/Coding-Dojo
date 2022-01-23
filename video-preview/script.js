console.log("page loaded...");
// document.querySelector(".video-1").addEventListener("mouseover", (event) => {event.target.play() });
undefined
//video-1
document.querySelector(".video-1").addEventListener("mouseout", (event) => {event.target.pause() });
document.querySelector(".video-1").onmouseover = function (event) { event.target.play() }
//video-2
document.querySelector(".video-2").addEventListener("mouseout", (event) => {event.target.pause() });
document.querySelector(".video-2").onmouseover = function (event) { event.target.play() }
//video-3
document.querySelector(".video-3").addEventListener("mouseout", (event) => {event.target.pause()  });
document.querySelector(".video-3").onmouseover = function (event) { event.target.play() }
//video-4
document.querySelector(".video-4").addEventListener("mouseout", (event) => {event.target.pause()  });
document.querySelector(".video-4").onmouseover = function (event) { event.target.play() } 