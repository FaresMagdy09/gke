let buttons = document.querySelectorAll(".lesson");

let video = document.getElementById("video");

let links = [
  "https://www.youtube.com/embed/_8A4yTASMLc",
  "https://www.youtube.com/embed/ZtdeybFrPO8",
  "https://www.youtube.com/embed/USW8_gV_Hnw",
  "https://www.youtube.com/embed/ub7S6xCCSKw",
  "https://www.youtube.com/embed/DLu4KPSn-uE",
  "https://www.youtube.com/embed/uCYv55twbhE",
  "https://www.youtube.com/embed/CyCS3RTE_jg",
  "https://www.youtube.com/embed/53oHBQt1nHg",
  "https://www.youtube.com/embed/0xYTcZvVCuI"

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



