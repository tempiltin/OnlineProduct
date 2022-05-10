import React from 'react'
import Aksiya from '../../Components/UZ/Aksiya/Aksiya'
import NavUz from '../../Components/UZ/Nav/NavUz'
import NavReclam from '../../Components/UZ/NavReclam/NavReclam'
import New from '../../Components/UZ/New/New'
import OldProduct from '../../Components/UZ/OldProduct/OldProduct'
import OurStores from '../../Components/UZ/OurStores/OurStores'
import SpecialOffers from '../../Components/UZ/SpecialOffers/SpecialOffers'
import Stati from '../../Components/UZ/Stati/Stati'

const Home = () => {
  return (
    <>
     <NavUz />
     <NavReclam />
     <Aksiya /> 
     <New />
     <OldProduct />
     <SpecialOffers />
     <OurStores />
     <Stati />
    </>
  )
}

export default Home