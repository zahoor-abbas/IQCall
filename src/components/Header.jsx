import React from 'react'


const Header = ({ className, img, children }) => {
  return (
    <section className={className}>
       
        <img src={img} alt="" style={{width:'100%'}} />

              {children}
           
         
      
      </section>
  )
}

export default Header
