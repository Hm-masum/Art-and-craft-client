import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const CraftDetails = () => {
    const {id}=useParams();
    const[craft,setCraft]=useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/singleCraft/${id}`)
        .then(res => res.json())
        .then(data=>{
            setCraft(data)
            console.log(data)
        })
    },[id])


    return (
        <div>
            <h2>{craft.item_name}</h2>
        </div>
    );
};

export default CraftDetails;