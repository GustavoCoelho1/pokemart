import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="fixed z-50 top-0 left-0 w-full h-[100px] flex justify-center">
            <div className="container p-5 w-full h-full flex justify-around items-center">
                <Image
                    src={'/images/pokemon-logo.png'}
                    alt="PokéMart"
                    width={150}
                    height={100}
                />
            </div>
        </nav>
    );
};

export default Navbar;
