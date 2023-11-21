import { BsHeart } from 'react-icons/bs';

const FavoriteButton = () => {
    return (
        <button className="rounded-full bg-white border border-gray-400 text-gray-400 flex items-center justify-center w-9 h-9">
            <BsHeart />
        </button>
    );
};

export default FavoriteButton;
