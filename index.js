let folloBtn = document.querySelector(".btn .folloBtn");
let unfolloBtn = document.querySelector(".btn .unfolloBtn");
let social = document.querySelectorAll(".socialStats span");

let love = document.querySelector(".left");
let loveImg = document.querySelector(".loveImg");

let follow = false;
folloBtn.addEventListener("click", function () {
  if (!follow) {
    social.forEach((e) => {
      let val = parseInt(e.innerText);
      e.innerText = val + 1;
    });
    folloBtn.innerText = "Following";
    unfolloBtn.style.display = "block";
    follow = true;
  }
});

unfolloBtn.addEventListener("click", function () {
  if (follow == true) {
    social.forEach((e) => {
      let val = parseInt(e.innerText);
      e.innerText = val - 1;
    });
    folloBtn.innerText = "Follow";
    unfolloBtn.style.display = "none";
    follow = false;
  }
});

love.addEventListener("dblclick", function () {
  loveImg.style.opacity = 1;
  loveImg.style.transform = "translate(-50%, -50%) scale(2)";

  setTimeout(function () {
    loveImg.style.opacity = 0;
    loveImg.style.transform = "translate(-50%, -50%) scale(0)";
  }, 2000);
});
