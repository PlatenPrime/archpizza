import { cn } from '@/lib/utils';
import React from 'react'
import { Container } from './container';
import Image from 'next/image';
import { Button } from '../ui';
import { User } from 'lucide-react';
import { Title } from './title';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn("flex items-center justify-between", className)} >
            <Container className="flex items-center justify-between p-2  w-full bg-slate-500/20" >



                <div
                    className="flex gap-1"
                >
                    <Image src="/assets/images/logo-btw.png" alt="logo-btw" width={50} height={50} className='rounded-xl' />

                    <div
                    className="flex flex-col justify-between"
                    >
                        <h1 className="text-2xl uppercase font-black" >BTW</h1>
                        <p
                            className="text-sm text-gray-300 leading-3"
                        >BTrade Warehouse App</p>
                    </div>
                </div>



                <div
                    className="flex items-center gap-3"
                >
                    <Button variant="outline" className="flex items-center gap-1">
                        <User size={16} />
                        Вхід
                    </Button>
                </div>


<Title text="BTW" size="sm" className="text-white" />




            </Container>
        </header>
    );
}