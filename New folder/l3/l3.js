let buttons = document.querySelectorAll(".lesson");

let video = document.getElementById("video");

let links = [
  "https://www.youtube.com/embed/X5e26QxffEA",
  "https://www.youtube.com/embed/e7nXU1ymkOo",
  "https://www.youtube.com/embed/GuzRG6qHUpc",
  "https://www.youtube.com/embed/iJm8_qxFAPA",
  "https://www.youtube.com/embed/P6A2PLFSNNs",
  "https://www.youtube.com/embed/R70J-brdA1E",
  "https://www.youtube.com/embed/CcSHmOYVR18",
  "https://www.youtube.com/embed/sqOm4bLnSso",
  "https://www.youtube.com/embed/jrLCQYxEPkY "

  ];

function play(l) {
  video.setAttribute("src", l);
}

buttons[0].onclick = function() { play(links[0]); }

buttons[1].onclick = function() { play(links[1]); }

buttons[2].onclick = function() { play(links[2]); }

buttons[3].onclick = function() { play(links[3]); }

buttons[4].onclick = function() { play(links[4]); }

buttons[5].onclick = function() { play(links[5]); }

buttons[6].onclick = function() { play(links[6]); }

buttons[7].onclick = function() { play(links[7]); }

buttons[8].onclick = function() { play(links[8]); }



