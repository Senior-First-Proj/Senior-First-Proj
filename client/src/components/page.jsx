import React from 'react'
import Card from './card.jsx'
import Toposts from './toposts.jsx'
function page({user,posts,categ}) {
  return (
    <div className='pagediv'>
        <div className='category'>
            <div className='trend'>
            <h2>trends</h2> <a className='a1' href="">All</a>
            </div>
            <div>
                {categ.map(el=>{
                    return(
                        <div className='categ'>
                            <div className='det'>
                            <h3>{el.categoryName}</h3>
                            <p>{el.length}</p>
                            </div>
                            <img className='imgdet' src={el.catPicture} alt="" />
                        </div>
                    )
                })}
            </div>
          
        </div>
        <div className='card1'>
            <Card user={user} posts={posts}/>
        </div> 

    </div>
  )
}

export default page
