import React from 'react'
import NameIcon from './NameIcon'
import Link from 'next/link'
import { Caveat_Brush } from 'next/font/google'


const pages = [
    'Home',
    'Projects',
    'About',
    'Contact',
]

const paths = [
    '/',
    '/projects',
    '/about',
    '/contact',
]

const caveat_brush = Caveat_Brush({ subsets: ['latin'], weight: ['400']})


// A top navbar that links to the different pages of the website
// Style is modern, white text, black background, and a little bit of transparency
// The current page is highlighted in a different color

const Header = ({current_page}) => {
    var cname = caveat_brush.className
    cname += " text-3xl mr-20 flex self-start"
    return (
        <div className="flex absolute w-full flex-row items-center justify-start p-3 bg-black bg-opacity-75">
            <h1 style={{color: "white"}} className={cname}>LoganKnapp</h1>
            {pages.map((page, index) => {
                if (page === current_page) {
                    return (
                        <div key={index} className='text-white text-xl mr-20'>
                            <Link href={paths[index]} key={index}>
                                {page}
                            </Link>
                        </div>
                    )
                } else {
                    return (
                        <div key={index} className='text-gray-400 text-xl mr-20'>
                            <Link href={paths[index]} key={index}>
                                {page}
                            </Link>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Header