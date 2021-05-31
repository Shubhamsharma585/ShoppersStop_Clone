import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card/Card'
import Carousel from "../Components/Carousel/Carousel"

const carousel1=[
    "https://sslimages.shoppersstop.com/sys-master/root/h21/h17/16769219199006/ELCA-Clinuique-Banner-Web.jpg",
    "https://sslimages.shoppersstop.com/sys-master/root/h12/hc4/16771899097118/MAC-Web.jpg",
    "https://sslimages.shoppersstop.com/sys-master/root/hd9/h94/16771913056286/Estee-Lauder-Web.jpg",
    "https://sslimages.shoppersstop.com/sys-master/root/h7a/hb1/16786948587550/BB-Elca-Web.jpg",
    "https://sslimages.shoppersstop.com/sys-master/root/hba/heb/16786931056670/Arcelia-Beauty-Accessories--WEB.jpg"
]

const carousel2=[
    "https://sslimages.shoppersstop.com/sys-master/root/he1/h1a/16769219067934/The-Home-Store-Web.jpg",
    "https://sslimages.shoppersstop.com/sys-master/root/h9c/h9c/16786943442974/ivy_web.jpg",
    "https://sslimages.shoppersstop.com/sys-master/root/h5c/ha0/16786943574046/philips_web.jpg",
    "https://sslimages.shoppersstop.com/sys-master/root/h6b/ha6/16786943705118/wonderchef_web.jpg",
    "https://sslimages.shoppersstop.com/sys-master/root/h2a/haa/16786943836190/maspar_web.jpg",
    "https://sslimages.shoppersstop.com/sys-master/root/hea/had/16786943967262/backtoearth_web.jpg"
]

const carousel3=[
    "https://sslimages.shoppersstop.com/sys-master/root/h73/h6d/16769218707486/Fashion-For-Kids-Web.jpg",
    "https://sslimages.shoppersstop.com/sys-master/root/hf1/h91/16786951241758/mothercare_web.jpg",
    "https://sslimages.shoppersstop.com/sys-master/root/h68/heb/16769217134622/stop_web.jpg",
    "https://sslimages.shoppersstop.com/sys-master/root/h65/h40/16786950979614/uspa_web.jpg",
    "https://sslimages.shoppersstop.com/sys-master/root/he9/he3/16769217396766/life_web.jpg"
]

const carousel4=[
    "https://sslimages.shoppersstop.com/sys-master/root/h30/hbf/16769224867870/Fashion-For-Him-Web.jpg",
    "https://sslimages.shoppersstop.com/sys-master/root/hd5/h2c/16786941739038/Mens-HP-Static-Day-4-FCUK-Web.jpg",
    "https://sslimages.shoppersstop.com/sys-master/root/h6f/h8d/16767844417566/Mens-Home-PG-Day-1-Carousal-Stop-Web.jpg",
    "https://sslimages.shoppersstop.com/sys-master/root/ha3/h36/16786941476894/Mens-HP-Static-Day-4-Pepe-Web.jpg"
]

const carousel5=[
    "https://sslimages.shoppersstop.com/sys-master/root/h58/h1c/16769230700574/Fratini-Static-Web.jpg",
    "https://sslimages.shoppersstop.com/sys-master/root/h99/h18/16769230831646/Alt-Life-Static-Web.jpg",
    "https://sslimages.shoppersstop.com/sys-master/root/hcf/h35/16769231028254/T-Shirts-Static-Web.jpg"
]

const carousel6=[
    "https://sslimages.shoppersstop.com/sys-master/root/h50/h0c/16771891232798/Fashion-For-Her-Web.jpg",
    "https://sslimages.shoppersstop.com/sys-master/root/h65/h25/16786942066718/LQ-Web.jpg",
    "https://sslimages.shoppersstop.com/sys-master/root/h9b/hb8/16769229193246/STOP---WEB.jpg"
]

function Home() {

    return (
        <div>
            <Card image="https://sslimages.shoppersstop.com/sys-master/root/he0/h6c/16769226899486/Covid-Strip-WEB.jpg"/>

            <Carousel images={carousel1}/>

            <Card image="https://sslimages.shoppersstop.com/sys-master/root/h96/h65/16570829668382/1840x157.png"/>

            <Carousel images={carousel2}/> 

                <h2 style={{textAlign:"center"}}>-----TOP BRANDS-----</h2>
            <div style={{width:"100%",background:"lightgray",display:"flex"}}>

                <div><img width="70%" src="https://sslimages.shoppersstop.com/sys-master/root/hd5/h7e/16786945933342/Beauty-HP-6-Widgets-Colorbar.jpg" alt="" /></div>
                <div><img width="70%" src="https://sslimages.shoppersstop.com/sys-master/root/h6a/h33/16786946064414/Beauty-HP-6-Widgets-Chambor.jpg" alt="" /></div>
                <div><img width="70%" src="https://sslimages.shoppersstop.com/sys-master/root/hcb/h22/16786946523166/Beauty-HP-6-Widgets-Myglamm.jpg" alt="" /></div>
                <div><img width="70%" src="https://sslimages.shoppersstop.com/sys-master/root/h0e/h1c/16786946719774/Beauty-HP-6-Widgets-Faces.jpg" alt="" /></div>  
                <div><img width="70%" src="https://sslimages.shoppersstop.com/sys-master/root/h6a/h33/16786946064414/Beauty-HP-6-Widgets-Chambor.jpg" alt="" /></div>   
            </div>

            <Card image="https://sslimages.shoppersstop.com/sys-master/root/h42/hee/16735626756126/Citizen-First-Strip-Web.jpg"/>

            <Card image="https://sslimages.shoppersstop.com/sys-master/root/h62/h31/16612213162014/Mobikwik-Strip.jpg"/>
            
            <Carousel images={carousel3}/> 

            <Card image="https://sslimages.shoppersstop.com/sys-master/root/h5d/hcb/16771893395486/Covid-Strip-WEB.jpg"/>


            <Carousel images={carousel4}/> <br />

            <h1 style={{textAlign:"center"}}>----------EXCLUSIVE STYLE: FROM THE HOUSE OF SHOPPERS STOP---------</h1><br />

            <Carousel images={carousel5}/>

            <Carousel images={carousel6}/>

        </div>
    )
}

export default Home
