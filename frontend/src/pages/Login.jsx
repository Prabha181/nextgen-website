import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  // ✅ Google Login Handler with proper flow + scope
  const login = useGoogleLogin({
    flow: "implicit",
    scope: "openid profile email",
    onSuccess: async (tokenResponse) => {
      try {
        // console.log("Access Token:", tokenResponse.access_token); // Debug
        const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });

        const { name, email } = res.data;

        // ✅ Save to backend (MySQL via Express API)
        await axios.post("http://nextgen-api.vercel.app/api/users", { name, email });

        localStorage.setItem("user", JSON.stringify({ name, email }));
        navigate("/dashboard");
      } catch (error) {
        console.error("Google login error:", error.response?.data || error.message);
        alert("Login failed while fetching user info");
      }
    },
    onError: (err) => {
      console.log("Google login error:", err);
      alert("Google login failed");
    },
  });

  // Optional: Manual login fallback
  // const handleLogin = () => {
  //   localStorage.setItem("user", "loggedin");
  //   navigate("/dashboard");
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 to-blue-400">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Log In</h2>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email *</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Password *</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Manual Login Button */}
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

        {/* Google Login Button */}
        <button
          onClick={() => login()}
          className="w-full flex items-center justify-center border border-gray-300 rounded-full py-3 hover:bg-gray-100"
        >
          <FcGoogle className="mr-2 text-xl" />
          Continue with Google
        </button>

        {/* Facebook Button (non-functional) */}
        <button
          className="w-full mt-4 flex items-center justify-center border border-gray-300 rounded-full py-3 hover:bg-gray-100"
        >
          <FaFacebookF className="mr-2 text-blue-600 text-xl" />
          Continue with Facebook
        </button>

        {/* Remember / Forgot */}
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
