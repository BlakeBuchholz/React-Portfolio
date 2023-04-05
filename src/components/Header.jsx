import React from 'react'
import { TypeAnimation } from 'react-type-animation'



function Header() {
  return (
    <div className='header-Wrapper'>
     <div className='header-Border'>
     </div>
     <div className='header-Animation'>
            <span>I'm a </span>
            <TypeAnimation 
            sequence={[
                '< Developer />',
                2000,
                '< Designer />',
                2000,
                '< Problem Solver />',
                2000,
            ]}
            speed={45}
            wrapper='span'
            repeat={Infinity}
            />
        </div>
      <div className>

      </div>  
    </div>
  )
}

export default Header