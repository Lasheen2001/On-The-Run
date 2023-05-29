// Open Popup
var openBtns = document.getElementsByClassName("openBtn");
for (var i = 0; i < openBtns.length; i++) {
  openBtns[i].addEventListener("click", function() {
    var popupId = this.getAttribute("data-popup");
    document.getElementById(popupId).style.display = "flex";
  });
}

// Close Popup
var closeBtns = document.getElementsByClassName("closeBtn");
for (var i = 0; i < closeBtns.length; i++) {
  closeBtns[i].addEventListener("click", function() {
    this.closest(".popup").style.display = "none";
  });
}
