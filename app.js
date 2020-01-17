document.getElementById("menu").addEventListener('click', function (e) {
  debugger;
  if (!e.target.className) {
    e.target.className = "purple";
  } else if (e.target.className === "purple") {
    e.target.className = "blue";
  } else if (e.target.className === "blue") {
    e.target.className = "red";
  } else if (e.target.className === "red") {
    e.target.className = "";
  }

}); 