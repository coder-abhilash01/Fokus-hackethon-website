import React from 'react'
import ProductShowcase from '../components/ProductShowcase'
import IngredientsSection from '../components/IngredientsSection'
import IconMarquee from '../components/IconMarquee'
import BenefitsSection from '../components/BenefitsSection'
import Footer from '../components/Footer'

const Product = () => {
  return (
    <div>
      <ProductShowcase/>
      <IngredientsSection/>
      <IconMarquee/>
      <BenefitsSection/>
      <Footer/>
    </div>
  )
}

export default Product
