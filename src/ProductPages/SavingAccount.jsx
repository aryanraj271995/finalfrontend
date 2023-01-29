import React from 'react'

import im1 from '../images/im1.png'
import im2 from '../images/Loan.png'
import im3 from '../images/Deposit.png'

import '../Components/Center.css';
export default function SavingAccounts() {
  return (
    <>
    <div class="display-container">
          <div>
              <img src={im1} alt="im1" height="300px"width="100%"/>
              <div className='div2'>
              <h2>Saving Account</h2>
              </div>
          </div>

          <div class="small-container">
              <div class="div2">
              <div class="div2">
              <img src={im2}  alt="im1" width="20%"/>
              <h2>Smart Vacation</h2>
              <p>Full vacation control from your cell phone.</p>
              </div>
              </div>
          </div>

          <div class="small-container">
              <div class="div2">
              <div class="div2">
              <img src={im2}  alt="im1" width="20%"/>
              <h2>Smart Vacation</h2>
              <p>Full vacation control from your cell phone.</p>
              </div>
              </div>
          </div>

          <div class="small-container">
              <div class="div2">
              <div class="div2">
              <img src={im2}  alt="im1" width="20%"/>
              <h2>Smart Vacation</h2>
              <p>Full vacation control from your cell phone.</p>
              </div>
              </div>
          </div>
    </div>
    </>
  )
}