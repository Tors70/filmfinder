// Code for generating random image
const rndBtn = document.getElementById("playBtn3");

async function starter() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    let imgAddress = data.message;
    console.log(imgAddress);
    createImage(imgAddress);
  } catch (e) {
    console.log("There was a problem fetching the random image.");
  }
}
// start();

rndBtn.onclick = starter;
const createImage = (imgAdress) => {
  document.getElementById("rndImgSrc").src = imgAdress;
};
