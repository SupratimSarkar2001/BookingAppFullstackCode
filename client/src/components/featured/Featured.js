import React from 'react'
import useFetch from '../../hooks/useFetch'
import "./featured.css"
const Featured = () => {
  const { data, loading, error }=useFetch("/hotels/countByCity?cities=Kolkata")
  console.log(data)
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2VyYWxhfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt=""
        className="featuredImg" />
        <div className="featuredTitles">
          <h1>Kerala</h1>
          <h2>720 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://www.worldatlas.com/r/w1024-q80/upload/ca/2f/40/shutterstock-1373319851.jpg" alt=""
        className="featuredImg" />
        <div className="featuredTitles">
          <h1>Ooty</h1>
          <h2>650 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1571679654681-ba01b9e1e117?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a29sa2F0YXxlbnwwfHwwfHw%3D&w=1000&q=80" alt=""
        className="featuredImg" />
        <div className="featuredTitles">
          <h1>Kolkata</h1>
          <h2>990 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured