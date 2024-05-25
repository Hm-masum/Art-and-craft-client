import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {createUser,updateUserProfile}=useContext(AuthContext)
    const navigate=useNavigate()

    const handleRegister = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;

      if (password.length < 6) {
        toast.error("password should be 6 character")
        return;
      }
      else if (!/[A-Z]/.test(password)) {
        toast.error("Your password should have at least 1 Uppercase character")
        return;
      }
      else if (!/[a-z]/.test(password)) {
        toast.error("Your password should have at least 1 Lowercase character")
        return;
      }
  
    // create user
     createUser(email, password)
     .then(() => {
        toast.success('User created successfully')
        updateUserProfile(name, photo).then(() => {
            navigate("/");
        });
      })
      .catch((error) => {
        toast.error(error.message.split("/")[1].split(")")[0])
      });
    };

  return (
    <div className="border-2 rounded-xl p-4 md:p-10">

      <Helmet>
        <title>CraftVerse | Register</title>
      </Helmet>   

      <h2 className="text-3xl mb-8 text-center font-semibold">
       <span className="" style={{ fontWeight: "bold" }}>
          <Typewriter
            words={["Please Register"]}
            loop={20}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h2>
      <div className="animate__animated animate__fadeInRight md:w-3/4 lg:w-1/2 mx-auto rounded-xl p-4">
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
