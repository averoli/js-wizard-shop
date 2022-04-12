const nextSection = document.querySelectorAll(".nextSection");
const sections = document.querySelectorAll("body> section");
// TODO get all the buttons next and add one event that shows the especific section  and hide
//TODO export this function to different JS files
for (const btnNxt of nextSection) {
  btnNxt.addEventListener("click", showSection);
}
function showSection(e) {
  let idSection = e.target.closest("section").nextElementSibling.id;
  for (const step of sections) {
    console.log(step.id);
    if (step.id === idSection) {
      step.style.display = "block";
    } else {
      step.style.display = "none";
    }
  }
}

