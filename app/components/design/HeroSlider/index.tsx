import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './heroSlider.css';

import Slider, { Settings } from 'react-slick';
import { useContext } from 'react';

export interface SlideProps {
    imgUrl: string;
    imgAlt: string;
    mainColor: string;
}

interface Props {
    slides: Array<SlideProps>;
    rounded: boolean;
}

const HeroSlider: React.FC<Props> = ({ slides, rounded }) => {
    const sliderSettings = {
        autoplay: true,
        dots: true,
        infinite: true,
        dotsClass: 'slick-dots',
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    } as Settings;

    return (
        <div className="w-full">
            <Slider {...sliderSettings}>
                {slides.map((slide) => (
                    <div key={`${slide.imgUrl}`} className="h-full mt-[5px] w-full">
                        <img
                            src={slide.imgUrl}
                            alt={slide.imgAlt}
                            className={`w-full h-full object-cover ${
                                rounded && 'rounded-[2rem]'
                            }`}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HeroSlider;
