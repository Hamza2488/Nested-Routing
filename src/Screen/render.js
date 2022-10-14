import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../App.css'


const render = () => {
    const location = useLocation
    const navigate = useNavigate()

    useEffect( () => 
    {if (location.state && location.state.title) {
        
}else
navigate('/')
})

  return (
    <div>
        <p className='para'>
        render with {location.state && location.state.title ? location.state.title : "cfd96"}
        </p>
        </div>
  )
}

export default render