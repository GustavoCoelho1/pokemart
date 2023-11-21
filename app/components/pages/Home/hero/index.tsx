import HeroSlider from '@/app/components/design/HeroSlider';
import { SlideProps } from '@/app/components/design/HeroSlider';

const slides = [
    {
        imgUrl: '/images/banner_1.png',
        mainColor: '#640000',
        imgAlt: 'Team Valor',
    },
    {
        imgUrl: '/images/banner_2.png',
        mainColor: '#006AFF',
        imgAlt: 'Team Valor',
    },
    {
        imgUrl: '/images/banner_3.png',
        mainColor: '#FFBF00',
        imgAlt: 'Team Valor',
    },
] as Array<SlideProps>;

const HeroSection = () => {
    return (
        <section className="container mt-[70px] h-[500px] max-w-screen w-full flex items-center justify-center bg-blue-900 gap-10">
            <div className="flex items-center h-full w-full">
                <HeroSlider slides={slides} />
            </div>
        </section>
    );
};

export default HeroSection;
