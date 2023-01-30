import React from 'react'

import im0 from '../images/Banner Image/CurrentAccount.png'
import im1 from '../images/ProductSub/Liberty Current Account.png'
import im2 from '../images/ProductSub/Digi Account.png'
import im3 from '../images/ProductSub/Global Economy.png'

import '../ProductPages/ProductPages.css';
export default function CurrentAccounts() {
  return (
    <>
    <div className='display-cont' >
          <div class="Banner-image">
              <img src={im0} alt="im1" height="300px"width="100%"/>
              <h2>Current Account</h2>
          </div>
    </div>
    <div class="small-cont">
              <div>
              <div>
              <img src={im1}  alt="im1" height="100px"width="10%"/>
              <h2>Liberty Current Account </h2>
              <p>Account for Proprietorship</p>
              </div>
              </div>
    </div>

    <div class="small-cont2">
              <div>
              <div>
              <img src={im2}  alt="im1" height="100px"width="16%"/>
              <h2>Digi Account </h2>
              <p>Digital Current Account</p>
              </div>
              </div>
    </div>

    <div class="small-cont3">
              <div>
              <div>
              <img src={im3}  alt="im1" height="100px"width="45%"/>
              <h2>Global Economy</h2>
              <p>Current Account for Business</p>
              </div>
              </div>
    </div>
    </>
  )
}