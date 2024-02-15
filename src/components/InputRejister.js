import { RiLockPasswordFill, RiEyeFill, RiEyeCloseFill } from "react-icons/ri";

export default function InputRejister({
  title,
  icon,
  type,
  name,
  placeholder,
  onChange,
  value,
  check,
  showPassword,
  showConfirmedPassword,
  onClick,
}) {
  return (
    <>
      {!check ? (
        <>
          <label className="block mb-2 text-base font-medium text-[#000000]">
            {title}
          </label>

          <div className="md:w-[360px] md:h-[44px] w-full h-full flex items-center justify-start gap-2 bg-white border-2 p-2">
            <i>{icon}</i>

            <input
              type={type || "text"}
              name={name}
              className={`w-full text-gray-900 text-base outline-none border-none`}
              placeholder={placeholder}
              onChange={onChange}
              value={value}
            />
          </div>
        </>
      ) : (
        <>
          <label className="block mb-2 text-base font-medium text-[#000000]">
            Password
          </label>

          <div className="md:w-[360px] md:h-[44px] w-full h-full flex items-center justify-start gap-2 bg-white border-2 p-2">
            <i>
              <RiLockPasswordFill className="text-[24px]" />
            </i>

            <input
              type={showPassword || showConfirmedPassword ? "text" : "password"}
              name={name}
              className={`w-full text-gray-900 text-base outline-none border-none`}
              placeholder={placeholder}
              onChange={onChange}
              value={value}
            />

            <button
              type="button"
              onClick={onClick}
              className="focus:outline-none"
            >
              {showPassword || showConfirmedPassword ? (
                <RiEyeCloseFill className="text-[24px]" />
              ) : (
                <RiEyeFill className="text-[24px]" />
              )}
            </button>
          </div>
        </>
      )}
    </>
  );
}
