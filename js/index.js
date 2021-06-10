var idx = 0;
let txt = `I am a project delivery manager at
    Cognizant. I am
    diligently working for a career change from
    mainframe background to cloud & data related
    technologies. i have hand crafted and built this
    page from scratch to give an
    elevator pitch about my profile`;

document.getElementById("typing-child").innerHTML = " ";
document.getElementsByTagName("header").display = "none";
document.getElementById("navbar").style.display = "none";
document.getElementById("certs").style.display = "none";
document.getElementById("exp").style.display = "none";
document.getElementById("edu").style.display = "none";
document.getElementById("social").style.display = "none";

let typingEffect = (txt) => {
  let chars = txt.split("");

  if (idx < chars.length) {
    document.getElementById("typing-child").innerHTML =
      document.getElementById("typing-child").innerHTML + chars[idx++];
    window.scrollBy(0, 15);
    setTimeout(function () {
      typingEffect(txt);
    }, 50);
  } else {
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.getElementById(
        "typing-child"
      ).innerHTML = `I am a <strong>project delivery manager</strong> at
          <strong>Cognizant</strong>. I am
          <big>diligently working for </big> a <u>career change</u> from
          mainframe background to <ins>cloud & data</ins> related
          technologies. i have <strong>hand crafted</strong> and built this
          page from scratch to give an
          <strong>elevator pitch</strong> about <u>my profile</u>`;
      document.getElementById("navbar").style.display = "block";
      document.getElementById("certs").style.display = "flex";
      document.getElementById("exp").style.display = "flex";
      document.getElementById("edu").style.display = "flex";
      document.getElementById("social").style.display = "flex";
    }, 4000);
  }
};

setTimeout(() => {typingEffect(txt);},4000);
;

// new object with screen as root element
var certObserver = new IntersectionObserver(
  (entries) => {
    // callback code
    // since there is a single target to be observed, there will be only one entry

    // console.log(entries[0].target);
    if (entries[0]["isIntersecting"] === true) {
      if (entries[0]["intersectionRatio"] === 1) {
        // console.log("intersect 100%");
        document.getElementById("certs").style.animation =
          "fade-in 3s ease-in-out 0s 1 alternate none";
        document.getElementById("certs").style.opacity = 1;
      } else if (entries[0]["intersectionRatio"] > 0.5) {
        // console.log("intersect 50%");
        document.getElementById("certs").style.animation =
          "fade-in 3s ease-in-out 0s 1 alternate none";
        document.getElementById("certs").style.opacity = 1;
      } else {
        // console.log("intersect < 50%");
        document.getElementById("certs").style.animation =
          "fade-out 3s ease-in-out 0s 1 alternate none";
        document.getElementById("certs").style.opacity = 0.3;
      }
    } else {
      // console.log("intersect 0%");
      document.getElementById("certs").style.animation =
        "fade-out 3s ease-in-out 0s 1 alternate none";
      document.getElementById("certs").style.opacity = 0.3;
    }
  },
  { threshold: [0, 0.5, 1] }
);

var expObserver = new IntersectionObserver(
  (entries) => {
    // console.log(entries[0].target);
    if (entries[0]["isIntersecting"] === true) {
      if (entries[0]["intersectionRatio"] === 1) {
        // console.log("intersect 100%");
        document.getElementById("exp").style.animation =
          "fade-in 3s ease-in-out 0s 1 alternate none";
        document.getElementById("exp").style.opacity = 1;
      } else if (entries[0]["intersectionRatio"] > 0.25) {
        // console.log("intersect 60%");
        document.getElementById("exp").style.animation =
          "fade-in 3s ease-in-out 0s 1 alternate none";
        document.getElementById("exp").style.opacity = 1;
      } else {
        // console.log("intersect < 60%");
        document.getElementById("exp").style.animation =
          "fade-out 3s ease-in-out 0s 1 alternate none";
        document.getElementById("exp").style.opacity = 0.3;
      }
    } else {
      // console.log("intersect 0%");
      document.getElementById("exp").style.animation =
        "fade-out 3s ease-in-out 0s 1 alternate none";
      document.getElementById("exp").style.opacity = 0.3;
    }
  },
  { threshold: [0, 0.25, 1] }
);

var eduObserver = new IntersectionObserver(
  (entries) => {
    // console.log(entries[0].target);
    if (entries[0]["isIntersecting"] === true) {
      if (entries[0]["intersectionRatio"] === 1) {
        // console.log("intersect 100%");
        document.getElementById("edu").style.animation =
          "fade-in 3s ease-in-out 0s 1 alternate none";
        document.getElementById("edu").style.opacity = 1;
      } else if (entries[0]["intersectionRatio"] > 0.4) {
        // console.log("intersect 60%");
        document.getElementById("edu").style.animation =
          "fade-in 3s ease-in-out 0s 1 alternate none";
        document.getElementById("edu").style.opacity = 1;
      } else {
        // console.log("intersect < 60%");
        document.getElementById("edu").style.animation =
          "fade-out 3s ease-in-out 0s 1 alternate none";
        document.getElementById("edu").style.opacity = 0.3;
      }
    } else {
      // console.log("intersect 0%");
      document.getElementById("edu").style.animation =
        "fade-in 3s ease-in-out 0s 1 alternate none";
      document.getElementById("edu").style.opacity = 0.3;
    }
  },
  { threshold: [0, 0.4, 1] }
);

var sociObserver = new IntersectionObserver(
  (entries) => {
    // console.log(entries[0].target);
    if (entries[0]["isIntersecting"] === true) {
      if (entries[0]["intersectionRatio"] === 1) {
        // console.log("intersect 100%");
        document.getElementById("social").style.animation =
          "fade-in 3s ease-in-out 0s 1 alternate none";
        document.getElementById("social").style.opacity = 1;
      } else if (entries[0]["intersectionRatio"] > 0.7) {
        // console.log("intersect 70%");
        document.getElementById("social").style.animation =
          "fade-in 3s ease-in-out 0s 1 alternate none";
        document.getElementById("social").style.opacity = 1;
      } else {
        // console.log("intersect < 70%");
        document.getElementById("social").style.animation =
          "fade-out 3s ease-in-out 0s 1 alternate none";
        document.getElementById("social").style.opacity = 0.3;
      }
    } else {
      // console.log("intersect 0%");
      document.getElementById("social").style.animation =
        "fade-out 3s ease-in-out 0s 1 alternate none";
      document.getElementById("social").style.opacity = 0.3;
    }
  },
  { threshold: [0, 0.7, 1] }
);

certObserver.observe(document.querySelector("#certs"));
expObserver.observe(document.querySelector("#exp"));
eduObserver.observe(document.querySelector("#edu"));
sociObserver.observe(document.querySelector("#social"));
