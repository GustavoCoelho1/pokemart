import { BsShareFill } from 'react-icons/bs';

interface Props {
    color: string;
}

const ShareButton: React.FC<Props> = ({ color }) => {
    const buttonColor = `text-${color}`;

    return (
        <button className={`${buttonColor}`}>
            <BsShareFill />
        </button>
    );
};

export default ShareButton;
