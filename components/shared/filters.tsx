import React from 'react'
import { Title } from './title';

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={className} >
            <Title text="Фильтрація" size="sm" className="mb-5 font-bold" />
        </div>
    );
}