import { useRouter } from 'next/router';
import SearchList, { iEntity, iListItem } from '../SearchList';
import { motion as m } from 'framer-motion';
import { disappearVariants } from '@/lib/animationsVariants';

// const CATEGORIAS_POR_NOME = gql`
//     query ($name: String!) {
//         categoriasByName(name: $nome) {
//             cat_nome
//             cat_cod
//         }
//     }
// `;

interface Props {
    visible: boolean;
    setVisible: (val: boolean) => void;
    search: string;
}

const ProductsSearchList: React.FC<Props> = ({
    visible,
    setVisible,
    search,
}) => {
    const { push } = useRouter();

    const onItemClick = ({ slug }: iListItem) => {
        slug != null && push(slug);
    };

    const searchFunction = async (search: string) => {
        const response: iListItem[] = [
            { slug: 'example-slug', name: 'Touca pikachu' },
        ];
        return response;
    };

    const entity = {
        searchFunction,
        entityname: 'Produto',
    } as iEntity;

    return (
        <m.div
            initial={false}
            animate={visible ? 'show' : 'hide'}
            variants={disappearVariants}
            style={{
                top: '110%',
                minWidth: '250px',
            }}
            className={`absolute z-10 w-full cursor-default`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="flex w-full flex-col rounded-xl border border-violet-300 bg-white p-4"
            >
                <div className="w-full">
                    <SearchList
                        entity={entity}
                        onItemClick={onItemClick}
                        search={search}
                        setVisible={setVisible}
                    />
                </div>
            </div>
        </m.div>
    );
};

export default ProductsSearchList;
