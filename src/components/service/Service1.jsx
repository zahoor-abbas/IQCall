import React from 'react'

const Service1 = (props) => {
  return (
    <div className='service-card'>
    <img src={props.img} alt='' />
    <div className='' style={{padding:'45px 45px 40px' , lineHeight:'25px', background:'white'}}>
     <h4 className='' style={{color:'#1D1D1D'}}>{props.h4}</h4>
     <p style={{}}>{props.paragraph}</p>
    </div>
   </div>
  )
}

export default Service1
