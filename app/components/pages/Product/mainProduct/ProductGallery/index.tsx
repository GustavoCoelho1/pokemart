'use client';

import useDimensions from '@/hooks/useDimensions';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

interface Props {
    images: string[];
    maxSize: number;
    axis: 'horizontal' | 'vertical';
}

const ProductGallery: React.FC<Props> = ({ images, axis, maxSize }) => {
    const [mainImageIdx, setMainImageIdx] = useState(0);
    const galleryElement = useRef<HTMLElement | any>(null);
    const galleryMaxWidth =
        axis == 'horizontal' ? `max-w-[${maxSize}px]` : null;
    const galleryMaxHeight = axis == 'vertical' ? `max-h-[${maxSize}px]` : null;

    const [galleryArrowsEnabled, setGalleryArrowsEnabled] = useState(false);

    useEffect(() => {
        const galleryWidth = galleryElement.current?.offsetWidth;
        const galleryHeight = galleryElement.current?.offsetHeight;

        if (axis == 'horizontal' && galleryWidth > maxSize) {
            setGalleryArrowsEnabled(true);
        }
        if (axis == 'vertical' && galleryHeight > maxSize) {
            setGalleryArrowsEnabled(true);
        }
    }, [galleryElement]);

    const handlePreviousGalleryLeftArrowClicked = () => {};

    const handlePreviousGalleryRightArrowClicked = () => {};

    const handleGalleryClick = (imgIdx) => {
        mainImageIdx != imgIdx && setMainImageIdx(imgIdx);
    };

    useEffect(() => {
        console.log(galleryArrowsEnabled ? 'ta ativo' : 'nem ta');

        console.log(galleryElement.current?.clientWidth);
    }, [galleryArrowsEnabled]);

    return (
        <div className={`flex flex-col gap-5`}>
            <div className="relative flex items-center justify-center rounded-3xl h-[500px] min-w-[600px] max-w-[600px] overflow-hidden bg-[#F4F4F4]">
                <img
                    className="absolute top-0 left-0 right-0 w-full h-full object-contain"
                    src={images[mainImageIdx]}
                    alt=""
                />
            </div>
            <div
                className={`relative flex items-center gap-4 overflow-hidden ${galleryMaxWidth} ${galleryMaxHeight}`}
            >
                <div
                    ref={galleryElement}
                    className="w-full relative flex items-center gap-4 px-[20px]"
                >
                    {galleryArrowsEnabled && (
                        <>
                            <button
                                className="absolute top-0 bottom-0 w-[10px] left-0 text-primary text-lg z-10 opacity-70 hover:opacity-100"
                                onClick={() =>
                                    handlePreviousGalleryLeftArrowClicked()
                                }
                            >
                                <FaAngleLeft />
                            </button>
                            <button
                                className="absolute top-0 bottom-0 w-[10px] right-0 text-primary text-lg z-10 opacity-70 hover:opacity-100"
                                onClick={() =>
                                    handlePreviousGalleryRightArrowClicked()
                                }
                            >
                                <FaAngleRight />
                            </button>
                        </>
                    )}
                    {images.map((img, idx) => (
                        <div
                            className={clsx(
                                'relative bg-[#F4F4F4] rounded-3xl h-[130px] min-w-[130px] overflow-hidden',
                                {
                                    'cursor-pointer opacity-70 duration-300 transition ease-out':
                                        mainImageIdx != idx,
                                },
                            )}
                            onClick={() => handleGalleryClick(idx)}
                            key={`photo-${idx}`}
                        >
                            <img
                                className="absolute left-0 top-0 w-full h-full object-cover"
                                src={img}
                                alt=""
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductGallery;
