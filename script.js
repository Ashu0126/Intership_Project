var secondPrice = document
  .getElementById("price-second")
  .addEventListener("click", changeSecond);

var firstPrice = document
  .getElementById("price-first")
  .addEventListener("click", changeFirst);

function changeSecond() {
  document.querySelector(".price-second").classList.toggle("active");
  document.querySelector(".details img").classList.toggle("active");
}

function changeFirst() {
  document.querySelector(".popular").classList.toggle("active");
  document.querySelector(".price-first").classList.toggle("active");
}
