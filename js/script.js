const ACTIVE_KEY = "active";


// 메인 배너 롤링
const mainLeftTop = document.querySelectorAll(".left___top");
const mainLeftText = document.querySelectorAll(".left___text");
const mainRightImg = document.querySelectorAll(".right___image");
const mainCircle = document.querySelectorAll(".page___circle");
const mainLeftBtn = document.querySelector("#btns___left");
const mainRightBtn = document.querySelector("#btns___right");
const mainPausePlayBtn = document.querySelector("#btns___pauseplay");

let count = 0;

const removeActive = () => {
    $(mainLeftText[count]).hide();
    mainLeftTop[count].classList.remove(ACTIVE_KEY);
    mainLeftText[count].classList.remove(ACTIVE_KEY);
    mainRightImg[count].classList.remove(ACTIVE_KEY);
    mainCircle[count].classList.remove(ACTIVE_KEY);
}

const addActive = () => {
    $(mainLeftText[count]).fadeIn(500);
    mainLeftTop[count].classList.add(ACTIVE_KEY);
    mainLeftText[count].classList.add(ACTIVE_KEY);
    mainRightImg[count].classList.add(ACTIVE_KEY);
    mainCircle[count].classList.add(ACTIVE_KEY);
}

const leftClicked = () => {
    removeActive();
    count = count - 1;
    if (count < 0) { count = mainLeftTop.length - 1 };
    addActive();
    console.log(count);
}

const rightClicked = () => {
    removeActive();
    count = count + 1;
    if (count > mainLeftTop.length - 1) { count = 0 };
    addActive();
    console.log(count);
}

mainLeftBtn.addEventListener("click", leftClicked);
mainRightBtn.addEventListener("click", rightClicked);

for (let i = 0; i < mainLeftTop.length; i++) {
    mainCircle[i].addEventListener("click", function() {
        removeActive();
        count = i;
        addActive();
        console.log(count);
    })
}



// 메인 배너 자동 롤링 및 일시정지 재생
let intervalID;

const autoRoll = () => {
    if(!intervalID) {
        intervalID = setInterval(rightClicked, 3000);
    }
}

const pausePlayClicked = () => {
    mainPausePlayBtn.classList.toggle("paused");
    if (!intervalID) {
        intervalID = setInterval(rightClicked, 3000);
    } else {
        clearInterval(intervalID);
        intervalID = null;
    }
}

autoRoll();
mainPausePlayBtn.addEventListener("click", pausePlayClicked);



// 네비게이션 서브메뉴 열고 닫기
const navList = document.querySelectorAll(".nav___list");
const submenu = document.querySelectorAll(".nav___submenu");

for (let i = 0; i < navList.length; i++) {
    navList[i].addEventListener("click", function() {
        $(navList[i]).siblings(".nav___list").removeClass(ACTIVE_KEY);
        $(submenu[i]).siblings(".nav___submenu").slideUp();
        navList[i].classList.toggle(ACTIVE_KEY);
        submenu[i].classList.toggle(ACTIVE_KEY);
        $(submenu[i]).slideToggle();
    })
}



// FAQ 아코디언
const faqQ = document.querySelectorAll(".faq___question");
const faqA = document.querySelectorAll(".faq___answer");
const faqBtn = document.querySelectorAll(".xi-angle-down");

for (let i = 0; i < faqQ.length; i++) {
    faqQ[i].addEventListener("click", function() {
        faqBtn[i].classList.toggle(ACTIVE_KEY);
        $(faqA[i]).slideToggle(500);
    });
}