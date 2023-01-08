//payment methods

window.onload = () => {
  paymentPop();
};

let paymentTemplate = "";

let paypals = `
          <div class="paypal-form">
            <img class="paypal-image" height="30%" width="30%" src="images/payPal.PNG" alt="" />
            <div class="paypal-details">
              <div class="paypal-tag">
                <h4 class="tag-header">Paypal</h4>
                  <div class="tag"><span id='pay-tag'>fredrickjay509@gmail.com</span>
                  <span onclick='copypaypal()' class="copy-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#00374a" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z"></path></svg>
                    <span id='copy'>COPY</span>
                  </span>
                </div>
              </div>
              <div class="paypal-tag">
                <h4 class="tag-header">Payment method</h4>
                <p class="tag">Paypal</p>
              </div>
              <div class="paypal-tag">
                <h4 class="tag-header">Beneficiary</h4>
                <p class="tag">Hello Alice</p>
              </div>
            </div>
          </div>

`;

const creditCard = `
          <div class="card-form">
            <form action="" onsubmit='prevent(event)' accept-charset="utf-8">
              <div class="mb-3">
                <div class="col-sm-10">
                  <label for="inputPassword" class="col-sm-2 col-form-label sml-text" style="font-weight: 500">Card Owner</label>
                  <input type="text" class="form-control cards" id="inputPassword" required>
                </div>
              </div>
              <div class="mb-3">
                <div class="col-sm-10">
                  <label for="inputPassword" class="col-sm-2 col-form-label sml-text" style="font-weight: 500">Card Number</label>
                  <input type="tel" class="form-control cards" id="inputPassword" required>
                </div>
              </div>
              <div class="card-date">
               <div class="mb-3" style="margin-left: 5px; width: 100%">
                <div class="col-sm-10">
                  <label for="inputPassword" class="col-sm-2 col-form-label sml-text" style="font-weight: 500">Expiration Date</label>
                  <input type="month" class="form-control cards m" id="inputPassword" required>
                  <label for="inputPassword" class="col-sm-2 col-form-label sml-text" style="font-weight: 500">MM / YYYY</label>
                </div>
              </div>
              <div class="mb-3" style="margin-left: 20px">
                <div class="col-sm-10">
                  <label for="inputPassword" class="col-sm-2 col-form-label sml-text" style="font-weight: 500">Cvv</label>
                  <input type="number" min='3' class="form-control cards" id="inputPassword" required>
                  <label for="inputPassword" class="col-sm-2 col-form-label sml-text" style="visibility: hidden">MM / YYYY</label>
                </div>
              </div>
            </div>
            <center>
              <button class="checkout" type="submit">Confirm Payment</button>
            </center>
            </form>
          </div>
`;
const cashApp = `
          <div class="paypal-form">
            <img class="paypal-image" height="30%" width="30%" src="images/cashApp.PNG" alt="" />
            <div class="paypal-details">
              <div class="paypal-tag">
                <h4 class="tag-header">Cashapp tag</h4>
                <div class="tag" >
                <span id='cash-tag'>$haystack52</span>
                <span class="copy-icon" onclick='copycashapp()'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#00374a" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z"></path></svg>
                  <span id='copytwo'>COPY</span>
                  </span>
                </div>
              </div>
              <div class="paypal-tag">
                <h4 class="tag-header">Payment method</h4>
                <p class="tag">Cashapp</p>
              </div>
              <div class="paypal-tag">
                <h4 class="tag-header">Beneficiary</h4>
                <p class="tag">Hello Alice</p>
              </div>
            </div>
          </div>
`;
const applePay = `
          <div class="paypal-form">
            <img class="paypal-image" height="20%" width="20%" src="images/googlePay.PNG" alt="" />
            <div class="paypal-details">
              <div class="paypal-tag">
                <h4 class="tag-header">Apple</h4>
                <div class="tag">
                <span id='apple-tag'>+1(409)300-9718</span>
                <span class="copy-icon" onclick='copyapplepay()'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#00374a" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z"></path></svg>
                  <span id='copythree'>COPY</span>
                  </span>
                </div>
              </div>
              <div class="paypal-tag">
                <h4 class="tag-header">Payment method</h4>
                <p class="tag">Apple Pay</p>
              </div>
              <div class="paypal-tag">
                <h4 class="tag-header">Beneficiary</h4>
                <p class="tag">Hello Alice</p>
              </div>
            </div>
          </div>
`;

//form submisson

