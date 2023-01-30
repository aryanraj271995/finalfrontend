import React from 'react'

import im0 from '../images/Banner Image/CrediCard.png'
import im1 from '../images/ProductSub/IndianOil Credit Card.png'
import im2 from '../images/ProductSub/FlipKart Credit Card.png'
import im3 from '../images/ProductSub/MY Zone Credit Card.png'


import '../ProductPages/ProductPages.css';
export default function CreditCard() {
  return (
    <>
    <div className='display-cont' >
          <div class="Banner-image">
              <img src={im0} alt="im1" height="300px"width="100%"/>
              <h2>Credit Card</h2>
          </div>
    </div>
    <div class="small-cont">
              <div>
              <div>
              <img src={im1}  alt="im1" height="100px"width="10%"/>
              <h2>IndianOil Credit Card</h2>
              <p>100% Cashback upto Rs 250 in first30 days</p>
              </div>
              </div>
    </div>

    <div class="small-cont2">
              <div>
              <div>
              <img src={im2}  alt="im1" height="100px"width="16%"/>
              <h2>FlipKart Credit Card</h2>
              <p>Unlimited cashback on all your spends</p>
              </div>
              </div>
    </div>

    <div class="small-cont3">
              <div>
              <div>
              <img src={im3}  alt="im1" height="100px"width="45%"/>
              <h2>MY Zone Credit Card</h2>
              <p>Enjoy 40% off on Swiggy and complimentary </p>
              </div>
              </div>
    </div>
    </>
  )
}