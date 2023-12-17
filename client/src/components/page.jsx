import React from 'react'
import Card from './card.jsx'

const page = ({user,posts,categ,comments,getcom,addcom,changeView,getPostsCat}) => {
  return (
    <div className='pagediv'>
        <div className='category'>
            <div className='trend'>
            <h2>Trends</h2>
            </div>
            <div>
                {categ.map(el=>{
                    return(
                        <div className='categ' onClick={()=>{getPostsCat(el.idtable2),changeView("cat")}}>
                            <div className='det'>
                            <h3 >{el.categoryName}</h3>
                            <p>{el.length}</p>
                            </div>
                            <img className='imgdet' src={el.catPicture} alt="" />
                        </div>
                    )
                })}
            </div>
          
        </div>
        <div className='card1'>
            <Card user={user} addcom={addcom} getcom={getcom} comments={comments} posts={posts}/>
        </div> 

    </div>
  )
}

export default page
