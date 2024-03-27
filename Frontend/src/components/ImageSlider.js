import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image_1 from "../photos/image-1.jpg";
import image_2 from "../photos/image-2.jpg";
import image_3 from "../photos/image-3.jpg";
import image_4 from "../photos/image-4.jpg";
import image_5 from "../photos/image-5.jpg";

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "90vh",
    width: "100vw",
}
const slideImages = [
    {
        url: image_1,
        caption: 'Slide 1'
    },
    {
        url: image_2,
        caption: 'Slide 2'
    },
    {
        url: image_3,
        caption: 'Slide 3'
    },
    {
        url: image_4,
        caption: 'Slide 3'
    },
    {
        url: image_5,
        caption: 'Slide 3'
    },
];

const ImageSlider = () => {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index)=> (
                    <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default ImageSlider;