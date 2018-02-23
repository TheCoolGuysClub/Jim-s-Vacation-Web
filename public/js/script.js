


let hawaii_tab = document.querySelector("#hawaii_tab");
let athen_tab = document.querySelector("#athen_tab");
let rome_tab = document.querySelector("#rome_tab");

let vacation_destination = document.querySelector("#vacation_destination");

let image_section = document.querySelector("#image_section");
let image_section1 = document.querySelector("#image_section1");
let image_section2 = document.querySelector("#image_section2");
let image_section3 = document.querySelector("#image_section3");

hawaii_tab.addEventListener("click", function() {
  // vacation_destination.innerHTML = "Hawaii";
  // image_section2.style.display = "none";
  // image_section3.style.display = "none";
  // image_section1.style.display = "block";

  document.location.href = "http://localhost:3000";
});
athen_tab.addEventListener("click", function() {
  // vacation_destination.innerHTML = "Athen";
  // image_section1.style.display = "none";
  // image_section3.style.display = "none";
  // image_section2.style.display = "block";

  document.location.href = "http://localhost:3000/athen";
});
rome_tab.addEventListener("click", function() {
  // vacation_destination.innerHTML = "Rome";
  // image_section1.style.display = "none";
  // image_section2.style.display = "none";
  // image_section3.style.display = "block";

  document.location.href = "http://localhost:3000/rome";
});





































//
