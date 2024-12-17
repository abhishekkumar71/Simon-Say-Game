let gameSeq = [];
let userSeq = [];
let level = 0;
let start = false;
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

let btns = ["green", "red", "yellow", "blue"];
let highestScore = 0;
let currScore = 0;
document.addEventListener("keypress", function () {
  if (start == false) {
    // console.log("Game started");
    start = true;
    levelUp();
  }
});
function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  // console.log(randIdx);
  // console.log(randColor);
  // console.log(randBtn);
  gameSeq.push(randColor);
  // console.log(gameSeq);
  btnFlash(randBtn);
}

function btnPress() {
  // console.log(this);
  let btn = this;
  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  // console.log(userSeq);

  btnFlash(btn);
  checkAns(userSeq.length - 1);
}
function checkAns(idx) {
  if (userSeq[idx] == gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    currScore = level;
    if (currScore > highestScore) {
      highestScore = currScore;
      h3.innerText = `highest Score: ${highestScore}`;
    }
    h2.innerHTML = `Game Over!! your score was <b>${level}<b> <br>Press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 200);
    reset();
  }
}
function reset() {
  start = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
