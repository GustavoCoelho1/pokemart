interface OptionsProps {
    title: string;
    options: Array<string>;
}

interface Props {
    selectedOptions: any[];
    setSelectedOptions: (val: any[]) => void;
    options: {
        options: Array<OptionsProps>;
        availableOptions: Array<string>[];
    };
}

const ProductOptions: React.FC<Props> = ({
    options,
    selectedOptions,
    setSelectedOptions,
}) => {
    return <div className="flex flex-col"></div>;
};

export default ProductOptions;
