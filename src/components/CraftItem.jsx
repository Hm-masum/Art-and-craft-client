import { BiDollarCircle } from "react-icons/bi";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";

const CraftItem = ({ craft }) => {
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
    _id,
  } = craft;
  return (
    <div className="p-4 rounded-xl border-2 border-gray-100 space-y-3">
      <div className="flex justify-center items-center bg-gray-100 rounded-2xl p-4">
        <img src={photo} className="h-[225px] rounded-lg" alt="" />
      </div>
      <div className="space-y-3">
        <div className="flex gap-2"></div>
        <h2 className="text-xl lg:text-2xl font-semibold">{item_name}</h2>
        <p className="font-semibold">{subcategory}</p>
        <p className="border-t border border-gray-300"></p>
        <div className="flex justify-between">
          <p className="flex gap-1 items-center">{rating} <IoStar /></p>
          <p className="flex gap-1 items-center"><BiDollarCircle className="text-2xl"/>{price}</p>
        </div>
        <div className="flex items-center justify-center">
          <Link to={`/craftDetails/${_id}`} className="btn w-full btn-accent">
            View Property
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CraftItem;
