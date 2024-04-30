import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraft = () => {
  const { user } = useContext(AuthContext);
  const [item, setItem] = useState([]);
  const [control,setControl]=useState(false)

  useEffect(() => {
    fetch(`http://localhost:5000/craft/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
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
        fetch(`http://localhost:5000/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            //console.log(data);
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

  return (
    <div>
      {item.map((p) => (
        <div key={p._id}>
          <Link to={`/craftDetails/${p._id}`} className="btn">
            details
          </Link>
          <Link to={`/updateCraft/${p._id}`} className="btn">
            Update
          </Link>
          <Link onClick={()=>handleDelete(p._id)} className="btn">delete</Link>
        </div>
      ))}
    </div>
  );
};

export default MyCraft;
