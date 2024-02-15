import { Link, Outlet } from "react-router-dom";
import Logo from "../images/Logo.png";
import { useState } from "react";
import Modal from "../components/Modal";
import LoginPage from "../pages/LoginPage";
import useAuth from "../hooks/useAuth";
import PictureUser from "../images/blank.png";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

export default function Header() {
  const [openLogin, setOpenLogin] = useState(false);
  const { authenticateUser, logout } = useAuth();
  console.log("authenticateUser:", authenticateUser);

  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="max-w-[1920px] h-20 bg-[#FFFFFF] flex items-center justify-center gap-200 shadow-lg">
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

          {!authenticateUser ? (
            <div className="w-full flex items-center justify-end">
              <button
                onClick={() => setOpenLogin(true)}
                className="bg-[#2A4B6A] text-[#FFFFFF] text-xl rounded-full w-[141px] h-12 hover:bg-[#3E5F7E]  shadow-lg"
              >
                Sign in
              </button>
            </div>
          ) : (
            <div className="relative w-full flex items-center justify-end gap-4">
              <img
                type="button"
                className="w-[60px] h-[60px] rounded-full cursor-pointer"
                src={authenticateUser?.image || PictureUser}
              />
              {open === false ? (
                <button onClick={() => setOpen(!open)}>
                  <AiOutlineCaretUp className="text-xl" />
                </button>
              ) : (
                <button onClick={() => setOpen(!open)}>
                  <AiOutlineCaretDown className="text-xl" />
                </button>
              )}
            </div>
          )}
          {authenticateUser ? (
            <>
              {open && (
                <div className="absolute z-10 right-20 top-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white flex flex-col justify-center items-center">
                    <img
                      className="w-[60px] h-[60px] rounded-full cursor-pointer"
                      src={authenticateUser?.image}
                    />
                    <p className="w-full text-center block text-base font-bold text-gray-900 dark:text-white border-black border-b-2 py-2">
                      {authenticateUser?.email}
                    </p>
                  </div>

                  <div className="w-full flex flex-col items-center justify-center">
                    <button
                      onClick={() => {
                        setOpen(false);
                      }}
                      className="w-full flex justify-center gap-3 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <p>Proflie</p>
                    </button>
                    <button
                      onClick={() => {
                        logout();
                        setOpen(false);
                      }}
                      className="w-full flex justify-center gap-3 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded-br-lg rounded-bl-lg"
                    >
                      <p>Log out</p>
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : null}
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
