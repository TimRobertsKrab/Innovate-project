function darkMode(){
    let e = document.getElementsByTagName("header");
    e[0].classList.toggle("dark-mode");
    let x = document.getElementsByClassName("nav-links");
    x[0].classList.toggle("dark-mode");
    i = document.getElementById("dark-mode");
    i.classList.toggle("dark-mode");
    document.getElementsByTagName("main")[0].classList.toggle("dark-mode");
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


function time(){
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");
    const date = new Date();

    const totalSeconds = date/1000;

    const hours = (Math.floor(totalSeconds/3600)%24) + 1;
    const mins = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds)%60;

    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? (`0${time}`):time;
}


setInterval(time,1000)

function error(){
    alert("Payment functionality coming soon")
}