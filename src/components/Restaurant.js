import { useEffect, useState } from "react";
import RestCard from "./RestCard";


export default function Restaurent(){
        const [RestData,setRestData]=useState([])
  
 useEffect(()=>{
 




  async function fetchData() {

   const proxyServer="https://cors-anywhere.herokuapp.com/"
   const swiggyAPI="https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6677&lng=77.4337&is-seo-homepage-enabled=true"
    const response=await fetch(proxyServer+swiggyAPI);
   const data =await response.json();
   setRestData(data.data.cards[0].card.card.imageGridCards.info);
    
  }
  fetchData();
 },[])
//  console.log(RestData);



return(
        <div className="flex flex-wrap [w-80%] mx-auto mt-10 gap-5rem">
                {
                        RestData.map((restInfo)=><RestCard key={restInfo?.id} restInfo={restInfo}></RestCard>)
                }

        </div>
)



}