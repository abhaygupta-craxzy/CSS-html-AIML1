const inputs = document.querySelectorAll(".input input");
const locks = document.querySelectorAll(".lock");

inputs.forEach(input => {
  input.addEventListener("input", () => {
    const check = input.parentElement.querySelector(".check");

    if (input.value.length > 3) {
      check.style.display = "block";

      locks.forEach(lock => {
        lock.classList.add("active");
        lock.classList.remove("error");
      });
    } else {
      check.style.display = "none";

      locks.forEach(lock => {
        lock.classList.remove("active");
      });
    }
  });
});

document.querySelector(".login-btn").addEventListener("click", () => {
  document.querySelector(".hud-frame").classList.remove("scan-active");
});


/* Fake login validation */
document.querySelector(".login-btn").addEventListener("click", () => {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user.length < 4 || pass.length < 4) {
    locks.forEach(lock => {
      lock.classList.add("error");
    });
  } else {
    alert("Login successful (demo)");
  }
});
