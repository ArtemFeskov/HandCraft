import React from 'react'

export default function Header() {
  return (
    <header>
        <div>
           <div className='logo'> HANDCRAFT</div>
           <ul className='nav'>
            <li>Home</li>
            <li>Gallery</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
           </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
