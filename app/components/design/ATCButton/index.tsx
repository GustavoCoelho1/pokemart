import { BsFillHandbagFill } from 'react-icons/bs';

interface Props {
    fullfilled: boolean;
    color: string;
    rounded: boolean;
    size: string;
}

const ATCButton: React.FC<Props> = ({ fullfilled, color, rounded, size }) => {
    const btnColor = `border border-${color}`;
    const btnFullFilledColor = `bg-${color}`;
    const btnSize = `w-[${size}] h-[${size}]`;

    return (
        <button
            className={` flex items-center justify-center w-full h-full ${
                fullfilled ? btnFullFilledColor : btnColor
            }  ${rounded ? 'rounded-full' : 'rounded-[1.75rem]'}`}
        >
            {fullfilled ? (
                <img
                    src="/images/ATCButtonWhite.png"
                    alt=""
                    className={`w-3/5 h-full object-contain`}
                />
            ) : (
                <img
                    src="/images/ATCButtonRed.png"
                    alt=""
                    className={`w-3/5 h-full object-contain`}
                />
            )}
        </button>
    );
};

export default ATCButton;
