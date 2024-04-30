import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";
import Contact from "../components/Contact";
import CraftItem from "../components/CraftItem";

const Home = () => {
    const loadedCraft=useLoaderData();

    return (
        <div>
            <Slider></Slider>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    loadedCraft.slice(0,6).map(craft=><CraftItem key={craft._id} craft={craft}></CraftItem>)
                }
            </div>
            <Contact></Contact>
        </div>
    );
};

export default Home;