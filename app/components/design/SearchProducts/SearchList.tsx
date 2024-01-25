import { useEffect, useState, useContext } from 'react';
import { iItemProps } from '.';
import { useRouter } from 'next/router';

// const CATEGORIAS_POR_NOME = gql`
//     query ($name: String!) {
//         categoriasByName(name: $nome) {
//             cat_nome
//             cat_cod
//         }
//     }
// `;

interface Props {
    setVisible: (val: boolean) => void;
    search: string;
}

interface iListItem {
    slug: string;
    name: string;
}

const SearchList: React.FC<Props> = ({ setVisible, search }) => {
    const [list, setList] = useState<iListItem[]>([]);
    const { push } = useRouter();

    const searchProduct = async (productName: string) => {
        // const { data } = await GQLClient.query({
        //     query: CATEGORIAS_POR_NOME,
        //     variables: {
        //         name: categoryName,
        //     },
        // });

        const res = [
            { slug: 'exemplo-slug', name: 'Touca pikachu' },
        ] as Array<iListItem>;

        return res;
    };

    const handleItemClick = (product: iListItem) => {
        push(product.slug);
    };

    useEffect(() => {
        if (search.length >= 1) {
            searchProduct(search).then((products) => {
                setList(products);
            });
        }
    }, [search]);

    return (
        <div className="flex w-full flex-col items-center">
            {search.length >= 1 ? (
                list?.length > 0 ? (
                    list.map((product) => (
                        <div
                            onClick={() => handleItemClick(product)}
                            key={product.slug}
                            className="flex w-5/6 cursor-pointer justify-center border-b border-violet-200 py-2"
                        >
                            <span className="text-center">{product.name}</span>
                        </div>
                    ))
                ) : (
                    <span>Produto não encontrado!</span>
                )
            ) : (
                <span>Digite o nome da produto</span>
            )}
        </div>
    );
};

export default SearchList;
