import { useLoaderData, useParams } from "react-router-dom";
import CraftItem from "../components/CraftItem";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet-async";

const SubCategory = () => {
  const params = useParams();
  const loadingData = useLoaderData();
  let Data = {};

  if (params.subcategory === "LandscapePainting") {
    Data = loadingData.filter(
      (item) => item.subcategory === "Landscape Painting"
    );
  } else if (params.subcategory === "CharcoalSketching") {
    Data = loadingData.filter(
      (item) => item.subcategory === "Charcoal Sketching"
    );
  } else if (params.subcategory === "WatercolourPainting") {
    Data = loadingData.filter(
      (item) => item.subcategory === "Watercolour Painting"
    );
  } else if (params.subcategory === "OilPainting") {
    Data = loadingData.filter((item) => item.subcategory === "Oil Painting");
  } else if (params.subcategory === "CartoonDrawing") {
    Data = loadingData.filter((item) => item.subcategory === "Cartoon Drawing");
  } else {
    Data = loadingData.filter(
      (item) => item.subcategory === "Portrait Drawing"
    );
  }

  return (
    <div className="my-4 md:my-10">
      
      <Helmet>
        <title>CraftVerse | SubCategory</title>
      </Helmet>

      <h2 className="text-4xl mb-8 text-center">
        <span className="" style={{ fontWeight: "bold" }}>
          <Typewriter
            words={[`${Data[0].subcategory}`]}
            loop={20}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {Data.map((craft) => (
          <CraftItem key={craft._id} craft={craft}></CraftItem>
        ))}
      </div>
    </div>
  );
};

export default SubCategory;
