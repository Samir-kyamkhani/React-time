import React from "react";
import { useParams } from "react-router-dom";

export default function User(){
    const {userId} = useParams()
    return(
        <h2 className="bg-gray-600 m-5 text-cyan-50 p-5 rounded-2xl" >User: {userId}</h2>
    )
}