import React from 'react'

function Card({image}) {
    return (
        <div  style={{width:"100%",margin:"10px 0px 10px 0"}}>
            <img width="100%" src={image} alt="img" />
        </div>
    ) 
}

export default Card
