import { BsSearch } from 'react-icons/bs';

const HeroSection = () => {
    return (
        <section className="relative flex h-full min-h-[50vh] w-full flex-col items-center justify-center bg-[url('/images/hero-bg.png')] bg-cover before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gradient-to-b before:from-black/60 before:to-black/10">
            <div className="container z-20 flex h-full w-full flex-col items-center justify-center gap-10 pt-[60px] text-2xl">
                <img
                    className="w-[500px]"
                    src="/images/pokemon-logo.png"
                    alt=""
                />
            </div>
        </section>
    );
};

export default HeroSection;
