// Variablar

var cloud = document.getElementById("cloud");
var blurry = document.getElementById("blurry");
var wind = document.getElementById("wind");
var result = document.getElementById("result");

// What

function whatEnter() {
    result.innerHTML = "";
    for (var i = 0; i < diss.length; i++) {
        console.info("start")
        if (diss[i]["what"]["cloud"] == cloud.checked) {
            console.log("cloud");
            if (diss[i]["what"]["blurry"] == blurry.checked) {
                console.log("cloud, blurry");
                if (diss[i]["what"]["wind"] == wind.checked) {
                    console.log("all");
                    var item = result.appendChild(document.createElement("li"));
                    item.innerText = diss[i]["sve"];
                }
            }
        }
    }
}