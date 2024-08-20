import React from 'react'
import testimonial1 from '../../assets/testimonials01.jpg'
import quote_mark from '../../assets/quote-mark.png'
import author1 from '../../assets/author01.jpg'
import author4 from '../../assets/author04.jpg'

const Testimonial = () => {
  return (
    <section style={{ backgroundColor: "#5476FC" }}>
    <div className="container testimonial-container" style={{padding: "120px 10px"}}>
      <div style={{ color: "white", lineHeight: "30px", textAlign: "center" }}>
        <h5>Testimonial</h5>
        <h3 style={{ marginBottom: "20px" }}>  What People Say About Our <br /> Service</h3>
      </div>
      <div className="testimonial" style={{}}>
        <div className="testimonial-left" style={{}}>
          <img className="img" src={testimonial1} alt="testimonial" style={{}} />
          <div className="testimonial-card">
            <div className="test-card  icon">
              <img src={quote_mark} className=" icon1" />
            </div>
            <p style={{ marginBottom: "20px" }}>
              Our agents are fully bilingual, bi-cultural, well educated and
              have expertise in a wide array of business functions such as
              Debt Collection, Customer Service
            </p>
            <div style={{ textAlign: "start" }}>
              <h4 style={{ margin: "60px 0 6px" }}>Helen E Henderson</h4>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className=" testimonial-right" style={{}}>
          <div className="">
            <div className="test-card icon">
              <img src={quote_mark} className=" icon1" />
            </div>
            <p className="">
              Our agents are fully bilingual, bi-cultural, well educated and
              have expertise in a wide array of business functions such as
              Debt Collection, Customer Service
            </p>
            <div className="" style={{ gap: "10px", display: "flex",  alignItems: "center", margin: "46px 0 0 0", }}>
              <div className="test-icon">
                <img src={author1} />
              </div>
              <div>
                <h4 className="">Helen E Henderson</h4>
                <p>Customer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-right">
          <div className="">
            <div className="test-card icon" style={{}}>
              <img src={quote_mark} className=" icon1" />
            </div>
            <p className="">
              Our agents are fully bilingual, bi-cultural, well educated and
              have expertise in a wide array of business functions such as
              Debt Collection, Customer Service
            </p>
            <div className="" style={{  gap: "10px", display: "flex", alignItems: "center", margin: "46px 0 0 0" }}>
              <div className="test-icon">
                <img src={author4} />
              </div>
              <div>
                <h4 className="">Helen E Henderson</h4>
                <p>Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Testimonial
