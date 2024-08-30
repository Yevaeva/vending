'use client';


import React, {useEffect, useState} from 'react';
import {Menu} from "antd";
import Link from "next/link";
import localFont from "next/dist/compiled/@next/font/dist/local";
import Image from "next/image";
import {usePathname} from "next/navigation";


function Nav() {
    const [hash, setHash] = useState('')
    const path = usePathname()

    useEffect(() => {
        if (window) {
            if (path.length > 1) {
                setHash(path)
            }else{
                setHash(window?.location.hash || '/')
            }

        }
    }, []);

    const items = [
        {
            key: "/",
            label: <p onClick={() => setHash('/')}><Link href={'/'}>Home</Link></p>,
        },
        {
            key: "#luxury",
            label: <p onClick={() => setHash('#luxury')}><Link href={'#luxury'}>Luxury for Less</Link></p>,
        },
        {
            key: "#smart",
            label: <p onClick={() => setHash('#smart')}><Link href={'#smart'}>Smart & Simple</Link></p>
        },
        {
            key: "#how",
            label: <p onClick={() => setHash('#how')}><Link href={'#how'}>How It Works</Link></p>
        },
        // {
        //     key: "#about",
        //     label:<p onClick={()=>setHash('#about')}><Link href={'#about'}>About Us</Link></p>
        // },
        //
        {
            key: "/contact",
            label: <p onClick={() => setHash('/contact')}><Link href={'/contact'}>Contact Us</Link></p>,
        },

    ];

    return (
        <>
            <div className="mt-1">

                <div onClick={() => setHash('/')}><Link href={"/"}>
                    <Image src={'/images/svg/logo-no-background.svg'} alt={'Logo'}
                           width={200} height={64}/>
                </Link></div>

            </div>
            <Menu
                theme="light"
                mode="horizontal"
                className={"flex-1 justify-end"}
                defaultSelectedKeys={[hash]}
                activeKey={hash}
                items={items}
            /></>

    );
}

export default React.memo(Nav);