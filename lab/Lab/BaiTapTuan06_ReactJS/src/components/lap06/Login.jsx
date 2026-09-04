const Login = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Username"
        />

        <input
          className="border p-2 w-full mb-3"
          placeholder="Password"
          type="password"
        />

        <button className="bg-blue-500 text-white w-full py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;