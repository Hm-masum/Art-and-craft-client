import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";
import Contact from "../components/Contact";
import CraftItem from "../components/CraftItem";
import Choose from "../components/Choose";
import Category from "../components/Category";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const loadedCraft = useLoaderData();

  return (
    <div>

      <Helmet>
        <title>CraftVerse | Home</title>
      </Helmet>

      <Slider></Slider>

      <div>
        <h2 className="text-4xl mb-8 text-center font-semibold">Craft Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {loadedCraft.slice(0, 6).map((craft) => (
            <CraftItem key={craft._id} craft={craft}></CraftItem>
          ))}
        </div>
      </div>

      <div className="my-4 md:my-14">
         <h2 className="text-4xl mb-10 text-center font-semibold">Art & Craft Categories</h2>
         <Category></Category>
      </div>

      <Choose></Choose>
      <Contact></Contact>
    </div>
  );
};

export default Home;
