const HeroSection = () => {
    return (
        <section className="relative flex h-full min-h-screen w-full flex-col items-center justify-center bg-[url('/images/hero-bg.jpg')] bg-cover before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gradient-to-b before:from-black/70 before:to-black/10">
            <div className="container z-20 flex h-full w-full flex-col items-center justify-center gap-10 pt-[120px] text-2xl font-bold">
                <span className="font-poppins text-2xl font-bold text-white drop-shadow-sm">
                    O melhor do mundo pokémon em um só lugar.
                </span>
                <div className="grid h-[400px] w-[80%] grid-cols-2 grid-rows-2 gap-3">
                    <div className="col-[1/2] row-[1/3] rounded-3xl bg-light"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