const prevent = (e) => {
  e.preventDefault();

  const main = document.getElementById("payment-main");
  const pet = document.getElementById("pet");
  const body = document.getElementById("payment-body");
  const pop = document.getElementById("payment-pop-container");
  pop.classList.add("pay-out");
  body.classList.add("blurry");
  main.style.background = "#C6C6C6";

  //set time out
  setTimeout(() => {
    pet.classList.add("pet-in");
  }, 500);
};

//copying text to clipboard

const copypaypal = () => {
  const tags = document.getElementById("pay-tag").innerHTML;
  navigator.clipboard.writeText(tags);

  const copy = document.getElementById("copy");
  copy.innerHTML = "COPIED";
};

const copycashapp = () => {
  const tags = document.getElementById("cash-tag").innerHTML;
  navigator.clipboard.writeText(tags);

  const copy = document.getElementById("copytwo");
  copy.innerHTML = "COPIED";
};

const copyapplepay = () => {
  const tags = document.getElementById("apple-tag").innerHTML;
  navigator.clipboard.writeText(tags);

  const copy = document.getElementById("copythree");
  copy.innerHTML = "COPIED";
};

//local storage variables

let paypalValue = "";
let cashappValue = "";
let appleValue = "";

//window on load start script

const paymentPop = () => {
  const paymentParent = document.getElementById("payment-methods");
  paymentTemplate += paypals;

  paymentParent.innerHTML = paymentTemplate;

  //getting local storage data for paypal

  /* const paypalTags = document.getElementById("pay-tag");
  const getpaypal = localStorage.getItem("paypal");
  paypalValue = getpaypal;
  if (getpaypal !== null) paypalTags.innerHTML = getpaypal; */

  //getting local storage data for cashapp

  const cashappTags = document.getElementById("cash-tag");
  const getcashapp = localStorage.getItem("cashapp");
  //cashappValue = getcashapp;

  //getting local storage data for applepay

  const applepayTags = document.getElementById("apple-tag");
  const getapplepay = localStorage.getItem("applepay");
  //appleValue = getapplepay;
};

//window onload end script

const cardPayment = () => {
  const paymentParent = document.getElementById("payment-methods");
  paymentTemplate = "";
  paymentTemplate += creditCard;
  paymentParent.innerHTML = paymentTemplate;
};

const paypalPayment = () => {
  const paymentParent = document.getElementById("payment-methods");
  paymentTemplate = "";
  paymentTemplate += paypals;

  paymentParent.innerHTML = paymentTemplate;

  //retriving paypal local storage value

  // const paypalTags = document.getElementById("pay-tag");
  // paypalTags.innerHTML = paypalValue;
};

const cashPayment = () => {
  const paymentParent = document.getElementById("payment-methods");
  paymentTemplate = "";

  paymentTemplate = cashApp;

  paymentParent.innerHTML = paymentTemplate;

  //retriving cashapp tag from local storage

  // const cashappTags = document.getElementById("cash-tag");
  // if (cashappValue !== null) cashappTags.innerHTML = cashappValue;
};

const applePayment = () => {
  const paymentParent = document.getElementById("payment-methods");
  paymentTemplate = "";

  paymentTemplate = applePay;

  paymentParent.innerHTML = paymentTemplate;

  //retriving applepay tag from local storage

  // const appleTags = document.getElementById("apple-tag");
  // if (appleValue !== null) appleTags.innerHTML = appleValue;
};

const paypalUpdate = () => {
  let payText = document.getElementById("paypalText").value;

  //storing to local storage

  if (payText.length <= 0) {
    return;
  } else {
    const setting = localStorage.setItem("paypal", payText);

    //button updated
    const btn = document.getElementById("paybtn");
    btn.textContent = "updated";
  }
};
const cashappUpdate = () => {
  const cashText = document.getElementById("cashappText").value;

  //storing to local storage

  if (cashText.length <= 0) {
    return;
  } else {
    const setting = localStorage.setItem("cashapp", cashText);

    //button updated
    const btn = document.getElementById("cashbtn");
    btn.textContent = "updated";
  }
};

const appleUpdate = () => {
  const cashText = document.getElementById("appleText").value;

  //storing to local storage
  if (cashText.length <= 0) {
    return;
  } else {
    const setting = localStorage.setItem("applepay", cashText);

    //button updated
    const btn = document.getElementById("applebtn");
    btn.textContent = "updated";
  }
};

//navigate to payment page

const nav = () => {
  window.location = "payment.html";
};
