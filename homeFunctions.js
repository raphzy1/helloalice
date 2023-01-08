//sticky header

window.onscroll = () => {
  scroll();
};

const scroll = () => {
  const header = document.getElementById("header-container");

  if (
    window.document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50
  ) {
    header.classList.add("up");
  } else {
    header.classList.remove("up");
  }
};

//pop up message

const popup = () => {
  const pet = document.getElementById("pet");
  // const check = document.getElementById("check-icon");
  const body = document.getElementById("body");
  const pop = document.getElementById("pop-container");
  pop.classList.add("slide-out");
  body.classList.add("blurry");

  //set time out

  setTimeout(() => {
    //pet.classList.add("pet-in");
    pet.style.left = "0";
  }, 500);
};

const popout = () => {
  const body = document.getElementById("body");
  const pop = document.getElementById("pop-container");
  const pet = document.getElementById("pet");
  // const check = document.getElementById("check-icon");

  pet.classList.add("pet-out");
  setTimeout(() => {
    pop.classList.remove("slide-out");
    window.location = "index.html";
    body.classList.remove("blurry");
  }, 500);
};

//confirmation payment

const confirmation = () => {
  const main = document.getElementById("payment-main");
  const pet = document.getElementById("pet");
  const body = document.getElementById("payment-body");
  const pop = document.getElementById("payment-pop-container");
  pop.classList.add("pay-out");
  body.classList.add("blurry");
  // main.classList.add('overlay')
  main.style.background = "#C6C6C6";
  //set time out
  setTimeout(() => {
    pet.classList.add("pet-in");
  }, 500);
};

const paymentpop = () => {
  const body = document.getElementById("payment-body");
  const pop = document.getElementById("payment-pop-container");
  const pet = document.getElementById("pet");
  const main = document.getElementById("payment-main");

  pet.classList.add("pet-out");

  setTimeout(() => {
    pop.classList.remove("pay-out");
    window.location = "index.html";
    body.classList.remove("blurry");
    main.style.background = "#ffffff";
  }, 500);
};

let template = "";

window.onload = () => {
  const para = document.getElementById("date");
  const date = new Date();
  const year = date.getFullYear();
  para.innerHTML = year;
  console.log(year);
};

// toggle icons

const toggle = () => {
  const bar = document.getElementById("bar");
  const cancel = document.getElementById("cancel");
  const navList = document.getElementById("nav-list");

  bar.style.display = "none";
  cancel.style.display = "block";
  navList.style.height = "85vh";
};

const toggleout = () => {
  const bar = document.getElementById("bar");
  const cancel = document.getElementById("cancel");
  const navList = document.getElementById("nav-list");

  bar.style.display = "block";
  cancel.style.display = "none";
  navList.classList.remove("opened");
  navList.style.height = "0";
};

const details = (e) => {
  e.preventDefault();

  const pet = document.getElementById("pet");
  const check = document.getElementById("check-icon");
  const body = document.getElementById("body");
  const pop = document.getElementById("pop-container");
  pop.classList.add("slide-out");
  body.classList.add("blurry");

  //set time out
  setTimeout(() => {
    //pet.classList.add("pet-in")
    check.classList.add("check-in");
  }, 100);
};

//slider effects

let num = 0;

const rightBtn = () => {
  const slider = document.getElementById("slider");
  num += 100;
  slider.style.left = `-${num}%`;
  console.log(num);
};

function clicked() {
  console.log("yay");
}

// dashboard redirect

const dashboard = () => {
  window.location = "dashboard.html";
};
