import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="">
    <div className="text-center ">
      <h1 className="text-3xl md:text-4xl font-bold">Welcome Back, Log In</h1>
      <p className="text-xl font-semibold">Hi, we are you glad you are back. <br /> Please login.</p>
    </div>
 <div className="bg-slate-50 rounded-xl mt-4 md:w-[500px] mx-auto p-10 text-center">
 <form className=" ">
 
  
    <div className="form-control">
<label className="label">
  <span className="label-text">Email</span>
</label>
<input
  type="email"
  placeholder="email"
  className="input input-bordered"
  required
/>
</div>
    <div className="form-control">
<label className="label">
  <span className="label-text">PIN</span>
</label>
<input
  type="number"
  placeholder=" 5 digit pin"
  className="input input-bordered"
  required
/>
</div>
    <div className="form-control">
<button type="submit " className=" m-4 btn  w-full md:w-1/2 mx-auto bg-blue-300">Sign In</button>
<p>Don't have an Account? <Link to="/registration" className="text-blue-700 underline">Sign Up</Link> </p>
                
</div>
    </form>
 </div>
  </div>
  );
};

export default Login;


