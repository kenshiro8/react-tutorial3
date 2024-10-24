import React, { useState } from 'react';

const imageArray = [
  { src: "images/pic1.jpg", alt: "Closeup of a human eye" },
  { src: "images/pic2.jpg", alt: "Rock that looks like a wave" },
  { src: "images/pic3.jpg", alt: "Purple and white pansies" },
  { src: "images/pic4.jpg", alt: "Section of wall from a pharoah's tomb" },
  { src: "images/pic5.jpg", alt: "Large moth on a leaf" }
];

export default function App() {
  const [selectedImage, setSelectedImage] = useState(imageArray[0]);

  const handleClick = (index) => {
    setSelectedImage(imageArray[index]);
  };
  return (
    <>
      <h1>Image gallery example</h1>
      <div className="full-img">
        <img
          className="displayed-img"
          src={selectedImage.src}
          alt={selectedImage.alt}
        />
        <div className="overlay"></div>
        <button className="dark">Darken</button>
      </div>
      <div className="thumb-bar">
        {imageArray.map((image, index) => (
        <img key={index}
          src={image.src}
          alt={image.alt}
          onClick={() => handleClick(index)}/>
        ))}
      </div>
    </>
  );
}