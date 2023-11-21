import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './heroSlider.css';

import Slider, { Settings } from 'react-slick';
import { useContext } from 'react';
import HomeContext from '@/app/context/HomeContext';

export interface SlideProps {
    imgUrl: string;
    imgAlt: string;
    mainColor: string;
}

interface Props {
    slides: Array<SlideProps>;
}

const HeroSlider: React.FC<Props> = ({ slides }) => {
    const { setBgColor } = useContext(HomeContext);

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
        afterChange: (idx) => changeBgColor(idx),
    } as Settings;

    const changeBgColor = (idx: number) => {
        setBgColor(slides[idx].mainColor);
    };

    return (
        <div className="w-full">
            <Slider {...sliderSettings}>
                {slides.map((slide) => (
                    <div className="h-[500px] mt-[5px] w-full">
                        <img
                            src={slide.imgUrl}
                            alt={slide.imgAlt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HeroSlider;
