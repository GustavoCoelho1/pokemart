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

const MainProductSection = () => {
    const [selectedOptions, setSelectedOptions] = useState([
        { title: '', options: [''] },
    ]);
    return (
        <section className="flex w-full justify-center gap-32 container bg-main">
            <div className="flex flex-col gap-5">
                <div className="bg-gray-400 rounded-3xl h-[500px] min-w-[600px]" />
                <div className="flex justify-between">
                    <div className="bg-gray-400 rounded-3xl h-[140px] min-w-[140px]" />
                    <div className="bg-gray-400 rounded-3xl h-[140px] min-w-[140px]" />
                    <div className="bg-gray-400 rounded-3xl h-[140px] min-w-[140px]" />
                    <div className="bg-gray-400 rounded-3xl h-[140px] min-w-[140px]" />
                </div>
            </div>
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

                <ProductOptions
                    selectedOptions={selectedOptions}
                    setSelectedOptions={setSelectedOptions}
                    options={{
                        options: [
                            {
                                title: 'Tamanho',
                                options: ['P', 'M', 'G'],
                            },
                            {
                                title: 'Cor',
                                options: ['Preta', 'Branca', 'Azul'],
                            },
                        ],
                        availableOptions: [['G', 'Preta'], ['M, Branca']],
                    }}
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
                        <ATCButton />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainProductSection;
