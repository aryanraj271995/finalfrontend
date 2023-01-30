import React from 'react'

import im0 from '../images/Banner Image/SavingAccount.png'
import im1 from '../images/ProductSub/Easy Access.png'
import im2 from '../images/ProductSub/liberty.png'
import im3 from '../images/ProductSub/prestige.png'


import '../ProductPages/ProductPages.css';
export default function SavingAccounts() {
  return (
    <>
    <div className='display-cont' >
          <div class="Banner-image">
              <img src={im0} alt="im1" height="300px"width="100%"/>
              <h2>Saving Account</h2>
          </div>
    </div>
    <div class="small-cont">
              <div>
              <div>
              <img src={im1}  alt="im1" height="100px"width="10%"/>
              <h2>Easy Access</h2>
              <p>Digital Saving Account</p>
              </div>
              </div>
    </div>

    <div class="small-cont2">
              <div>
              <div>
              <img src={im2}  alt="im1" height="100px"width="16%"/>
              <h2>Liberty</h2>
              <p>Digital Saving Account</p>
              </div>
              </div>
    </div>

    <div class="small-cont3">
              <div>
              <div>
              <img src={im3}  alt="im1" height="100px"width="45%"/>
              <h2>Prestige</h2>
              <p>Digital Saving Account</p>
              </div>
              </div>
    </div>
    </>
  )
}