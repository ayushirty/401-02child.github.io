document.querySelector(".children li:first-child").style =
  "background-color:blue;color:white";
document.querySelector(".children li:last-child").style =
  "background-color:palevioletred;color:white";
document.querySelector(".children li:nth-child(9)").style =
  "background-color:green;color:white";
document
  .querySelectorAll(".children li:nth-child(even)")
  .forEach(element => (element.style = "background-color:lime;color:white"));