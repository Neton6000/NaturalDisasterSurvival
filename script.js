// Variablar

var cloud = document.getElementById("cloud");
var blurry = document.getElementById("blurry");
var wind = document.getElementById("wind");
var result = document.getElementById("result");

var lang = "sve";

function setLang(lang_) {
    lang = lang_    
}

// What

function whatEnter() {
    result.innerHTML = "";
    for (var i = 0; i < diss.length; i++) {

        if (diss[i]["what"]["cloud"] == cloud.checked) {

            if (diss[i]["what"]["blurry"] == blurry.checked) {

                if (diss[i]["what"]["wind"] == wind.checked) {

                    var item = result.appendChild(document.createElement("li"));
                    item.innerText = diss[i][lang];

                }
            }
        }
    }
}
