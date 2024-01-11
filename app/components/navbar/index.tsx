import Image from 'next/image';
import { BsSearch } from 'react-icons/bs';
import CartButton from './buttons/CartButton';

const Navbar = () => {
    return (
        <nav className="fixed left-0 top-0 z-50 flex h-[80px] w-full justify-center shadow-sm backdrop-blur-sm">
            <div className="container flex h-full w-full items-center justify-between">
                <Image
                    src={'/images/pokemon-logo.png'}
                    alt="PokéMart"
                    width={100}
                    height={100}
                />

                <div className="flex h-fit w-[400px] items-center overflow-hidden">
                    <input
                        type="text"
                        placeholder="Pesquisar produtos..."
                        className="h-[45px] w-full rounded-l-3xl border-b border-l border-t border-light/40 px-4 bg-light/20 py-3 text-sm text-light outline-none placeholder:text-light/40"
                    />
                    <button className="h-[45px] w-[30px] rounded-r-3xl border-b border-r border-t bg-light/20 border-light/40 text-light/40 transition duration-300 ease-out hover:text-light">
                        <BsSearch />
                    </button>
                </div>

                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-5">
                        <button
                            title="Favoritos"
                            className="flex h-[40px] w-[40px] items-center justify-center rounded-full transition duration-300 ease-out hover:shadow-md hover:translate-y-[-3px]"
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

                    <div className="h-[30px] w-[2px] rounded-xl bg-light/40" />

                    <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-light/40">
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
