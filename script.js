const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const gif = document.getElementById("gif");
const head = document.getElementById("head");

const assets = [
  "./assets/cat-cute.gif",
  "./assets/cat-blinking.gif",
  "./assets/ohno.gif",
  "./assets/cat-gun.gif",
];

const message = [
  "Be My Sugarpie?",
  "Why??? .·°՞(っ-ᯅ-ς)՞°·.",
  "Pleasee? ≽^•⩊•^≼",
  "Just Click Yes! (╥‸╥)",
];

const sound = {
  click: new Audio("./assets/click.mp3"),
  no: new Audio("./assets/no.mp3"),
  twinkle: new Audio("./assets/twinkle.mp3"),
};
let current = 0;
let yesScale = 1;

const fireworks = new Audio("./assets/fireworks.mp3");

noBtn.addEventListener("mouseover", function () {
  noBtn.style.left = `${Math.ceil(Math.random() * 90)}%`;
  noBtn.style.top = `${Math.ceil(Math.random() * 90)}%`;

  yesScale += 0.1;
  yesBtn.style.transform = `scale(${yesScale})`;
  yesBtn.style.transition = "transform 0.2s";
});
noBtn.addEventListener("click", function () {
  gif.style.opacity = "0";

  setTimeout(() => {
    current = (current + 1) % Math.min(assets.length, message.length);
    head.textContent = message[current];
    gif.src = assets[current];

    gif.style.opacity = "1";
  }, 200);

  yesScale += 0.1;
  yesBtn.style.transform = `scale(${yesScale})`;
  yesBtn.style.transition = "transform 0.2s";

  sound.click.currentTime = 0;
  sound.click.play();
  sound.no.play();
});

yesBtn.addEventListener("click", () => {
  head.textContent = "Yehey My You're Officially my Sugarpiehoneybunch!!";

  gif.style.opacity = "0";

  setTimeout(() => {
    gif.src = "./assets/kiss.gif";

    gif.style.opacity = "1";
  }, 200);

  noBtn.style.visibility = "hidden";
  yesBtn.style.transform = "scale(1)";
  yesBtn.style.width = "100%";

  sound.twinkle.play();
  sound.click.play();

  fireworks.loop = true;
  fireworks.play();

  var duration = 15 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);
});
