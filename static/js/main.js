function darkMode(){
    let e = document.getElementsByTagName("header");
    e[0].classList.toggle("dark-mode");
    let x = document.getElementsByClassName("nav-links");
    x[0].classList.toggle("dark-mode");
    i = document.getElementById("dark-mode");
    i.classList.toggle("dark-mode");
    document.body.classList.toggle("dark-mode");
}

let pages = ["/planets/mercury","/planets/venus","/planets/earth","/planets/mars","/planets/jupiter","/planets/saturn","/planets/uranus","/planets/neptune", "/dwarf-planets"];

let baseURL = "http://127.0.0.1:8000"
function randomPage(){
    let i = Math.floor(Math.random() * pages.length);
    let url = baseURL + pages[i];
    window.location = url;
}


function showDwarfPlanet(value){
    let ceres = document.getElementById("ceres")
    let eris = document.getElementById("eris")
    let pluto = document.getElementById("pluto")
    let haumea = document.getElementById("haumea")
    let makemake = document.getElementById("makemake")
    if (value == "ceres"){
        ceres.style.display = "block"
        eris.style.display = "none"
        pluto.style.display = "none"
        haumea.style.display = "none"
        makemake.style.display = "none"
    }
    else if (value == "eris"){
        ceres.style.display = "none"
        eris.style.display = "block"
        pluto.style.display = "none"
        haumea.style.display = "none"
        makemake.style.display = "none"
    }
    else if (value == "pluto"){
        ceres.style.display = "none"
        eris.style.display = "none"
        pluto.style.display = "block"
        haumea.style.display = "none"
        makemake.style.display = "none"
    }
    else if (value == "haumea"){
        ceres.style.display = "none"
        eris.style.display = "none"
        pluto.style.display = "none"
        haumea.style.display = "block"
        makemake.style.display = "none"
    }
    else if (value == "makemake"){
        ceres.style.display = "none"
        eris.style.display = "none"
        pluto.style.display = "none"
        haumea.style.display = "none"
        makemake.style.display = "block"
    }    
}