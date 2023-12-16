import StartRating from '@/components/design/ProductReviews/StarRating';

interface Props {
    onClick: () => void;
    ratingAvarage: number;
    ratingAmount: number;
}

const OpenReviewsButton: React.FC<Props> = ({
    onClick,
    ratingAmount,
    ratingAvarage,
}) => {
    return (
        <button
            onClick={() => onClick()}
            className="flex items-center justify-center"
            title={ratingAvarage.toString()}
        >
            <StartRating
                color="text-yellow-600"
                size={'text-xl'}
                stars={ratingAvarage}
            />
            <span className="text-yellow-400">({ratingAmount})</span>
        </button>
    );
};

export default OpenReviewsButton;
