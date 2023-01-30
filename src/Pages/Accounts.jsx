import React from 'react'
import im1 from '../images/ProductImage/Saving Account.png'
import im2 from '../images/ProductImage/Current Account.png'
import im3 from '../images/ProductImage/Salary Account.png'

import './Accounts.css';

export default function Accounts() {
  return (
    <>
    <section className='accounts'>
    <h2 className='tx'>Account</h2>
    
<div class="card">
<img src={im1} alt="im1" height="200px" width="260px" />
  <div class="container">
    <h4><b>Saving Account</b></h4>
    <a href="/SavingAccount" className='linkColor'> 
    <p>Know More</p>
    </a> 
  </div>
</div>

<div class="card1">
<img src={im2} alt="im1" height="200px" width="230px" />
  <div class="container1">
    <h4><b>Current Account</b></h4> 
    <a href="/CurrentAccount" className='linkColor'> 
    <p>Know More</p>
    </a> 
  </div>
</div>

<div class="card2">
<img src={im3} alt="im1" height="200px" width="230px" />
  <div class="container2">
    <h4><b>Salary Account</b></h4> 
    <a href="/SalaryAccount" className='linkColor'> 
    <p>Know More</p>
    </a> 
  </div>
</div>
<div className='para'>
<p>It is a long established fact that a reader will be distracted 
by the readable content of a page when looking at its layout. 
The point of using Lorem Ipsum is that it has a more-or-less 
normal distribution of letters, <p>as opposed to using 'Content here,
content here', making it look like readable English. Many desktop
publishing packages and web page editors now use Lorem Ipsum 
as their default model text, and </p>a search for 'lorem ipsum' 
will uncover many web sites still in their infancy. Various 
versions have evolved over the years, sometimes by accident, 
sometimes on purpose (injected humour and the like).</p>
</div>
</section>
    </>
  )
}
