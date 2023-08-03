import React from 'react'
import Logo from '../../assets/logo01.jpg'

const Header = () => {
  return (
    <header className='header flex items-center'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <div>
            <img src={Logo} alt='' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header