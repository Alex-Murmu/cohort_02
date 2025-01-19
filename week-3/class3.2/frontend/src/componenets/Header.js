import React from 'react'
import "../styles/header.css"
function Header() {
  return (
    <div className='main'>
       <div className='logo'><img alt="logo" src="https://th.bing.com/th/id/OIP.wbxL-ZRs0hIa5y16MlufHQHaHa?rs=1&pid=ImgDetMain" /></div>
       <div className='menu'>
        <ul>
            <li><a href="https://google.com">google</a></li>
            <li><a href="https://facebook.com">facebook</a></li>
            <li><a href="https://amazon.com">amazon</a></li>
            <li><a href="https://whatsapp.com">wahtsapp</a></li>
        </ul>
       </div>
       <div className='dashboard'>
        <p>User:</p>
       </div>
    </div>
  )
}

export default Header;