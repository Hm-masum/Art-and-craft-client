import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {createUser}=useContext(AuthContext)

    const handleRegister = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;
    //console.log(name,photo,email,password)

      // create user
     createUser(email, password)
     .then(() => {
        toast.success('User created successfully')
        // navigate("/");
      })
      .catch((error) => {
        toast.error(error.message.split("/")[1].split(")")[0])
      });
    };

  return (
    <div className="bg-gray-100 rounded-xl p-4 md:p-10">
      <h2 className="text-3xl mb-8 text-center font-semibold">
        Please Register
      </h2>
      <div className="animate__animated animate__fadeInRight md:w-3/4 lg:w-1/2 mx-auto bg-white rounded-xl p-4">
        <form onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
           
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                className="w-full input input-bordered"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />
              <span
                className="absolute top-4 right-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
          </div>
          <br />
          <div className="mb-2">
            <input type="checkbox" name="terms" id="terms" />
            <label className="ml-2 " htmlFor="terms">
              Accept our terms and condition
            </label>
          </div>
          <br />
          <input
            className="btn btn-accent w-full"
            type="submit"
            value="Register"
          />
        </form>
        <p className="my-3">
          Already have an account please{" "}
          <Link to={`/login`} className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
