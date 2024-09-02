import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { BiDollarCircle } from "react-icons/bi";
import { IoStar } from "react-icons/io5";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet-async";

const MyCraft = () => {
  const { user } = useContext(AuthContext);
  const [item, setItem] = useState([]);
  const [filterItem, setFilterItem] = useState([]);
  const [control,setControl]=useState(false)

  useEffect(() => {
    fetch(`https://craft-verse-server-omega.vercel.app/craft/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setFilterItem(data);
      });
  }, [control]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
    .then((result) => {
      if (result.isConfirmed) {
        fetch(`https://craft-verse-server-omega.vercel.app/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setControl(!control);
            }
          });
      }
    });
  };

  const handleFilter=(filter)=>{
     if(filter === 'yes'){
        const customizationYes = filterItem.filter(p => p.customization ==='yes');
        setItem(customizationYes);
     }
     else if(filter === 'no'){
        const customizationYes = filterItem.filter(p => p.customization ==='no');
        setItem(customizationYes);
     }
  }

  return (
    <div className="my-4 md:my-10">

       <Helmet>
        <title>CraftVerse | MyCraft</title>
      </Helmet>

      <h2 className="text-4xl text-center">
        <span className="" style={{ fontWeight: "bold" }}>
          <Typewriter
            words={[`My Art & Craft`]}
            loop={20}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h2>

      {/* filter */}
      <div className="text-right">
         <details className="dropdown">
           <summary className="m-1 btn btn-outline btn-info">Customization</summary>
           <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box ">
             <li onClick={() => handleFilter('yes')}><a>Yes</a></li>
             <li onClick={() => handleFilter('no')}><a>No</a></li>
           </ul>
         </details>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {
       item.map((craft) => (
         <div key={craft._id}>
            <div className="p-4 rounded-xl border-2 border-gray-100 space-y-3">
              <div className="flex justify-center items-center bg-gray-100 rounded-2xl p-4">
                  <img src={craft.photo} className="h-[225px] w-full rounded-lg" alt="" />
              </div>
              <div className="space-y-3">
                <h2 className="text-xl lg:text-2xl font-semibold">{craft.item_name}</h2>
                <div className="flex justify-between">
                  <p className="flex gap-1 items-center">Customization : {craft.customization}</p>
                  <p className="flex gap-1 items-center">{craft.stockStatus}</p>
                </div>
                <p className="border-t border border-gray-300"></p>
                <div className="flex justify-between">
                  <p className="flex gap-1 items-center"><BiDollarCircle className="text-2xl"/>{craft.price}</p>
                  <p className="flex gap-1 items-center">{craft.rating} <IoStar /></p>
                </div>
              </div>
              <div className="flex justify-between">
                <Link to={`/craftDetails/${craft._id}`} className="btn btn-outline btn-accent">
                          Details
                </Link>
                <Link to={`/updateCraft/${craft._id}`} className="btn btn-outline btn-primary">
                  Update
                </Link>
                 <button onClick={()=>handleDelete(craft._id)} className="btn btn-outline btn-accent">Delete</button>
              </div>
            </div>
         </div>
        ))
       }
      </div>
    </div>
  );
};

export default MyCraft;
