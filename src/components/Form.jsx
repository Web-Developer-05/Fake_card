import React from 'react'
import { useState , useEffect } from 'react'
function Form() {
    const [card , setCard] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/users")
        .then((res)=>res.json())
       .then((data)=>setCard(data))
    })
  return (
    <div>
        {card.map((item)=>{
            return(
                <div className="parent">
                    <div className='card' key={item.id}>
                        <div className="content-box">
                            <span className="card-title">Name : {item.name}</span>
                            <p className='card-content'>LastName : {item.lastname}</p>
                            <span className="see-more">Location : {item.location}</span>
                        </div>
                        <div className="date-box">
                            <span className="month">Age</span>
                            <span className="date">{item.age}</span>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Form
