import React from 'react'
import './Sidemenu.css'

const SideMenu = ()=> {

  function mensagem(){
    window.location.reload();
  }

  return(
    <aside className='sidemenu'>
      <div id='cleanChat' className='sidemenu-button' onClick={mensagem}>
        <i className="fa-solid fa-trash"></i> Limpar chat
      </div>
    </aside>
  )
}

export default SideMenu