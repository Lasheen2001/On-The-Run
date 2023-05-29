var cashBackAmount = 0;

function swapPoints() {
  var pointsInput = document.getElementById("pointsInput");
  var currentPoints = document.getElementById("currentPoints");
  var warning = document.getElementById("warning");
  var cashBack = document.getElementById("cashBackAmount");

  var points = parseInt(pointsInput.value);
  var current = parseInt(currentPoints.innerText);

  if (points % 10000 === 0 && points >= 10000) {
    if (points <= current) {
      var cashBackValue = points / 10000 * 100;
      currentPoints.innerText = current - points;
      cashBackAmount += cashBackValue;
      cashBack.innerText = cashBackAmount;
      warning.innerText = "";
      pointsInput.value = ""; // Clear the input field
      alert("You will receive £" + cashBackValue + " cash back.");
    } else {
      warning.innerText = "You cannot exceed your available balance.";
    }
  } else {
    warning.innerText = "Please enter a valid number of points (must be a multiple of 10000).";
  }
}

function confirmRedirect() {
  var confirmation = confirm("Are you sure you want to proceed?");
  if (confirmation) {
    window.location.href = "credit_card_home.html";
  }
}