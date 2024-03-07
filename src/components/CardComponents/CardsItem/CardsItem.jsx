import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCardItem from "./SingleCardItem/SingleCardItem";


const CardsItem = () => {
    const [cardItem,setCardItem]=useState([])
    const {id}=useParams()
    const idInt=parseInt(id)
    const data=useLoaderData()
    console.log(idInt,data);
    useEffect(()=>{
        const findCard=data.find(card=>parseInt(card.id)===idInt)
       setCardItem(findCard)
    },[data,id]);
   
    
    return (
        <div>
           <SingleCardItem singleCardItem={cardItem}></SingleCardItem>
        </div>
    );
};

export default CardsItem;