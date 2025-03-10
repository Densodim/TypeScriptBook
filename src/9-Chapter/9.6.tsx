// <img src='/foto.jpg' loading='lazy' alt='What an awesome dog'/>


import React from "react";

interface ImageProps {
    src: string;
    alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
    return <img src={src} loading="lazy" alt={alt} />;
};

export default Image;
