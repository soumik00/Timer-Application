var count = document.querySelector(".count");
const audio = document.querySelector(".audio");
var submit = document.querySelector(".submit");
var one = document.querySelector(".one");
const time = document.querySelector(".Time");

submit.addEventListener("click", () => {
  var count1 = document.querySelector(".text").value;
  // console.log(text);
  setInterval(() => {
    if (count1 > 0) {
      count1--;
      count.textContent = count1;
      audio.play();
    } else {
      // count.textContent = "Time is over";
      audio.pause();
      window.scrollTo(0, 500);
      one.style.opacity = 1;
      // alert("⏰ Time is over reload the page and press ok button");
    }
  }, 1000);
});

// Audio play function
