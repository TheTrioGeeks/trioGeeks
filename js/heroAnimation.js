function addOrderClass() {
  var screenWidth = window.innerWidth;
  var heroPrimary = document.getElementById("heroPrimary");
  var heroSecondary = document.getElementById("heroSecondary");
  var heroTertiary = document.getElementById("heroTertiary");

  if (screenWidth <= 576) {
      heroPrimary.classList.add("order-1");
      heroSecondary.classList.add("order-2");
      heroTertiary.classList.add("order-3");
  } else {
      heroPrimary.classList.remove("order-1");
      heroSecondary.classList.remove("order-2");
      heroTertiary.classList.remove("order-3");
  }
}
window.addEventListener("resize", function() {
  addOrderClass();
});
addOrderClass();