'use client';

import clsx from 'clsx';
import { createUrl } from 'lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export type ProductOption = {
    id: string;
    name: string;
    values: string[];
};

export type ProductVariant = {
    id: string;
    title: string;
    availableForSale: boolean;
    selectedOptions: {
        name: string;
        value: string;
    }[];
    price: number;
};

type Combination = {
    id: string;
    availableForSale: boolean;
    [key: string]: string | boolean; // ie. { color: 'Red', size: 'Large', ... }
};

export function VariantSelector({
    options,
    variants,
}: {
    options: ProductOption[];
    variants: ProductVariant[];
}) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const hasNoOptionsOrJustOneOption =
        !options.length ||
        (options.length === 1 && options[0]?.values.length === 1);

    if (hasNoOptionsOrJustOneOption) {
        return null;
    }

    const combinations: Combination[] = variants.map((variant) => ({
        id: variant.id,
        availableForSale: variant.availableForSale,
        // Adds key / value pairs for each variant (ie. "color": "Black" and "size": 'M").
        ...variant.selectedOptions.reduce(
            (accumulator, option) => ({
                ...accumulator,
                [option.name.toLowerCase()]: option.value,
            }),
            {},
        ),
    }));

    return options.map((option) => (
        <dl className="flex flex-col gap-6" key={option.id}>
            <dt className="flex relative w-fit">
                <span className="text-xl font-bold">{option.name}</span>
                <div className="absolute h-[3px] bottom-[-7px] w-[70%] rounded-3xl bg-black" />
            </dt>
            <dd className="flex flex-wrap gap-3">
                {option.values.map((value) => {
                    const optionNameLowerCase = option.name.toLowerCase();

                    // Base option params on current params so we can preserve any other param state in the url.
                    const optionSearchParams = new URLSearchParams(
                        searchParams.toString(),
                    );

                    // Update the option params using the current option to reflect how the url *would* change,
                    // if the option was clicked.
                    optionSearchParams.set(optionNameLowerCase, value);
                    const optionUrl = createUrl(pathname, optionSearchParams);

                    // In order to determine if an option is available for sale, we need to:
                    //
                    // 1. Filter out all other param state
                    // 2. Filter out invalid options
                    // 3. Check if the option combination is available for sale
                    //
                    // This is the "magic" that will cross check possible variant combinations and preemptively
                    // disable combinations that are not available. For example, if the color gray is only available in size medium,
                    // then all other sizes should be disabled.
                    const filtered = Array.from(
                        optionSearchParams.entries(),
                    ).filter(([key, value]) =>
                        options.find(
                            (option) =>
                                option.name.toLowerCase() === key &&
                                option.values.includes(value),
                        ),
                    );
                    const isAvailableForSale = combinations.find(
                        (combination) =>
                            filtered.every(
                                ([key, value]) =>
                                    combination[key] === value &&
                                    combination.availableForSale,
                            ),
                    );

                    // The option is active if it's in the url params.
                    const isActive =
                        searchParams.get(optionNameLowerCase) === value;

                    return (
                        <button
                            key={value}
                            aria-disabled={!isAvailableForSale}
                            disabled={!isAvailableForSale}
                            onClick={() => {
                                router.replace(optionUrl, { scroll: false });
                            }}
                            title={`${option.name} ${value}${
                                !isAvailableForSale ? ' (Sem estoque)' : ''
                            }`}
                            className={clsx(
                                'flex items-center justify-center border-2 text-lg font-bold transition duration-300 ease-out',
                                {
                                    'rounded-[1.75rem] px-4 py-4':
                                        value.length > 1,
                                    'rounded-full w-14 h-14': value.length == 1,
                                    'cursor-default border-highlightC text-highlightC':
                                        isActive,
                                    'text-primary border-primary':
                                        !isActive && isAvailableForSale,
                                    'relative z-10 cursor-not-allowed border-primary overflow-hidden text-primary before:absolute before:inset-x-0 before:-z-10 before:h-[2px] before:-rotate-45 before:bg-primary before:transition-transform':
                                        !isAvailableForSale,
                                },
                            )}
                        >
                            {value}
                        </button>
                    );
                })}
            </dd>
        </dl>
    ));
}
