import React, { useEffect, useState } from 'react'

function Carousel({images}) {
        const [index,setIndex]=useState(0)
        useEffect(()=>{
        setInterval(()=>{
            setIndex(prev=>prev+1<images.length?prev+1:0)
        },5000)
      },[])

      const carousel_div={ 
            width: "100%",
            position: 'relative'
      }
      const indicator_box={
      display:"flex",
      margin:"auto",
      position: 'absolute',
      justifyContent:"center",
      bottom:"3%",
      left:`${55-images.length*3}%`
    }

    return (
        <>
        <div style={carousel_div}>   
            <img width="100%" src={images[index]}/>
            <span style={indicator_box}>
            {
                images.map((item,i)=><span
                onClick={()=>setIndex(i)}
                style={{
                    background:`${index==i?"#ff4a4a":"white"}`,
                    width:"20px",
                    height:"20px",
                    margin:"10px",
                    borderRadius:"20px",
                    cursor: 'pointer'
                }}/>)
            }
            </span>  
        </div>
        </>
    )
}

export default Carousel
