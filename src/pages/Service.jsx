import React from 'react'
import '../style/service.css'
import Header from '../components/Header'
import img1 from '../assets/01.jpg'
import img2 from '../assets/02.jpg'
import img3 from '../assets/03.jpg'
import img4 from '../assets/04.jpg'
import img5 from '../assets/05.jpg'
import img6 from '../assets/06.jpg'
import img7 from '../assets/07.jpg'
import img8 from '../assets/08.jpg'



import Services_header from '../assets/services.jpg'


const Service = () => {
    const arrr = [
      {
        img : img1,
        h4 : 'Debit Collection',
        paragraph : 'We will allow you to establish a world-class'
      },
      {
        img : img2,
        h4 : 'Custommer Service',
        paragraph :'Center with bicultural & bilingual agents'
      },
      {
        img :img3,
        h4 : 'Lead Generation',
        paragraph : 'Improve direct response time, increase'
      },
      {
        img : img4,
        h4 : 'IT Development',
        paragraph :'We provides nearshore IT staff in Mexico'
      },
      {
        img : img5,
        h4 : 'QA Monitoring',
        paragraph : 'Our QA Team can monitor and screen'
      },
      {
        img : img6,
        h4 : 'IT Development',
        paragraph :'Expand your helpdesk support & development'
      },
      {
        img : img7,
        h4 : 'IT Support',
        paragraph :'Expand your IT Department to Deliver'
      },
      {
        img : img8,
        h4 : 'Auto Finance',
        paragraph :'Expand your Auto Finance Contact Center'
      },
  
    ];
  
    return (
      <>
      <Header img={Services_header} height='400px'/>
      <section>
        <div className='container service-container' style={{}} >
          <div className='service '>
            {arrr.map((value,index)=>(
              <div className='servicecard' key={index}>
                <img src = {value.img}/>
                <div className="servicecard-text">
                <h2 style={{fontSize:'20px'}}>{value.h4}</h2>
                <p>{value.paragraph}</p>
                </div>
               
  
                
              </div>
              
            ))}
            </div>
            
          </div>
          
      </section>
  
      
  
     
      </>
  )
}

export default Service
