import React from 'react'
import im1 from '../images/im1.png'
import im2 from '../images/im2.png'
import im3 from '../images/im3.png'

export default function Loan() {
  return (
    <>
    <section className='Loan'>
    <h2 className='tx'>Loan</h2>
    
<div class="card">
<img src={im1} alt="im1" height="300px" width="330px" />
  <div class="container">
    <h4><b>Home Loan</b></h4> 
    <p>Know More</p> 
  </div>
</div>
<div class="card2">
<img src={im2} alt="im1" height="300px" width="330px" />
  <div class="container2">
    <h4><b>Personal Loan</b></h4> 
    <p>Know More</p> 
  </div>
</div>
<div class="card3">
<img src={im3} alt="im1" height="300px" width="330px" />
  <div class="container3">
    <h4><b>Business Loan</b></h4> 
    <p>Know More</p> 
  </div>
</div>
</section>
    </>
  )
}
