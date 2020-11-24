//Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

//If There's Color Item In Local Storage
if(mainColors !== null) {

    document.documentElement.style.setProperty('--main-color', localStorage.getItem("color_option"));

    //Remove Active Class From All Childrens
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");

        //Add Active Class On Element With Data Color === Local Storage Item
        if (element.dataset.color === mainColors) {

            //Add Active Class
            element.classList.add("active");

        }
    });

};

// Random Background Option
let backgroundOption = true;

// Variable To Control The Background Interval
let backgroundInterval;

//Check If There's Local Storage Random Backgrount Item
let backgroundLocalItem = localStorage.getItem("random-background");

//Check If Random Backgroun Local Storage Is Not Empty
if (backgroundLocalItem !== null) {

    if(backgroundLocalItem === 'true') {

        backgroundOption = true;

    } else {

        backgroundOption = false;

    }

    //console.log(backgroundLocalItem);

    //Remove Active Class From All Spans
    document.querySelectorAll(".random-backgrounds span").forEach(element => {

        element.classList.remove("active");

    });

    if (backgroundLocalItem === 'true') {

        document.querySelector(".random-backgrounds .yes").classList.add("active");

    } else {

        document.querySelector(".random-backgrounds .no").classList.add("active");
    
    }

};

//Click On Toggle Settings Gear
document.querySelector(".toggle-settings .fa-gear").onclick = function() {

    // Toggle Class Fa-spin For Rotation on Self
    this.classList.toggle("fa-spin");

    // Toggle Class Open On Main Settings Box
    document.querySelector(".settings-box").classList.toggle("open");
};

//Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

colorsLi.forEach(li => {

    li.addEventListener("click", (e) => {
        
        //console.log(e.target.dataset.color);

        //Set Color On main color
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
 
        //Set Color On local Storage
        localStorage.setItem("color_option", e.target.dataset.color);

        handleActive(e);
    });

});

//Switch Colors
const randomBackEl = document.querySelectorAll(".random-background span");

randomBackEl.forEach(span => {

    span.addEventListener("click", (e) => {
        
        handleActive(e);

        if(e.target.dataset.background === 'yes') {

            backgroundOption = true;

            randomizeImgs();

            localStorage.setItem("background_option", true);

        } else {

            backgroundOption = false;

            clearInterval(backgroundInterval);

            localStorage.setItem("background_option", true);

        }
    });

});

//Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

//Get Array Of Images
let imgsArray = ["banner1.jpg", "banner2.jpg", "banner3.jpg", "banner4.jpg", "banner5.jpg"];


// Function To Randomize Imgs
function randomizeImgs() {

    if (backgroundOption === true) {

        backgroundInterval = setInterval(() => {

            //Get Random Number
            let randomeNumber = Math.floor(Math.random() * imgsArray.length);   
            
            //Change Background Image Url
        landingPage.style.backgroundImage = 'url("images/' + imgsArray[randomeNumber] + '")';
        
        }, 3000);
    }
};

// Select All Bullets 
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

allBullets.forEach(bullet => {

    bullet.addEventListener("click", (e) => {

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior: 'smooth'

        });

    });
});

//Handle Active State
function handleActive(ev) {

    //Remove Active Class From All Childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active");

    });

    //Add Active Class On Self
    ev.target.classList.add("active");

}

let bullsetsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets-option");

if (bulletLocalItem !== null) {

    bullsetsSpan.forEach(span => {
        span.classList.remove("active");
    });

    if(bulletLocalItem === 'block') {

        bulletsContainer.style.display = 'block';

        document.querySelector(".bullets-option .yes").classList.add("active");

    } else {

        bulletsContainer.style.display = 'none';

        document.querySelector(".bullets-option .no").classList.add("active");

    }

}

    bullsetsSpan.forEach(span => {

        span.addEventListener("click", (e) => {

            if (span.dataset.display === 'show') {

                bulletsContainer.style.display = 'block';

                localStorage.setItem("bullets-option", 'block');

            } else {

                bulletsContainer.style.display = 'none';

                localStorage.setItem("bullets-option", 'none');

            }

            handleActive(e);

        });

    });

//Reset Button 
document.querySelector(".reset-options").onclick = function () {

    localStorage.clear();
    //localStorage.removeItem("bullet-option");
    //localStorage.removeItem("color-option");
    //localStorage.removeItem("background-option");

    //Reload Window
    window.location.reload();

}

// Toggle Menu 
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function () {
    this.classList.toggle("menu-active");

    //Toggle Class "open" On Links
    tLinks.classList.toggle("open");
};

// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {

    if (e.target !== toggleBtn) {

        console.log("this is not the button");
        
    }
});

// Start Section Loading
let loadingOv = document.querySelector(".loading-overlay");
    window.addEventListener("load", function(event) {
        setTimeout(function(){
            console.log("Toutes les ressources sont chargées !");
            loadingOv.style.opacity = "0";
        }, 1000);
    });
