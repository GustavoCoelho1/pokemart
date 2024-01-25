'use client';

import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import ProductsSearchList from './ProductsSearchList';

export interface iItemProps {
    link: string;
}

const ProductsSuggestions = () => {
    const [visible, setVisible] = useState(false);
    const [search, setSearch] = useState('');

    return (
        <div className="relative flex h-fit w-[400px] items-center overflow-hidden shadow-sm">
            <input
                type="text"
                value={search}
                placeholder={'Pesquisar produtos...'}
                onChange={(e) => setSearch(e.target.value)}
                onBlur={() => setVisible}
                className="h-[45px] w-full rounded-l-3xl border-b border-l border-t border-light/80 bg-light px-4 py-3 text-sm text-highlightC outline-none transition duration-300 ease-out placeholder:text-light/80 placeholder-shown:bg-black/40"
            />
            <button className="h-[45px] w-[30px] rounded-r-3xl border-b border-r border-t border-light/80 bg-black/40 text-sm text-light transition duration-300 ease-out hover:text-highlightC">
                <BsSearch />
            </button>

            <ProductsSearchList
                visible={visible}
                setVisible={setVisible}
                search={search}
            />
        </div>
    );
};

//Light theme
//
// <div className="flex h-fit w-[400px] items-center overflow-hidden">
//     <input
//         type="text"
//         placeholder="Pesquisar produtos..."
//         className="h-[45px] w-full rounded-l-3xl border-b border-l border-t border-light/40 bg-light/20 px-4 py-3 text-sm text-light outline-none placeholder:text-light/40"
//     />
//     <button className="h-[45px] w-[30px] rounded-r-3xl border-b border-r border-t border-light/40 bg-light/20 text-light/40 transition duration-300 ease-out hover:text-light">
//         <BsSearch />
//     </button>
// </div>;

export default ProductsSuggestions;
