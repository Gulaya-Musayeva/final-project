import React from 'react'
import Typed from 'react-typed'
import pic from '../laptop1.jpg'

const header=() =>{
  return (
    <div className="header-wrapper">
        <div className="main-info">
            <h1>Web Development and Website Services</h1>
            <Typed className='typed-text'
            strings={[
                'Microsoft Azure Developing Associate',
                'Microsoft Certified Trainer',
                '88.8% MERN success rateTrainer']}
                typeSpeed={40}
                backSpeed={50}
                loop>
                
            </Typed>
            <a className="downloadcv" href={pic}>Download CV</a>


        </div>

    </div>
  )
}

export default header