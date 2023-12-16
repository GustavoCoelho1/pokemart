'use client';

import StartRating from '@/components/design/ProductReviews/StarRating';
import ProductReviews from '@/components/design/ProductReviews';
import { useState } from 'react';

interface Props {
    product: {
        rating: [{ stars: number }];
    };
    ratingAvarage: number;
    ratingAmount: number;
}

const OpenReviewsButton: React.FC<Props> = ({
    product,
    ratingAmount,
    ratingAvarage,
}) => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <button
                onClick={() => setVisible(true)}
                className="flex items-center justify-center"
                title={ratingAvarage.toString()}
            >
                <StartRating
                    color="text-highlightB"
                    size={'text-xl'}
                    stars={ratingAvarage}
                />
                <span className="text-highlightB">({ratingAmount})</span>
            </button>

            <ProductReviews
                product={product}
                avarage={ratingAvarage}
                visible={visible}
                setVisible={setVisible}
            />
        </>
    );
};

export default OpenReviewsButton;
