import Image from 'next/image';
import { BsSearch } from 'react-icons/bs';
import CartButton from './buttons/CartButton';

const Navbar = () => {
    return (
        <nav className="fixed z-50 top-0 left-0 w-full h-[80px] flex justify-center bg-white border">
            <div className="container w-full h-full flex justify-between items-center">
                <Image
                    src={'/images/pokemon-logo.png'}
                    alt="PokéMart"
                    width={100}
                    height={100}
                />

                <div className="flex items-center w-[400px] h-fit overflow-hidden">
                    {/*Criar elemento*/}
                    <input
                        type="text"
                        placeholder="Pesquisar produtos..."
                        className="w-full h-[45px] border-t border-b border-l border-primary/50 text-sm text-primary bg-none outline-none px-4 py-3 rounded-l-3xl placeholder:text-primary/50"
                    />
                    <button className="w-[30px] border-t border-b border-r border-primary/50 bg-white h-[45px] rounded-r-3xl text-primary/50 hover:text-primary transition ease-out duration-300">
                        <BsSearch />
                    </button>
                </div>

                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-5">
                        <button
                            title="Favoritos"
                            className="flex items-center justify-center border rounded-full hover:scale-110 transition ease-out duration-300 w-[40px] h-[40px]"
                        >
                            {/*Criar elemento*/}
                            <Image
                                src={'/images/nav-favorites.png'}
                                alt="Favoritos"
                                width={25}
                                height={40}
                                unoptimized
                            />
                        </button>

                        <CartButton />
                    </div>

                    <div className="h-[30px] w-[2px] bg-light rounded-xl" />

                    <div className="flex bg-light border rounded-full items-center justify-center w-[40px] h-[40px]">
                        <Image
                            src={'/images/nav-pfp.png'}
                            alt="Foto de perfil"
                            width={30}
                            height={50}
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
