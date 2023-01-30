import React from 'react'

import im0 from '../images/Banner Image/Car Loan.png'
import im1 from '../images/ProductSub/New Car Loan.png'
import im2 from '../images/ProductSub/Used Car loan.png'
import im3 from '../images/ProductSub/Parallel Car Loan.png'


import '../ProductPages/ProductPages.css';
export default function CarLoan() {
  return (
    <>
    <div className='display-cont' >
          <div class="Banner-image">
              <img src={im0} alt="im1" height="300px"width="100%"/>
              <h2>Car Loan</h2>
          </div>
    </div>
    <div class="small-cont">
              <div>
              <div>
              <img src={im1}  alt="im1" height="100px"width="10%"/>
              <h2>New Car Loan</h2>
              <p>Loan Amount Rs.1 Lakh onward</p>
              </div>
              </div>
    </div>

    <div class="small-cont2">
              <div>
              <div>
              <img src={im2}  alt="im1" height="100px"width="16%"/>
              <h2>Used Car loan</h2>
              <p>Loan Amount Rs.1 Lakh onward</p>
              </div>
              </div>
    </div>

    <div class="small-cont3">
              <div>
              <div>
              <img src={im3}  alt="im1" height="100px"width="45%"/>
              <h2>Parallel Car Loan </h2>
              <p>Rs.1 Lakh onward (Loan against Car)</p>
              </div>
              </div>
    </div>
    </>
  )
}