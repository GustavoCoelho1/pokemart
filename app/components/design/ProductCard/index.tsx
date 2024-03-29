import ATCButton from '../ATCButton';
import FavoriteButton from '../FavoriteButton';

const ProductCard = () => {
    return (
        <div className="w-[240px] md:w-[300px] min-h-[200px] cursor-pointer overflow-hidden bg-white border rounded-2xl flex flex-col hover:shadow-sm transition duration-300 ease-out hover:translate-y-[-5px]">
            <div className="relative min-w-[100px]">
                <div className="w-full h-[200px] md:h-[250px] flex items-end justify-center bg-light">
                    <img className="w-full h-[90%] object-contain" src="/images/idle-product.png" alt="" />
                </div>
                <div className="absolute h-[20px] bg-gradient-to-t bottom-0 left-0 right-0 from-white to-transparent" />
            </div>
            <div className="flex flex-col p-5 pt-4 gap-3">
                <span className="overflow-hidden font-bold text-ellipsis whitespace-nowrap">
                    Touca Pikachu muito linda
                </span>
                <div className="w-full flex justify-between">
                    <div className="flex flex-col font-baloo font-bold">
                        <div className="relative text-xs px-1 w-fit flex items-center justify-center">
                            <span className="text-gray-400 leading-3">
                                R$ 100.00
                            </span>
                            <div className="absolute right-0 left-0 bg-gray-400 h-[1.5px] rounded-xl" />
                        </div>
                        <span className="text-[1.5rem] leading-7 text-highlightC">
                            R$ 89.90
                        </span>
                    </div>
                    <div className="flex items-center self-end gap-1">
                        <FavoriteButton
                            withBorder={true}
                            color="primary"
                            clickedColor="highlightA"
                        />
                        <div className="w-[36px] h-[36px]">
                            <ATCButton
                                color="highlightA"
                                fullfilled={true}
                                rounded={true}
                                size="0x"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
