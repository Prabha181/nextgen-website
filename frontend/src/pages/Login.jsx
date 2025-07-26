import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Fake login logic – replace with real Google login
    localStorage.setItem("user", "loggedin");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 to-blue-400">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Log In</h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email *</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Password *</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Login button */}
        <button
          onClick={handleLogin}
          className="w-full bg-green-400 text-white font-semibold py-3 rounded-full hover:bg-green-500 transition duration-300 mb-6"
        >
          Log In
        </button>

        {/* OR Divider */}
        <div className="flex items-center mb-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-gray-500">Or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social buttons */}
        <div className="space-y-4">
          <button
            onClick={handleLogin}
            className="w-full flex items-center justify-center border border-gray-300 rounded-full py-3 hover:bg-gray-100"
          >
            <FcGoogle className="mr-2 text-xl" />
            Continue with Google
          </button>

          <button
            className="w-full flex items-center justify-center border border-gray-300 rounded-full py-3 hover:bg-gray-100"
          >
            <FaFacebookF className="mr-2 text-blue-600 text-xl" />
            Continue with Facebook
          </button>
        </div>

        {/* Remember and forgot password */}
        <div className="flex justify-between text-sm text-gray-600 mt-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-green-500" />
            <span>Remember me</span>
          </label>
          <a href="#" className="hover:underline">Forget password?</a>
        </div>

        {/* Footer */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Not registered yet?{" "}
          <a href="#" className="text-green-500 font-medium hover:underline">
            Create an Account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
