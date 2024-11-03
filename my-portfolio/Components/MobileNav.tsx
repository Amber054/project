import { XMarkIcon } from '@heroicons/react/16/solid'
import React from 'react'

interface props{
    nav: boolean;
    closeNav: () => void;
}
const MobileNav = ({nav, closeNav}: props) => {
    const navAnimation = nav? "translate-x-0" : "translate-x-[-100%]";
    return (
        <div className={'fixed ${navAnimation} transformed transition-all durarion-300 top-0 left-0 right-0 bottom-0 z-[1000] bg-[#01901a]'}>
            <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
                <div className='nav-link-mobile'>HOME</div>
                <div className='nav-link-mobile'>SERVICES</div>
                <div className='nav-link-mobile'>ABOUT</div>
                <div className='nav-link-mobile'>PROJECT</div>
                <div className='nav-link-mobile'>BLOG</div>
                <div className='nav-link-mobile'>CONTACT</div>
            </div>
            <div onClick={closeNav} className='absuolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400'>
                <XMarkIcon></XMarkIcon>
            </div>
            
            </div>
    )
        
    
}

export default MobileNav