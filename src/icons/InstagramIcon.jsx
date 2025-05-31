// src/icons/InstagramIcon.jsx
import React from 'react';

const InstagramIcon = ({ size = 32 }) => (
    <a
        href="https://instagram.com/hotel.santa.rita"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
    >
        <svg
        fill="#E1306C"
        width="32"
        height="32"
        viewBox="0 0 448 512"
        xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.9 224.1 370.9 339 319.6 339 255.9 287.7 141 224.1 141zm0 186.6c-39.6 0-71.8-32.2-71.8-71.8s32.2-71.8 71.8-71.8 71.8 32.2 71.8 71.8-32.2 71.8-71.8 71.8zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-.1-54.4-44.3-98.5-98.7-98.6H100.1C45.7 62.9 1.6 107 1.5 161.4v186.2c.1 54.4 44.3 98.5 98.7 98.6h247.8c54.4-.1 98.5-44.3 98.6-98.7V161.5zM398.8 348c0 31.5-25.6 57.1-57.1 57.1H106.3c-31.5 0-57.1-25.6-57.1-57.1V164c0-31.5 25.6-57.1 57.1-57.1h235.3c31.5 0 57.1 25.6 57.1 57.1v184z" />
        </svg>
    </a>
);

export default InstagramIcon;
