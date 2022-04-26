export default function progress(section, step) {
  const progressBar = document.querySelector(`#${section} #myBar`);
  progressBar.style.animationName = `${section}-animation`;

  if (step === 2) {
    const second = document.querySelector(`#${section} .second`);
    second.style.backgroundColor = "lightseagreen";
  } else if (step === 3) {
    const third = document.querySelector(`#${section} .third`);
    third.style.backgroundColor = "lightseagreen";
    third.style.animation = "profile-stopBackground 2s ease-in-out";
  } else if (step === 4) {
    const fourth = document.querySelector(`#${section} .fourth`);
    fourth.style.backgroundColor = "lightseagreen";
    fourth.style.animation = "profile-stopBackground 2s ease-in-out";
  }
}


