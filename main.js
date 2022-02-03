var boxTxt1 = document.querySelector("#box-1");
var boxTxt2 = document.querySelector("#box-2");
var boxTxt3 = document.querySelector("#box-3");
var boxTxt4 = document.querySelector("#box-4");
var boxTxt5 = document.querySelector("#box-5");
var boxTxt6 = document.querySelector("#box-6");
var boxTxt7 = document.querySelector("#box-7");
var boxTxt8 = document.querySelector("#box-8");
var boxTxt9 = document.querySelector("#box-9");
var win = false;
var disPlay = document.querySelector(".display-player");
var numClicked = 0;
var zeus = document.querySelector(".display-win-zeus").textContent;
var kratos = document.querySelector(".display-win-kratos").textContent;
var winnerDisplay1 = document.querySelector(".winner-kratos-left");
var winnerDisplay2 = document.querySelector(".winner-zeus-right");
var section = document.querySelector(".container");
var draw = document.querySelector(".draw");
function xOMaker(event) {
  var boxClicked = event.target;
  if (boxClicked.tagName === "DIV") {
    if (boxClicked.textContent === "" && numClicked % 2) {
      boxClicked.textContent = "☇";
      numClicked = numClicked + 1;
      disPlay.textContent = "KRATΩS";

      if (
        boxTxt1.textContent == "☇" &&
        boxTxt2.textContent == "☇" &&
        boxTxt3.textContent == "☇"
      ) {
        winnerDisplay2.textContent = "WINS";
        win = true;
        section.removeEventListener("click", xOMaker);
      } else if (
        boxTxt4.textContent == "☇" &&
        boxTxt5.textContent == "☇" &&
        boxTxt6.textContent == "☇"
      ) {
        winnerDisplay2.textContent = "WINS";
        win = true;
        section.removeEventListener("click", xOMaker);
      } else if (
        boxTxt7.textContent == "☇" &&
        boxTxt8.textContent == "☇" &&
        boxTxt9.textContent == "☇"
      ) {
        winnerDisplay2.textContent = "WINS";
        win = true;
        section.removeEventListener("click", xOMaker);
      } else if (
        boxTxt1.textContent == "☇" &&
        boxTxt5.textContent == "☇" &&
        boxTxt9.textContent == "☇"
      ) {
        winnerDisplay2.textContent = "WINS";
        win = true;
        section.removeEventListener("click", xOMaker);
      } else if (
        boxTxt3.textContent == "☇" &&
        boxTxt5.textContent == "☇" &&
        boxTxt7.textContent == "☇"
      ) {
        winnerDisplay2.textContent = "WINS";
        win = true;
        section.removeEventListener("click", xOMaker);
      } else if (
        boxTxt1.textContent == "☇" &&
        boxTxt4.textContent == "☇" &&
        boxTxt7.textContent == "☇"
      ) {
        winnerDisplay2.textContent = "WINS";
        win = true;
        section.removeEventListener("click", xOMaker);
      } else if (
        boxTxt2.textContent == "☇" &&
        boxTxt5.textContent == "☇" &&
        boxTxt8.textContent == "☇"
      ) {
        winnerDisplay2.textContent = "WINS";
        win = true;
        section.removeEventListener("click", xOMaker);
      } else if (
        boxTxt3.textContent == "☇" &&
        boxTxt6.textContent == "☇" &&
        boxTxt9.textContent == "☇"
      ) {
        winnerDisplay2.textContent = "WINS";
        win = true;
        section.removeEventListener("click", xOMaker);
      }
      if (numClicked == 9 && win == false) {
        draw.textContent = "DRAW";
        console.log(numClicked + "X");
      }
    } else if (boxClicked.textContent === "") {
      boxClicked.textContent = "Ω";
      numClicked = numClicked + 1;
      disPlay.textContent = "ZEU☇S";
      console.log("o" + numClicked);
    }
  }
  if (
    boxTxt1.textContent == "Ω" &&
    boxTxt2.textContent == "Ω" &&
    boxTxt3.textContent == "Ω"
  ) {
    winnerDisplay1.textContent = "WINS";
    win = true;
    section.removeEventListener("click", xOMaker);
  } else if (
    boxTxt4.textContent == "Ω" &&
    boxTxt5.textContent == "Ω" &&
    boxTxt6.textContent == "Ω"
  ) {
    winnerDisplay1.textContent = "WINS";
    win = true;
    section.removeEventListener("click", xOMaker);
  } else if (
    boxTxt7.textContent == "Ω" &&
    boxTxt8.textContent == "Ω" &&
    boxTxt9.textContent == "Ω"
  ) {
    winnerDisplay1.textContent = "WINS";
    win = true;
    section.removeEventListener("click", xOMaker);
  } else if (
    boxTxt1.textContent == "Ω" &&
    boxTxt5.textContent == "Ω" &&
    boxTxt9.textContent == "Ω"
  ) {
    winnerDisplay1.textContent = "WINS";
    win = true;
    section.removeEventListener("click", xOMaker);
  } else if (
    boxTxt3.textContent == "Ω" &&
    boxTxt5.textContent == "Ω" &&
    boxTxt7.textContent == "Ω"
  ) {
    winnerDisplay1.textContent = "WINS";
    win = true;
    section.removeEventListener("click", xOMaker);
  } else if (
    boxTxt1.textContent == "Ω" &&
    boxTxt4.textContent == "Ω" &&
    boxTxt7.textContent == "Ω"
  ) {
    winnerDisplay1.textContent = "WINS";
    win = true;
    section.removeEventListener("click", xOMaker);
  } else if (
    boxTxt2.textContent == "Ω" &&
    boxTxt5.textContent == "Ω" &&
    boxTxt8.textContent == "Ω"
  ) {
    winnerDisplay1.textContent = "WINS";
    win = true;
    section.removeEventListener("click", xOMaker);
  } else if (
    boxTxt3.textContent == "Ω" &&
    boxTxt6.textContent == "Ω" &&
    boxTxt9.textContent == "Ω"
  ) {
    winnerDisplay1.textContent = "WINS";
    win = true;
    section.removeEventListener("click", xOMaker);
  }
  if (numClicked == 9 && win == false) {
    draw.textContent = "DRAW";
  }
}

section.addEventListener("click", xOMaker);

var button = document.querySelector(".reset");
button.addEventListener("click", function () {
  window.location.reload();
});
