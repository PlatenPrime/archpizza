import { cn } from '@/lib/utils';
import React from 'react'
import { Container } from './container';
import Image from 'next/image';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn("flex items-center justify-between", className)} >
            <Container className="flex items-center justify-between py-8 " >


                <Image src="/assets/images/logo-btw.png" alt="logo-btw" width={100} height={100} className='rounded-xl'/>


            </Container>
        </header>
    );
}