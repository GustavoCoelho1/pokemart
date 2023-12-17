'use client';

import { useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

interface Props {
    withBorder: boolean;
    color: string;
    clickedColor: string;
}

const FavoriteButton: React.FC<Props> = ({
    withBorder,
    color,
    clickedColor,
}) => {
    const [isClicked, setIsClicked] = useState(false);
    const standardColor = `text-${color} bg-white`;
    const btnClickedColor = `text-${clickedColor} `;
    const borderClickedColor = `bg-${clickedColor} text-white border-0`;

    return (
        <button
            onClick={() => setIsClicked(!isClicked)}
            className={`flex items-center border-primary justify-center w-9 h-9 ${
                isClicked
                    ? withBorder
                        ? borderClickedColor
                        : btnClickedColor
                    : standardColor
            } ${withBorder ? 'border rounded-full' : ''}`}
        >
            {isClicked ? <BsHeartFill /> : <BsHeart />}
        </button>
    );
};

export default FavoriteButton;
