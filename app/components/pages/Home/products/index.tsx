'use client';

import { BsFire } from 'react-icons/bs';

import ProductCard from 'components/design/ProductCard';
import Slider from 'react-slick';

const ProductsSection = () => {
    return (
        <section className="container w-full h-full bg-primary">
            <div className="w-full h-full bg-white flex flex-col gap-3">
                <div className="flex font-baloo font-bold text-2xl text-highlightC gap-2">
                    <BsFire />
                    <span>Em destaque</span>
                </div>

                <Slider>
                    <div>
                        <div className="flex justify-center gap-5">
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default ProductsSection;
