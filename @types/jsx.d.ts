import "react"


declare module "react" {
    interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
        loading?: 'lazy' | 'eager'| 'auto';
        alt: string;
    }
}

declare namespace JSX {
    interface IntrinsicElements {
        img: HTMLAttributes & {
            alt: string;
            src: string;
            loading?: 'lazy' | 'eager'| 'auto';
        }
    }
}