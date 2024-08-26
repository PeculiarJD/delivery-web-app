import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/frontend_assets/assets'

const AppDownload = () => {
  return (
    <div>
      <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br /> Tomato App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="image" />
            <img src={assets.app_store} alt="image" />
        </div>
      </div>
    </div>
  )
}

export default AppDownload
