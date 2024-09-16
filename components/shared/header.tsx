import { cn } from '@/lib/utils';
import React from 'react'
import { Container } from './container';
import Image from 'next/image';
import { Button } from '../ui';
import { User } from 'lucide-react';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn("flex items-center justify-between", className)} >
            <Container className="flex items-center justify-between py-8 " >



                <div
                    className=""
                >
                    <Image src="/assets/images/logo-btw.png" alt="logo-btw" width={100} height={100} className='rounded-xl' />

                    <div>
                        <h1 className="text-2xl uppercase font-black" >BTW</h1>
                        <p
                            className="text-sm text-gray-300 leading-3"
                        >BTrade Warehouse App</p>
                    </div>
                </div>



                <div
                    className="flex items-center gap-3"
                >
                    <Button variant="outline">
                        <User size={16} />
                        Вхід
                    </Button>
                </div>






            </Container>
        </header>
    );
}