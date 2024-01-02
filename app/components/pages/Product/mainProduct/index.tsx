'use client';

import { useState } from 'react';
import OpenReviewsButton from './OpenReviewsButton';
import ProductOptions from './ProductOptions';
import FavoriteButton from '@/components/design/FavoriteButton';

import { BsShareFill } from 'react-icons/bs';
import { CiDiscount1 } from 'react-icons/ci';
import ShareButton from '@/components/design/ShareButton';
import ATCButton from '@/components/design/ATCButton';
import BuyButton from './BuyButton';
import { VariantSelector } from './VariantSelector';
import ProductGallery from './ProductGallery';

const MainProductSection = () => {
    const [selectedOptions, setSelectedOptions] = useState([
        { title: '', options: [''] },
    ]);

    const imgs = [
        'https://www.pngall.com/wp-content/uploads/13/Galaxy-S23-Ultra.png',
        'https://imgs.ponto.com.br/1555396904/1xg.jpg?imwidth=500',
        'https://www.pngall.com/wp-content/uploads/13/Galaxy-S23-Ultra.png',
        'https://www.pngall.com/wp-content/uploads/13/Galaxy-S23-Ultra.png',
        'https://www.pngall.com/wp-content/uploads/13/Galaxy-S23-Ultra.png',
    ];
    return (
        <section className="flex w-full items-center gap-32 container bg-main">
            <ProductGallery images={imgs} axis="horizontal" maxSize={600} />
            <div className="flex flex-col gap-10">
                <div className="flex flex-col">
                    <span className="font-baloo font-bold text-[60px]">
                        Touca Pikachu Pokémon
                    </span>
                    <div className="flex items-center gap-10">
                        <OpenReviewsButton
                            product={{ rating: [{ stars: 5 }] }}
                            ratingAvarage={5}
                            ratingAmount={1}
                        />

                        <div className="flex text-2xl gap-3">
                            <FavoriteButton
                                clickedColor="highlightA"
                                color="primary"
                                withBorder={false}
                            />
                            <ShareButton color="primary" />
                        </div>
                    </div>
                </div>

                <span className="text-primary text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident ipsa maiores fuga eligendi sequi! Harum laudantium
                    eum fugiat molestias, voluptates commodi odit vero
                    aspernatur quis, ullam quisquam, eveniet pariatur
                    voluptatem.
                </span>

                <VariantSelector
                    options={[
                        {
                            id: 'tamanho',
                            name: 'Tamanho',
                            values: ['P', 'M', 'G'],
                        },
                        {
                            id: 'cor',
                            name: 'Cor',
                            values: ['Preta', 'Branca', 'Azul'],
                        },
                    ]}
                    variants={[
                        {
                            id: 'tamanhoCor',
                            availableForSale: true,
                            price: 8,
                            title: 'TamanhoCor',
                            selectedOptions: [
                                { name: 'cor', value: 'Preta' },
                                { name: 'tamanho', value: 'M' },
                            ],
                        },
                        {
                            id: 'tamanhoCor',
                            availableForSale: true,
                            price: 8,
                            title: 'TamanhoCor',
                            selectedOptions: [
                                { name: 'cor', value: 'Branca' },
                                { name: 'tamanho', value: 'M' },
                            ],
                        },
                        {
                            id: 'tamanhoCor',
                            availableForSale: true,
                            price: 8,
                            title: 'TamanhoCor',
                            selectedOptions: [
                                { name: 'cor', value: 'Branca' },
                                { name: 'tamanho', value: 'G' },
                            ],
                        },
                    ]}
                />

                <div className="flex flex-col">
                    <div className="flex items-center gap-1 text-highlightA">
                        <CiDiscount1 className="text-2xl" />
                        <span className="text-xl font-bold">
                            35% de desconto!
                        </span>
                    </div>
                    <div className="flex gap-2">
                        <span className="text-[60px] leading-[6rem] font-baloo font-bold text-highlightA">
                            R$ 89.90
                        </span>
                        <span className="flex items-center justify-center relative">
                            <span className="font-baloo font-semibold text-2xl text-primary">
                                R$ 119.90
                            </span>
                            <div className="absolute rounded-2xl bg-primary right-[-2px] left-[-2px] h-[3px]" />
                        </span>
                    </div>

                    <div className="flex gap-4">
                        <BuyButton />
                        <div className="w-20 h-20">
                            <ATCButton
                                color="highlightA"
                                fullfilled={false}
                                rounded={false}
                                size="2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainProductSection;
