import React from 'react'
import { TypeAnimation } from 'react-type-animation'



function Header() {
  return (
    <div className='header-Wrapper'>
     <div className='header-Border'></div>
     <div className='codingBrackets'>
       <img src='./codingbrackets.png' alt='Coding Brackets' width={600} height={600}></img>
       <p className='codingBrackets-Content'>I'm an entry-level front-end developer with a passion for creating user-friendly, and aesthetically pleasing websites and applications.
       With my knowledge of HTML, CSS, JavaScript, Node.js, Express.js, Bootstrap, Wordpress, PHP, React, and REST API's, I'm capable of developing websites
       and applications that are not only functional for businesses but enjoyable for users. </p> 
       <p className='codingBrackets-Content'>With my creativity and hunger for learning the
       latest technologies, I'm always on the hunt for new ways to innovate, and provide the best user experience for clients possible.</p>
       </div>
      <div className='introduction-Section'>
       <h1 className='introduction-Header'>Hi, I'm Blake</h1>
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
       <p className='introduction-Content'>I'm an entry-level front-end developer with a passion for creating user-friendly, and aesthetically pleasing websites and applications.
       With my knowledge of HTML, CSS, JavaScript, Node.js, Express.js, Bootstrap, Wordpress, PHP, React, and REST API's, I'm capable of developing websites
       and applications that are not only functional for businesses but enjoyable for users. </p> 
       <p className='introduction-Content'>With my creativity and hunger for learning the
       latest technologies, I'm always on the hunt for new ways to innovate, and provide the best user experience for clients possible.</p>
     </div>
    </div>
  )
}

export default Header