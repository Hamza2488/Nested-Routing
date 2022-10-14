import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
   let list = [
{
  name:'ads',
  id:Math.round(Math.random())
},
{
  name:'ads',
  id:Math.round(Math.random())
},
{
  name:'ads',
  id:Math.round(Math.random())
},
{
  name:'ads',

  id:Math.round(Math.random())
},
  ]


  let moveData = (data) => {
    navigate('render.js', {
      state: data
    })
  }




  return (
    <div>Home
        
    {
      list.map((e,i)=> <button key={i} onClick={()=> moveData(e)}>
        {e.name}

      </button>)
    }
 
    </div>

  )
}

export default Home;