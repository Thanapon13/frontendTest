import { Link, Outlet } from "react-router-dom";
import Logo from "../images/Logo.png";
import { useState } from "react";
import Modal from "../components/Modal";
import LoginPage from "../pages/LoginPage";

export default function Header() {
  const [openLogin, setOpenLogin] = useState(false);
  return (
    <>
      <div className="max-w-[1920px] h-20 bg-[#FFFFFF] flex items-center justify-center gap-200">
        <div className="w-[90%] flex items-center">
          <div className="w-full">
            <Link to="/">
              <img src={Logo} className="w-16 h-16 rounded-full" />
            </Link>
          </div>

          <div className="w-full flex items-center justify-center">
            <h1 className="text-[#2A4B6A] text-xl underline font-bold cursor-pointer">
              HOME
            </h1>
          </div>

          <div className="w-full flex items-center justify-end">
            <button
              onClick={() => setOpenLogin(true)}
              className="bg-[#2A4B6A] text-[#FFFFFF] text-xl rounded-full w-[141px] h-12 hover:bg-[#3E5F7E]  shadow-lg"
            >
              Sign in
            </button>
          </div>
        </div>

        {openLogin && (
          <Modal
            open={openLogin}
            onClose={() => setOpenLogin(false)}
            title="เข้าสู่ระบบ"
          >
            <LoginPage onClose={() => setOpenLogin(false)} />
          </Modal>
        )}
      </div>

      <Outlet />
    </>
  );
}
