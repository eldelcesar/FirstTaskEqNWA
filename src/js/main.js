// Request Info from Firebase
window.onload = loadContent;

function loadContent(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://raw.githubusercontent.com/miker1423/FirstTaskEqNWA/master/test.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var raw = xhttp.responseText;
            var json = JSON.parse(raw);
            
            var miguel = document.getElementById("miguel");
            miguel.innerHTML += '<h3>' + json.value.miguel.nombre + '</h3><p>' + json.value.miguel.contenido + '</p>';
            miguel.innerHTML += '<button onclick="popImage()">CLICK</button><img id="miguel-img" src="img/miguel.jpeg">';

            var paco = document.getElementById("paco");
            paco.innerHTML += '<h3>' + json.value.paco.nombre + '</h3><p>' + json.value.paco.contenido + '</p>';

            var dennis = document.getElementById("dennis");
            dennis.innerHTML += '<h3>' + json.value.dennis.nombre + '</h3><p>' + json.value.dennis.contenido + '</p>';

            var cesar = document.getElementById("cesar");
            cesar.innerHTML += '<h3>' + json.value.cesar.nombre + '</h3><p>' + json.value.cesar.contenido + '</p>';

            var intro = document.getElementById("intro");
            intro.innerHTML += '<h3>Introduction</h3><p>' + json.value.proyecto.intro + '</p>';

            var desc = document.getElementById("desc");
            desc.innerHTML += '<h3>Description</h3><p>' + json.value.proyecto.descripcion + '</p>';
        }
    };
}


function popImage(){
    var img = document.getElementById("miguel-img");
    
    if (img.className != "show"){
        img.className = "show";
    }
    else {
        img.className = "";
    }
}