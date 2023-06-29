import React from 'react'
import NameIcon from './NameIcon'
import Link from 'next/link'


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



// A top navbar that links to the different pages of the website
// Style is modern, white text, black background, and a little bit of transparency
// The current page is highlighted in a different color

const Header = ({current_page}) => {
    return (
        <div className="sticky top-0 flex w-full flex-row items-center justify-start p-3 bg-black bg-opacity-75">
            <div className="ml-2 mr-8">
                <NameIcon />
            </div>
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