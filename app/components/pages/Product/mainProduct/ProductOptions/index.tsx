interface OptionsTypeProps {
    title: string;
    options: Array<string>;
}

interface Props {
    selectedOptions: any[];
    setSelectedOptions: (val: any[]) => void;
    options: {
        optionsType: Array<OptionsTypeProps>;
        availableOptions: Array<string>[];
    };
}

/*<ProductOptions
    selectedOptions={selectedOptions}
    setSelectedOptions={setSelectedOptions}
    options={{
        optionsType: [
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
/>*/

const ProductOptions: React.FC<Props> = ({
    options,
    selectedOptions,
    setSelectedOptions,
}) => {
    return (
        <div className="flex flex-col gap-4">
            {options.optionsType.map((type) => {
                return (
                    <div className="flex flex-col gap-5">
                        <div className="flex relative w-fit">
                            <span className="text-xl font-bold">
                                {type.title}
                            </span>
                            <div className="absolute h-[4px] bottom-[-7px] w-[70%] rounded-3xl bg-black" />
                        </div>
                        <div className="flex gap-3">
                            {type.options.map((typeOption) => (
                                <button
                                    className={`flex items-center justify-center border-2 border-primary text-primary text-lg font-bold ${
                                        typeOption.length > 1
                                            ? 'rounded-[1.75rem] px-4 py-4'
                                            : 'rounded-full w-14 h-14'
                                    }`}
                                >
                                    {typeOption}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductOptions;
