const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const nav = document.querySelectorAll("nav a");

const linkOne = document.querySelector("nav > a:nth-child(1)");
const linkTwo = document.querySelector("nav > a:nth-child(2)");
const linkThree = document.querySelector("nav > a:nth-child(3)");
const linkFour = document.querySelector("nav > a:nth-child(4)");
const linkFive = document.querySelector("nav > a:nth-child(5)");
const linkSix = document.querySelector("nav > a:nth-child(6)");

linkOne.textContent = siteContent ["nav"] ["nav-item-1"];
linkTwo.textContent = siteContent ["nav"] ["nav-item-2"];
linkThree.textContent = siteContent["nav"] ["nav-item-3"];
linkFour.textContent = siteContent ["nav"] ["nav-item-4"];
linkFive.textContent = siteContent ["nav"] ["nav-item-5"];
linkSix.textContent = siteContent ["nav"] ["nav-item-6"];

//navigation complete, moving to CTA

var ctaH1 = document.querySelector("section.cta > div > h1");
var ctaBtn = document.querySelector("section.cta > div > button");

ctaH1.textContent = siteContent ["cta"]["h1"];
ctaBtn.textContent = siteContent ["cta"]["button"];

let imgCta = document.getElementById("cta-img");
imgCta.setAttribute("src", siteContent["cta"]["img-src"]);

//CTA complete, moving to main content


var features = document. querySelector ('div.top-content > div:nth-child(1) > h4');
var featuresTxt = document. querySelector ('div.top-content > div:nth-child(1) > p');

var about = document. querySelector ('div.top-content > div:nth-child(2) > h4');
var aboutTxt = document. querySelector ('div.top-content > div:nth-child(2) > p');

features.textContent = siteContent["main-content"] ["features-h4"];
featuresTxt. textContent = siteContent ["main-content"] ["features-content"];
about.textContent = siteContent["main-content"] ["about-h4"];
aboutTxt. textContent = siteContent ["main-content"] ["about-content"];


var imgMid = document.getElementById("middle-img");
imgMid.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

var services = document.querySelector ('div.bottom-content > div:nth-child(1) > h4');
var servicesTxt = document. querySelector ('div.bottom-content > div:nth-child(1) > p');
var product = document.querySelector ('div.bottom-content > div:nth-child(2) > h4');
var productTxt = document. querySelector ('div.bottom-content > div:nth-child(2) > p');
var vision = document.querySelector ('div.bottom-content > div:nth-child(3) > h4');
var visionTxt = document. querySelector ('div.bottom-content > div:nth-child(3) > p');

services.textContent = siteContent["main-content"] ["services-h4"];
featuresTxt.textContent = siteContent ["main-content"] ["services-content"];
product.textContent = siteContent["main-content"] ["product-h4"];
productTxt.textContent = siteContent ["main-content"] ["product-content"];
vision.textContent = siteContent ["main-content"] ["vision-h4"];
visionTxt.textContent =siteContent ["main-content"] ["vision-content"];

//main content complete moving to contact

var contactH4 = document.querySelector ("section.contact > h4");
contactH4.textContent = siteContent ["contact"] ["contact-h4"];
var contactAdd = document. querySelector ("section.contact > p:nth-child(2)");
var contactPhone = document. querySelector ("section.contact > p:nth-child(3)");
var contactEmail = document. querySelector ("section.contact > p:nth-child(4)");
contactAdd.textContent=siteContent ["contact"] ["address"];
contactPhone.textContent = siteContent ["contact"] ["phone"];
contactEmail.textContent =siteContent ["contact"] ["email"];

var footerNew = document.querySelector("footer > p");

footerNew.textContent = siteContent["footer"]["copyright"];