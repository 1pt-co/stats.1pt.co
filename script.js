window.onload = function () {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      document.querySelector("#links").innerHTML =
        data.total_links + " unique links";
      document.querySelector("#clicks").innerHTML =
        data.total_visits + " total clicks";
      document.querySelector("h1").innerHTML = "Stats";
    } else if (this.readyState == 4 && this.status == 404) {
    }
  };

  xhttp.open("GET", "https://api.1pt.co/getStats", true);
  xhttp.send();
};
