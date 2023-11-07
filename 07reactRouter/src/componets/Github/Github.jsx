import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github(){
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/Samir-kyamkhani")
    //     .then((res) => res.json())
    //     .then((data) => setData(data))
    // }, [])

    const data = useLoaderData()
    return(
        <div className="text-center m-5 p-5 bg-gray-600 text-3xl rounded-3xl text-cyan-50 flex items-center justify-center">
        <img className= " rounded-xl" src={data.avatar_url} alt="" />
        <div className="text-center ml-20 bg-gray-600 text-3xl rounded-3xl text-cyan-50">Bio: {data.name} {data.bio}
        </div>
        </div>
    )
}

export default Github

export const GithubLoader = async () => {
   const response = await fetch("https://api.github.com/users/Samir-kyamkhani")

   return response.json()

}