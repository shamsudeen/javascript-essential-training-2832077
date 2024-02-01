/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

const frogpack = {
  name: "Frog Backpack",
  volume: 8,
  color: "green",
  pocketNum: 3,
  strapLength: {
    left: 10,
    right: 10,
  },
  lidOpen: false,
  image: "../../assets/images/frog.svg",
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// Baseline HTML output
const content = `
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        frogpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        frogpack.color
      }</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        frogpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        frogpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        frogpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        frogpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>  
`;

document.write(content);

// Add event listener for the lid feature
document.querySelector(".backpack__lid").addEventListener("click", () => {
  const currentStatus = frogpack.lidOpen;
  // Toggle lid status and update UI accordingly
  frogpack.toggleLid(!currentStatus);
  document.querySelector(
    ".backpack__lid .feature-value"
  ).textContent = `${frogpack.lidOpen ? "open" : "closed"}`;
});

// Function to generate a random number between min and max (inclusive)
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate new volume if it's not already set
if (!frogpack.volume) {
  let vol = getRandomIntInclusive(50, 80);
  while (vol > 90 || vol <= 30) {
    vol = getRandomIntInclusive(30, 90);
  }
  frogpack.setVolume(vol);
}

const volumeSlider = document.getElementById("volume");
volumeSlider.value = frogpack.volume;

volumeSlider.oninput = function () {
  frogpack.setVolume(this.value);
};
// Update UI when volume is changed programmatically
frogpack.on("volumeChanged", () => {  
  volumeSlider.value = frogpack.volume;
  document.querySelector(
    ".backpack__volume .feature-value"
  ).textContent = `${frogpack.volume}%`;
});

