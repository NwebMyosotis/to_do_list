const images = ["img/0.jpeg", "img/1.jpeg", "img/2.jpeg", "img/3.jpeg"];
const randomBgImg = images[Math.floor(Math.random() * images.length)];

// const backgroundImg = document.createElement("img");
// backgroundImg.src = randomBgImg;
document.body.style.backgroundImage = `url(${randomBgImg})`;
