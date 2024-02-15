import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

export default function LoginPage({ onClose }) {
  const { setAuthenticatedUser } = useAuth();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  // console.log("input:", input);

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleLogin = async e => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      input.email === storedUser?.email &&
      input.password === storedUser?.password
    ) {
      toast.success("login success");
      await setAuthenticatedUser(JSON.parse(localStorage.getItem("user")));
      await onClose();
      navigate("/");
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleLogin}>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          อีเมลของคุณ
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="name@company.com"
          autoComplete="oof"
          onChange={handleChangeInput}
          value={input.email}
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          รหัสผ่านของคุณ
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          onChange={handleChangeInput}
          value={input.password}
        />
      </div>
      <button
        type="submit"
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        ลงชื่อเข้าใช้บัญชีของคุณ
      </button>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300 flex gap-2">
        <p>ยังไม่ได้ลงทะเบียน</p>
        <Link to="/rejisterPage" onClick={onClose}>
          <p className="text-blue-700 hover:underline dark:text-blue-500">
            สร้างบัญชี
          </p>
        </Link>
      </div>
    </form>
  );
}
