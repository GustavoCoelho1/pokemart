import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';

// const CATEGORIAS_POR_NOME = gql`
//     query ($name: String!) {
//         categoriasByName(name: $nome) {
//             cat_nome
//             cat_cod
//         }
//     }
// `;

export interface iListItem {
    id?: string;
    slug?: string;
    name: string;
}

export interface iEntity {
    entityname: string;
    searchFunction: (val: string) => Promise<iListItem[]>;
}

interface Props {
    setVisible: (val: boolean) => void;
    search: string;
    entity: iEntity;
    onItemClick: (val: iListItem) => void;
}

const SearchList: React.FC<Props> = ({
    setVisible,
    search,
    entity: { searchFunction, entityname },
    onItemClick,
}) => {
    const [list, setList] = useState<iListItem[]>([]);

    useEffect(() => {
        if (search.length >= 1) {
            searchFunction(search).then((entities) => {
                setVisible(true);
                setList(entities);
            });
        } else {
            setVisible(false);
            setList([]);
        }
    }, [search]);

    return (
        <div className="flex w-full flex-col items-center">
            {search.length >= 1 ? (
                list?.length > 0 ? (
                    list.map((entity) => (
                        <div
                            onClick={() => onItemClick(entity)}
                            key={entity.name}
                            className="flex w-5/6 cursor-pointer justify-center border-b border-violet-200 py-2"
                        >
                            <span className="text-center">{entity.name}</span>
                        </div>
                    ))
                ) : (
                    <span>{entityname} não encontrado(a)!</span>
                )
            ) : (
                <span>Digite o nome do(a) {entityname}</span>
            )}
        </div>
    );
};

export default SearchList;
