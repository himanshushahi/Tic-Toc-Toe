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

let clickFlagForTied = 0;
let button = document.getElementsByTagName("td");
let click = 0;
let td = document.getElementsByTagName("td");

let modalBackground = document.getElementById("modal-background");
let result2 = document.getElementById("result2");
let modal = document.getElementById("modal");

document.getElementById("ok").addEventListener("click", () => {
  modal.style.transform = "translateY(-200%)";
  modalBackground.style.visibility = "hidden";
  modalBackground.style.opacity = "0";
  modalBackground.style.transition = "opacity 300ms easeInOut";
  click = 0;
});

function checkForWin(forWinner) {
  for (let i = 0; i < winningCombinations.length; i++) {
    if (
      td[winningCombinations[i][0]].innerText == "X" &&
      td[winningCombinations[i][1]].innerText == "X" &&
      td[winningCombinations[i][2]].innerText == "X"
    ) {
      forWinner("X Wons");
      clickFlagForTied = 0;
      return;
    } else if (
      td[winningCombinations[i][0]].innerText == "O" &&
      td[winningCombinations[i][1]].innerText == "O" &&
      td[winningCombinations[i][2]].innerText == "O"
    ) {
      forWinner("O Wons");
      clickFlagForTied = 0;
      return;
    } else {
      if (clickFlagForTied == 9) {
        forWinner("Match Tied");
        clickFlagForTied = 0;
      }
    }
  }
}

let reset = () => {
  document.getElementById("reset").addEventListener("click", () => {
    let resetModalBackground = document.getElementById(
      "forResetModalBackground"
    );
    let resetModal = document.getElementById("forResetModal");
    Array.from(td).forEach((elem) => {
      if (elem.innerText != "") {
        resetModal.style.transform = "translateY(0%)";
        resetModalBackground.style.visibility = "visible";
        resetModalBackground.style.opacity = "1";
        resetModalBackground.style.transition = "opacity 300ms easeInOut";
      }
    });
    function cheackIfYes() {
      return new Promise((resolve, reject) => {
        document.getElementById("Yes").addEventListener("click", () => {
          resolve(true);
        });
        document.getElementById("No").addEventListener("click", () => {
          reject(false);
        });
      });
    }

    cheackIfYes()
      .then(() => {
        clickFlagForTied = 0;
        Array.from(button).forEach((e) => {
          e.innerText = "";
        });
        resetModal.style.transform = "translateY(-200%)";
        resetModalBackground.style.visibility = "hidden";
        resetModalBackground.style.opacity = "0";
        resetModalBackground.style.transition = "opacity 300ms easeInOut";
        click = 0;
      })
      .catch(() => {
        resetModal.style.transform = "translateY(-200%)";
        resetModalBackground.style.visibility = "hidden";
        resetModalBackground.style.opacity = "0";
        resetModalBackground.style.transition = "opacity 300ms easeInOut";
      });
  });
};

function forWinner(wins) {
  if (wins == "Match Tied") {
    modalBackground.style.visibility = "visible";
    modalBackground.style.opacity = "1";
    result2.textContent = wins;
    modal.style.transform = "translateY(0%)";
    document.getElementById("img").style.display = "none";
    click = 0;
    setTimeout(() => {
      Array.from(td).forEach((elem) => {
        elem.innerText = "";
      });
    }, 1000);
  } else {
    modalBackground.style.visibility = "visible";
    modalBackground.style.opacity = "1";
    result2.textContent = wins;
    modal.style.transform = "translateY(0%)";
    document.getElementById("img").style.display = "block";
    setTimeout(() => {
      Array.from(td).forEach((elem) => {
        elem.innerText = "";
      });
    }, 1000);
    click = 0;
  }
}

Array.from(button).forEach((e) => {
  e.addEventListener("click", () => {
    click++;
    if (e.innerText == "") {
      clickFlagForTied++;
    }

    if (e.innerText == "") {
      click % 2 == 0 ? (e.innerText = "O") || click-- : (e.innerText = "X");
    } else {
      click--;
    }
    checkForWin(forWinner);
    reset();
  });
});
