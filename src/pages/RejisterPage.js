import { useRef, useState } from "react";
import { RiImageAddFill } from "react-icons/ri";
import { GrView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

export default function RejisterPage() {
  const inputEl = useRef();
  const [file, setFile] = useState(null);
  // console.log("file:", file);
  const [hovers, setHovers] = useState(false);
  // console.log("hovers:", hovers);

  return (
    <div className="w-full h-screen flex justify-center items-start py-4">
      <div className="w-[70%] h-[600px] flex flex-col gap-6 p-6 border-2 ">
        <div className="flex flex-col justify-center items-center gap-3">
          <div
            className={`w-[150px] h-[150px] border border-[#021E42] rounded-full flex items-center justify-center ${
              file && hovers ? "hover:opacity-25" : ""
            }`}
            style={{
              backgroundImage: file
                ? `url(${URL.createObjectURL(file)})`
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={() => inputEl.current.click()}
            onMouseEnter={() => setHovers(true)}
            onMouseLeave={() => setHovers(false)}
          >
            {!file && <RiImageAddFill className="text-[58px] text-[#021E42]" />}

            {file && hovers && (
              <div className="flex">
                <i>
                  <GrView className="text-white" />
                </i>
                <i>
                  <MdDelete className="text-white" />
                </i>
              </div>
            )}
          </div>

          <input
            type="file"
            ref={inputEl}
            className="hidden"
            onChange={e => {
              if (e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }}
          />
        </div>

        <form className="border-2">
          <p>form</p>
        </form>
      </div>
    </div>
  );
}
