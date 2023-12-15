import React from 'react'
import Card from './card.jsx'
import Toposts from './toposts.jsx'
function page({user}) {
  return (
    <div className='pagediv'>
        <div className='category'>
            <div className='trend'>
            <h2>trends</h2> <a className='a1' href="">All</a>
            </div>
            <div>
                {user.map(el=>{
                    return(
                        <div className='categ'>
                            <div className='det'>
                            <h2>{el.name_user}</h2>
                            <p>{el.lastname_user}</p>
                            </div>
                            <img className='imgdet' src={el.image} alt="" />
                        </div>
                    )
                })}
            </div>
          
        </div>
        <div className='card1'>
            <Card user={user}/>
        </div> 

    </div>
  )
}

export default page