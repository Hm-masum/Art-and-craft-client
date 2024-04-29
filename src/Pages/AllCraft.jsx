import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Link} from "react-router-dom";

const AllCraft = () => {
  const loadedCraft = useLoaderData();
  const [craft, setCraft] = useState(loadedCraft);


  return (
    <div className="lg:my-8">
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
            {craft.map((item,index) => ( 
              <tr key={index}>
                <th>{index+1}</th>
                <td>{item.item_name}</td>
                <td>{item.price}</td>
                <td>{item.customization}</td>
                <td>
                  <Link>View Detals</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCraft;
