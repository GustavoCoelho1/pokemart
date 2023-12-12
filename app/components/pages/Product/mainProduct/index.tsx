const MainProductSection = () => {
    return (
        <section className="flex w-full justify-center gap-32 container">
            <div className="flex flex-col gap-5">
                <div className="bg-gray-400 rounded-3xl h-[500px] min-w-[600px]" />
                <div className="flex justify-between">
                    <div className="bg-gray-400 rounded-3xl h-[140px] min-w-[140px]" />
                    <div className="bg-gray-400 rounded-3xl h-[140px] min-w-[140px]" />
                    <div className="bg-gray-400 rounded-3xl h-[140px] min-w-[140px]" />
                    <div className="bg-gray-400 rounded-3xl h-[140px] min-w-[140px]" />
                </div>
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col">
                    <span className="font-baloo font-bold text-[60px]">
                        Título
                    </span>
                    <div className="flex items-center gap-10">
                        <div>Estrelas</div>
                        <div className="flex gap-5">
                            <span>Like</span>
                            <span>Compartilhar</span>
                        </div>
                    </div>
                </div>

                <span className="text-gray text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident ipsa maiores fuga eligendi sequi! Harum laudantium
                    eum fugiat molestias, voluptates commodi odit vero
                    aspernatur quis, ullam quisquam, eveniet pariatur
                    voluptatem.
                </span>

                <div className="flex flex-col gap-5">
                    <div className="flex relative w-fit">
                        <span className="text-xl font-bold">Tamanho</span>
                        <div className="absolute h-[4px] bottom-[-7px] right-6 left-1 rounded-3xl bg-black" />
                    </div>
                    <div className="flex gap-3">
                        <div className="flex items-center justify-center w-14 h-14 rounded-full border-2 text-lg font-bold">
                            P
                        </div>
                        <div className="flex items-center justify-center w-14 h-14 rounded-full border-2 text-lg font-bold">
                            M
                        </div>
                        <div className="flex items-center justify-center w-14 h-14 rounded-full border-2 text-lg font-bold">
                            G
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="flex gap-2">
                        <div>O</div>
                        <span className="text-xl font-bold text-red-600">
                            35% de desconto!
                        </span>
                    </div>
                    <div className="flex gap-2">
                        <span className="text-[60px] leading-[6rem] font-baloo font-bold text-red-600">
                            R$ 89.90
                        </span>
                        <span className="flex items-center justify-center relative">
                            <span className="font-baloo font-semibold text-2xl text-gray-400">
                                R$ 119.90
                            </span>
                            <div className="absolute rounded-2xl bg-gray-400 right-[-2px] left-[-2px] h-[3px]" />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainProductSection;
