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

    const {
        item_name,
        subcategory,
        rating,
        photo,
        price,
        description,
        customization,
        stockStatus,
        processing_time,
        user_name,
        email
      } = craft;


    return (
        <div className="lg:flex justify-center items-center gap-8 my-4 lg:my-10">
      <div className="animate__animated animate__fadeInLeft flex justify-center items-center bg-gray-100 rounded-2xl lg:w-[50%]">
        <img className="rounded-2xl lg:h-[500px]" src={photo} alt="" />
      </div>
      <div className="space-y-4 lg:w-[50%] animate__animated animate__fadeInRight">
        <h1 className="text-2xl lg:text-4xl font-semibold">{item_name}</h1>
        <p className="text-xl">{subcategory}</p>
        <p className="border-t-2 border-gray-300"></p>
        <p className="text-xl">stockStatus : {stockStatus}</p>
        <p className="border-t-2 border-gray-300"></p>
        <p>
          <span className="font-semibold">Description : </span>
          {description}
        </p>
        <p>user : {user_name}</p>
        <p>user : {email}</p>
        <p className="border-t-2 border-gray-300"></p>
        <div className="space-y-2">
          <p className="flex items-center">
            <span className="w-[30%]">price: </span>
            <span className="font-semibold">{price}</span>
          </p>
          <p className="flex items-center">
            <span className="w-[30%]">customization: </span>
            <span className="font-semibold">{customization}</span>
          </p>
          <p className="flex items-center">
            <span className="w-[30%]">rating: </span>
            <span className="font-semibold">{rating}</span>
          </p>
          <p className="flex items-center">
            <span className="w-[30%]">processing_time: </span>
            <span className="font-semibold">{processing_time}</span>
          </p>
        </div>
      </div>
    </div>
    );
};

export default CraftDetails;