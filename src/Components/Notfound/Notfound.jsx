import React from 'react'
import errorMsg from '../../Assets/Error.jpg'


export default function Notfound() {
  return <>
  
    <div className="container-flued text-center">
        <img src={errorMsg} alt="not Found" className='w-50 h-50 ' />
    </div>

  </>
}
