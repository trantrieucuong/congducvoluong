const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const sound1 = document.querySelector(".sound"); // Use consistent variable names
const sound2 = document.querySelector(".sound2");

const randomText = document.querySelector("#random-text");
const textArray = [
  "Công đức vô lượng +1",
  "Tích đức +1",
  " Phúc lộc +1",
  "Thọ lộc +1",
  "Tài lộc +1",
  "Tình duyên +1",
  "Tình thân +1",
  "Tình cảm +1",
  "phú quý +1",
  "Sức khỏe +1",
  "An khang +1",
  "Thịnh vượng +1",
  "Hạnh phúc +1",
  "May mắn +1",
  "Thành công +1",
  "Tình yêu +1",
  "Hạnh phúc +1",
  "Tình bạn +1",
  "Ăn chơi +1",
];
function replaySound1() {
  sound1.play();
  randomText.textContent =
    textArray[Math.floor(Math.random() * textArray.length)];
}
function replaySound2() {
  sound2.currentTime = 0;
  sound2.play();
  randomText.textContent =
    textArray[Math.floor(Math.random() * textArray.length)];
}

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 38) {
    replaySound1();
    btn1.classList.add("active");
    randomText.classList.add("fly")
  } else if (event.keyCode === 40) {
    replaySound2();
    btn2.classList.add("active"); 
    randomText.classList.add("fly")
    // Add active class on press
  }

  // Add event listener for keyup to remove the active class
  document.addEventListener("keyup", (event) => {
    if (event.keyCode === 38 || event.keyCode === 40) {
      btn1.classList.remove("active");
      btn2.classList.remove("active");
      randomText.classList.remove("fly");
    }
  });
});

btn1.addEventListener("click", () => {
  replaySound1();
});
btn2.addEventListener("click", () => {
  replaySound2();
});
