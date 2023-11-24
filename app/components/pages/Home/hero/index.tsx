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
        <section
            style={{
                backgroundImage: "url('/images/vector-pokeball-bw.png')",
                backgroundSize: '1000px',
            }}
            className="relative h-[400px] pt-10 bg-primary  max-w-screen w-full flex flex-col items-center gap-10"
        >
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-transparent h-[60%]" />
            <div className="absolute bottom-[-200px] left-[-100px] rounded-full bg-white h-[400px] w-[400px]" />
            <img
                style={{ transform: 'scaleX(-1)' }}
                className="absolute left-[-50px] bottom-[0px] h-[300px] w-fit"
                src="/images/banner-pikachu.png"
                alt="Pikachu"
            />

            {/*<div className="flex flex-col items-center gap-10 bg-white rounded-3xl px-20 py-10">
                <div className="relative">
                    <span
                        //style={{ textShadow: '0 5px 10px rgb(0, 0, 0, 30%)' }}
                        className="font-bold text-[5rem] text-secondary"
                    >
                        PROMOÇÃO
                    </span>
                    <span className="absolute right-[6px] bottom-[6px] font-bold text-[5rem] text-white">
                        PROMOÇÃO
                    </span>
        </div>

                <div className="flex flex-col items-center text-secondary">
                    <span
                        //style={{ textShadow: '0 5px 10px rgb(0, 0, 0, 30%)' }}
                        className="font-bold text-[5rem]"
                    >
                        PROMOÇÃO
                    </span>

                    <span className="text-xl">
                        Os melhores produtos pelos melhores preços!
                    </span>
                </div>

                <div className="relative">
                    <button className="flex items-center rounded-2xl px-12 py-5 bg-secondary text-white font-bold text-3xl">
                        CONFERIR
                    </button>
                    <button className="absolute rounded-2xl right-0 bottom-0 hover:right-[6px] hover:bottom-[6px] flex items-center px-12 py-5 bg-tertiary text-white font-bold text-3xl transition duration-300 ease-out">
                        CONFERIR
                    </button>
                </div>
            </div>*/}

            <div className="absolute bottom-[-40%] flex items-center w-[50%] container overflow-hidden">
                <HeroSlider rounded={true} slides={slides} />
            </div>
        </section>
    );
};

export default HeroSection;
