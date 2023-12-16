'use client';

import { motion } from 'framer-motion';
//import { gql, useQuery } from '@apollo/client';
//import { iProduto } from 'types/Produto';
import { BiArrowBack } from 'react-icons/bi';
import StartRating from './StarRating';
import RatingPerStar from './RatingPerStar';
//import Comments from './Comments/';
import { useEffect, useState } from 'react';
import Modal from '../Modal';

// const AVALIACOES_PRODUTO = gql`
//     query ($id: ID!) {
//         AVALIACOES_PRODUTO: produtoAvaliacoesByProdutoId(id: $id) {
//             avaliacao_comentario
//             avaliacao_Stars
//             avaliacao_data
//             usuario {
//                 user_nome
//             }
//         }
//     }
// `;

interface Props {
    product: {
        rating: [{ stars: number }];
    };
    avarage: number;
    visible: boolean;
    setVisible: (val: boolean) => void;
}

const ProductReviews = ({ product, avarage, visible, setVisible }: Props) => {
    /*const { data, loading, error } = useQuery(AVALIACOES_PRODUTO, {
        variables: {
            id: produto.prod_cod,
        },
    });*/

    const [fiveStarPercentage, setFiveStarPercentage] = useState(0);
    const [fourStarPercentage, setFourStarPercentage] = useState(0);
    const [threeStarPercentage, setThreeStarPercentage] = useState(0);
    const [twoStarPercentage, setTwoStarPercentage] = useState(0);
    const [oneStarPercentage, setOneStarPercentage] = useState(0);

    useEffect(() => {
        const ratingTotal = product.rating.length;

        let fiveStars = 0;
        let fourStars = 0;
        let threeStars = 0;
        let twoStars = 0;
        let oneStar = 0;

        product.rating.forEach((item) => {
            switch (item.stars) {
                case 1:
                    oneStar++;
                    break;
                case 2:
                    twoStars++;
                    break;
                case 3:
                    threeStars++;
                    break;
                case 4:
                    fourStars++;
                    break;
                case 5:
                    fiveStars++;
                    break;
            }
        });

        setFiveStarPercentage((fiveStars / ratingTotal) * 100);
        setFourStarPercentage((fourStars / ratingTotal) * 100);
        setThreeStarPercentage((threeStars / ratingTotal) * 100);
        setTwoStarPercentage((twoStars / ratingTotal) * 100);
        setOneStarPercentage((oneStar / ratingTotal) * 100);
    }, []);

    return (
        <Modal show={visible} handleClose={() => setVisible(false)}>
            <motion.div
                whileHover={{ x: -3, scale: 1.1 }}
                onClick={() => setVisible(false)}
                className="absolute left-4 top-4 z-10 cursor-pointer"
            >
                <BiArrowBack className="text-xl text-violet-600" />
            </motion.div>

            <div className="flex w-full flex-col items-center">
                <h1 className="mb-3 text-xl text-violet-600">
                    Opniões do produto
                </h1>
                <div className="flex w-full items-center justify-center">
                    <div className="mr-10 flex w-1/2 flex-col items-center">
                        <h1 className="mb-3 text-4xl text-violet-600">
                            {avarage.toFixed(1)}
                        </h1>
                        <StartRating
                            color="text-violet-600"
                            size="text-base"
                            stars={avarage}
                        />
                    </div>

                    <div className="flex w-[250px] flex-col">
                        <RatingPerStar
                            star={5}
                            percentage={fiveStarPercentage}
                        />
                        <RatingPerStar
                            star={4}
                            percentage={fourStarPercentage}
                        />
                        <RatingPerStar
                            star={3}
                            percentage={threeStarPercentage}
                        />
                        <RatingPerStar
                            star={2}
                            percentage={twoStarPercentage}
                        />
                        <RatingPerStar
                            star={1}
                            percentage={oneStarPercentage}
                        />
                    </div>
                </div>

                {/*<div className="flex w-10/12 flex-col">
                    {loading ? (
                        <span>Carregando...</span>
                    ) : error ? (
                        <span>
                            Ocorreu um erro ao buscar as avaliações, tente
                            novamente mais tarde!
                        </span>
                    ) : (
                        <CommentsList list={data.AVALIACOES_PRODUTO} />
                    )}
                    </div>*/}
            </div>
        </Modal>
    );
};

export default ProductReviews;
