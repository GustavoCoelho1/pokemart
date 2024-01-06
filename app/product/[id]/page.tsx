import ProductsSection from '@/components/pages/Home/products';
import MainProductSection from '@/components/pages/Product/mainProduct';

const Product = () => {
    return (
        <main
            className={`flex gap-20 bg-white min-h-screen pt-[160px] flex-col items-center transition ease-in duration-300`}
        >
            <MainProductSection />
            <ProductsSection />
        </main>
    );
};

export default Product;
