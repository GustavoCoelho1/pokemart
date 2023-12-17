import { MdOutlineCatchingPokemon } from 'react-icons/md';

const BuyButton = () => {
    return (
        <button className="flex gap-3 bg-highlightA items-center justify-center rounded-[1.75rem] py-4 px-12 text-3xl">
            <MdOutlineCatchingPokemon className="text-[40px] text-white" />
            <span className="font-baloo text-white font-bold">COMPRAR</span>
        </button>
    );
};

export default BuyButton;
