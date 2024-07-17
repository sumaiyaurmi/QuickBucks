import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="">
      <div className="text-center ">
        <h1 className="text-3xl md:text-4xl font-bold">Sign Up</h1>
      </div>
      <div className="bg-slate-50 rounded-xl mt-4 md:w-[500px] mx-auto p-10 text-center">
        <form className=" ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
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
              <span className="label-text">Role</span>
            </label>
            <select
              className="w-full px-4 py-3 text-gray-800 border border-yellow-500 focus:outline-yellow-600 rounded-md"
              name="role"
              id="role"
              required
       defaultValue={"Role"}
       >
              <option value="" defaultValue={"Role"} disabled>Role</option>
              <option value="User">User</option>
              <option value="Agent">Agent</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Mobail Number</span>
            </label>
            <input
              type="number"
              placeholder="number"
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
            <button
              type="submit "
              className=" mt-2 btn  w-full md:w-1/2 mx-auto bg-blue-300"
            >
              Sign Up
            </button>
            <p>
              Already have an account?{" "}
              <Link to="/" className="text-blue-700 underline">
                Sign In
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
