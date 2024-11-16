import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import React, { useState } from 'react'

export const HomePage= function() { 

  const [nav,setNav]=useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);


  return(<div className='overflow-x-hidden'>
    <div> 
      <Nav/>
      <MobileNav/>
   
    </div>

  </div>
  )
  
}

export default HomePage;
