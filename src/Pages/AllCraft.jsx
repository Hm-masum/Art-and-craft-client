import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const AllCraft = () => {
  const loadedCraft = useLoaderData();
  const [craft, setCraft] = useState(loadedCraft);

  return (
    <div className="border-2 rounded-xl p-4 md:p-10">
      <h2 className="text-3xl mb-8 text-center font-semibold">All Art and Craft</h2>
      <div className="my-4 lg:my-8">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>price</th>
                <th>customization</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {craft.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{item.item_name}</td>
                  <td>{item.price}</td>
                  <td>{item.customization}</td>
                  <td>
                    <Link to={`/craftDetails/${item._id}`}>View Details</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllCraft;
