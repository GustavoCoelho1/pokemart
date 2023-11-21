import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="fixed z-50 top-0 left-0 bg-black w-full h-[70px] flex justify-center">
            <div className="container w-full h-full flex justify-around items-center">
                <Image
                    src={'/images/pokemon-logo.png'}
                    alt="PokéMart"
                    width={100}
                    height={50}
                />
            </div>
        </nav>
    );
};

export default Navbar;
