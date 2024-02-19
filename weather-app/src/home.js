import React from 'react'
import './style.css'

function home() {
  return (
    <div className='contanainer'>
            <div className='weather'>
               <div className='search'>
                   <input type="text" placeholder="Search City"/>
                   <button><img src="/weather-app/public/images/search.jpg" alt="" /></button>
           
            </div>
        </div>
   </div>
  )
}
export default home;
