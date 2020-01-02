window.addEventListener('load', function () {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const visual = document.querySelector('.visual')
  const colors = [
    "#60d394",
    "#d36060",
    "#1d4600",
    "aqua",
    "#d3d160",
    "20d0f2"
  ];
  //lets get going with the sound here
  pads.forEach((pad, index) => {
    pad.addEventListener('click', function () {
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubbles(index);
    })
  })

  //Function bubbles
  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;

    bubble.addEventListener('animationend', function () {
      visual.removeChild(this)
    })
  }
});