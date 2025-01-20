// Start Toggler In Header

let togglerBtn = document.querySelector(".navbar .toggler");
let navUl = document.querySelector(".navbar ul");

togglerBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  navUl.classList.toggle("show");
  togglerBtn.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (
    navUl.classList.contains("show") &&
    !navUl.contains(e.target) &&
    e.target !== togglerBtn
  ) {
    navUl.classList.remove("show");
    togglerBtn.classList.remove("active");
  }
});

// End Toggler In Header

/* ============================================================================== */

// Start Featured Work

let lis = document.querySelectorAll(".work ul li");
let imgs = document.querySelectorAll(".work .images img");

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");

    // loop on imgs
    imgs.forEach((img) => {
      img.style.display = "none";
    });
    document.querySelectorAll(e.target.dataset.work).forEach((img) => {
      img.style.display = "inline-block";
    });
  });
});

// End Featured Work

/* ============================================================================== */

// Start Section Statistics

let statistics = document.querySelector(".our-statistics");
let numbersCount = document.querySelectorAll(".our-statistics .number");

let isCounting = false;

window.onscroll = function () {
  if (isCounting) return; // If counting is in progress, do nothing

  if (window.scrollY >= statistics.offsetTop - 300) {
    isCounting = true; // Start counting
    numbersCount.forEach((n) => {
      let startCount = 0;
      let endCount = parseInt(n.dataset.number); // Get the target count from data-number

      let counter = setInterval(() => {
        if (startCount < endCount) {
          startCount += Math.ceil((endCount - startCount) / 10); // Adjust the speed of counting
          n.textContent = startCount.toLocaleString();
        } else {
          n.textContent = endCount.toLocaleString();
          clearInterval(counter); // Stop counting once reached the target
        }
      }, 50); // Adjust the interval for smoother animation
    });
  }
};

// End Section Statistics

// ================================================================================= //

// Wow Library
new WOW().init();

// ================================================================================= //
