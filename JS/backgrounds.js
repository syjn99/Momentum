const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
];

const IMAGE_LENGTH = images.length;
const imageIndex = Math.floor(Math.random() * IMAGE_LENGTH);

const image = images[imageIndex];
const imageSrc = `img/${image}`;
const bodyStyle = document.body.style;

bodyStyle.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imageSrc})`;
bodyStyle.backgroundSize = "cover";
bodyStyle.backgroundRepeat = "no-repeat";