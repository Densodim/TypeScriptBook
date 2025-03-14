// <img src='/foto.jpg' loading='lazy' alt='What an awesome dog'/>
import React from "react";
const Image = ({ src, alt }) => {
    return React.createElement("img", { src: src, loading: "lazy", alt: alt });
};
export default Image;
