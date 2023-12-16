interface OptionsProps {
    title: string;
    options: Array<string>;
}

interface Props {
    selectedOptions: any[];
    setSelectedOptions: (val: any[]) => void;
    options: {
        options: OptionsProps[];
        availableOptions: Array<string>[];
    };
}

const ProductOptions: React.FC<Props> = ({
    options,
    selectedOptions,
    setSelectedOptions,
}) => {
    return <div></div>;
};
