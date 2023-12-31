'use client'
import { motion, useScroll, useVelocity } from 'framer-motion';
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineHome } from 'react-icons/ai';
import Image from 'next/image';
import { BsCart4 } from 'react-icons/bs';
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineFeaturedPlayList } from 'react-icons/md';
import { TbListDetails } from 'react-icons/tb';
import { VscAccount } from 'react-icons/vsc';
import styles from '../../app/styles/nav.module.css';
const logo = '/logo.jpg'
const slideDistance = 100
const threshold = 500
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)

    const [isScrollingBack, setIsScrollingBack] = useState(false)
    const [isAtTop, setIsAtTop] = useState(true)
    const [isInView, setIsInView] = useState(true)


    useEffect(() => {
        scrollVelocity.onChange((latest) => {
            if (latest > 0) {
                setIsScrollingBack(false)
                return
            }
            if (latest < -threshold) {
                setIsScrollingBack(true)
                return
            }
        })
    }, [])

    useEffect(
        () => scrollY.onChange((latest) => setIsAtTop(latest <= 0)),
        []
    )

    useEffect(
        () => setIsInView(isScrollingBack || isAtTop),
        [isScrollingBack, isAtTop]
    )


    const links = [
        {
            id: 1,
            link: "/",
            name: 'Home',
            badge: false,
            icon: <AiOutlineHome size={15} />
        },
        {
            id: 2,
            link: "/About",
            name: 'About',
            badge: false,
            icon: <TbListDetails size={15} />
        },
        {
            id: 3,
            link: "/Blog",
            name: 'Blog',
            badge: false,
            icon: <MdOutlineFeaturedPlayList size={15} />
        },
        {
            id: 4,
            link: "/Cart",
            name: 'Cart',
            badge: true,
            icon: <BsCart4 size={15} />
        },
        {
            id: 5,
            link: "/login",
            name: 'Account',
            badge: false,
            icon: <VscAccount size={15} />
        },
    ];

    return (
        <motion.div
            className={`flex justify-between items-center w-full transition-opacity ease-in duration-700   text-white h-16  z-50 ${isInView === true ? 'relative bg-teal-500' : 'opacity-100 fixed bg-blue-400'} `}>
            <div style={{ paddingLeft: '20px' }}>
                {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
                <h1 className="text-5xl font-signature ml-2">
                    {/* <a
                        className="link-underline link-underline-black"
                        href=""
                        target="_blank"
                        rel="noreferrer"
                    >
                        Logo
                    </a> */}
                    <Image src={logo} alt="No Logo" width={50} height={50} className="rounded-md" />
                </h1>
            </div>
            <div className={styles.clickIcon} style={{ paddingRight: '20px' }}>

                <ul style={{ display: 'flex', flexDirection: 'row', listStyle: 'none', gap: '10px' }}>
                    {links.map(({ id, link, icon, name, badge }) => (

                        <li
                            key={id}
                            className="nav-links px-4 cursor-pointer capitalize font-medium  hover:scale-105  duration-200 link-underline"
                            style={{ display: 'flex', flexDirection: 'row', gap: '2px', justifyContent: 'center', alignItems: 'center' }}
                        >
                            {icon}
                            <Link className='flex flex-row gap-1 relative' style={{ textDecoration: 'none', color: 'white', fontSize: '15px' }} href={link}>
                                {name}
                                {badge === true ? <div className="absolute -top-2 -right-4 badge badge-secondary bg-red-500 rounded-full px-1 text-sm">0</div> : null}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {nav && (
                <ul
                    // className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500"
                    className={styles.navClickIcon}
                    style={{ listStyle: 'none', position: 'absolute', top: '70px', zIndex: 10, width: '100%', background: 'white' }}
                >

                    {links.map(({ id, link, name }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                            style={{ background: 'green', height: '35px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '20px' }}

                        >
                            <Link style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }} onClick={() => setNav(!nav)} href={link}>
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            <div
                onClick={() => setNav(!nav)}
                // className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden navicon{}"
                className={styles.navicon}
                style={{ cursor: 'pointer', paddingRight: '20px' }}
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>


        </motion.div>
    );
};

export default Navbar;