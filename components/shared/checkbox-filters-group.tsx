import React from 'react'

import { FilterCheckboxProps } from './filter-checkbox'






type Item = FilterCheckboxProps;



interface Props {
    title: string;
    items: Item[];
    defaultItems?: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: string[];
    className?: string;
}

export const Component: React.FC<Props> = ({
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = 'Пошук...',
    className,
    onChange,
    defaultValue, 
}) => {
    return (
        <div className={className} >
<p>{title}</p>
        </div>
    );
}