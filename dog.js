async function start() {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();
    console.log(data.message);
    createBreedList(data.message);
}
start();

function createBreedList(breedList) {
    document.getElementById('breed').innerHTML = `
     <select id="selecter" onchange="loadByBreed(this.value)")>
        <option> Choose a dog breed </option> 
        ${Object.keys(breedList).map(function(breed){
            return `<option>${breed}</option>`
        }).join('')};
     </select>
    `
}

async function loadByBreed(breed) {
    if (breed != 'Choose a dog breed') {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
        const data = await response.json()
        createSlideShow(data.message)
    }
}

function createSlideShow(images) {
    let numDogs = images.length;
    let randDog = Math.floor(Math.random() * numDogs);
    let randDog2 = Math.floor(Math.random() * numDogs);
    document.getElementById('slideshow').innerHTML = `
    <div class="slide" style="background-image: url('${images[randDog]}')"></div>
    <div class="slide" style="background-image: url('${images[randDog]}')"></div>

    `
}