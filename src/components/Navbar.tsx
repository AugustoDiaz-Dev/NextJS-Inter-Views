import React from 'react'
import Link from "next/link";
import { AiOutlineHome } from 'react-icons/ai'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { TbBrandJavascript } from 'react-icons/tb'
import { SiTypescript } from 'react-icons/si'

const Navbar = () => {
    return (
        <nav>
            <Link href="/">
                <a className="navBtn borderRadius">
                    <AiOutlineHome size={32} color="var(--myViolet)" />
                    {/* &nbsp;Home */}
                </a>
            </Link>
            <Link href="/reactposts">
                <a className="navBtn borderRadius">
                    <FaReact size={32} color="var(--myLightBlue)" />
                    {/* &nbsp;React */}
                </a>
            </Link>
            <Link href="/jsposts">
                <a className="navBtn borderRadius">
                    <TbBrandJavascript size={32} color="var(--myYellow)" />
                    {/* &nbsp;JS */}
                </a>
            </Link>
            <Link href="/nodeposts">
                <a className="navBtn borderRadius">
                    <FaNodeJs size={32} color="var(--myGreen)" />
                    {/* &nbsp;JS */}
                </a>
            </Link>
            <Link href="/tsposts">
                <a className="navBtn borderRadius">
                    <SiTypescript size={32} color="var(--myBlue)" />
                    {/* &nbsp;JS */}
                </a>
            </Link>
        </nav>
    )
}

export default Navbar