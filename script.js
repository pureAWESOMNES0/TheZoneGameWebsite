const darkLight = ["Light", "Dark"]
let selected = 0;
function darkMode() {
  document.getElementById("button").innerHTML = darkLight[selected] + " Mode";
  selected = (selected * -1) + 1;
  if(selected > 0) {
    document.getElementById("link").setAttribute("href", "dark.css");
  }
  else {
    document.getElementById("link").setAttribute("href", "style.css");
  }
}