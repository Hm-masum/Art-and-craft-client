import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";

const MyCraft = () => {
    const{user}=useContext(AuthContext);
    const[item,setItem]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/craft/${user?.email}`)
        .then(res=>res.json())
        .then(data=> {
            setItem(data)
        })
    },[])

    return (
        <div>
            {
                item.map(p=>(
                    <div key={p._id}><Link to={`/craftDetails/${p._id}`}>btn</Link></div>
                ))
            }
        </div>
    );
};

export default MyCraft;