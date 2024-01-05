import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="fixed z-50 top-0 left-0 w-full h-[80px] flex justify-center bg-highlightB">
            <div className="container p-5 w-full h-full flex justify-around items-center">
                <Image
                    src={'/images/pokemon-logo.png'}
                    alt="PokéMart"
                    width={100}
                    height={100}
                />

                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-5">
                        <Image
                            src={'/images/nav-favorites.png'}
                            alt="PokéMart"
                            width={40}
                            height={40}
                            unoptimized
                        />

                        <button className="hover:scale-110 transition duration-300">
                            <Image
                                src={'/images/nav-cart.png'}
                                alt="PokéMart"
                                width={40}
                                height={40}
                                unoptimized
                            />
                        </button>
                    </div>

                    <div className="h-[30px] w-[2px] bg-white rounded-xl" />

                    <Image
                        src={'/images/nav-pfp.png'}
                        alt="PokéMart"
                        width={50}
                        height={50}
                        unoptimized
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
