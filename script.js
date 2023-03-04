const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let oIndex = [];
let xindex = [];
let button = document.getElementsByTagName("td");
let click = 0;
let td = document.getElementsByTagName("td");

function checkForWin() {
  for (let i = 0; i < winningCombinations.length; i++) {
    if (
      td[winningCombinations[i][0]].innerText == "X" &&
      td[winningCombinations[i][1]].innerText == "X" &&
      td[winningCombinations[i][2]].innerText == "X"
    ) {
      document.getElementById("result").innerText = "X Wons";
      return;
    } else if (
      td[winningCombinations[i][0]].innerText == "O" &&
      td[winningCombinations[i][1]].innerText == "O" &&
      td[winningCombinations[i][2]].innerText == "O"
    ) {
      document.getElementById("result").innerText = "O Wons";
      return;
    } else {
    }
  }
}
let reset = () => {
  document.getElementById("reset").addEventListener("click", () => {
    Array.from(button).forEach((e, t) => {
      button[t].innerText = "";
    });
    click = 0;
    document.getElementById("result").innerText = "Game Started";
  });
};

let body = document.getElementsByTagName("body")[0];
let theme = document.getElementById("theme");
let icon = document.getElementsByTagName("i");
let click_theme = 0;

theme.addEventListener("click", () => {
  click_theme++;
  if (theme.innerHTML == '<i class="fa-solid fa-moon fa-3x"></i>') {
    theme.innerHTML = '<i class="fa-solid fa-sun fa-2x"></i>';
  } else {
    theme.innerHTML = '<i class="fa-solid fa-moon fa-3x"></i>';
  }
  if (click_theme % 2 == 0) {
    body.style.backgroundColor = "rgb(205, 197, 197)";
    theme.style.backgroundColor = "rgb(205, 197, 197)";
    theme.style.color = "black";
  } else {
    body.style.backgroundColor = "rgb(35, 33, 33)";
    theme.style.backgroundColor = "rgb(35, 33, 33)";
    theme.style.color = "white";
  }
});

Array.from(button).forEach((e) => {
  e.addEventListener("click", () => {
    click++;

    if (e.innerText == "") {
      click % 2 == 0
        ? (e.innerText = "O") || click--
        : (e.innerText = "X");
    } else {
      click--;
    }
    checkForWin();
    reset();
  });
});
