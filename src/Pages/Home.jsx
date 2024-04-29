import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const loadedCraft=useLoaderData();
    const[craft,setCraft]=useState(loadedCraft)

    return (
        <div>
            {
                craft.length
            }
        </div>
    );
};

export default Home;