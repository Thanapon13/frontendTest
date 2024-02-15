import { useEffect, useRef, useState } from "react";
import {
  RiImageAddFill,
  RiLockPasswordFill,
  RiEyeFill,
  RiEyeCloseFill,
} from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import Modal from "../components/Modal";
import { toast } from "react-toastify";
import InputRejister from "../components/InputRejister";
import SelectRejister from "../components/SelectRejister";

export default function RejisterPage() {
  const inputEl = useRef();
  const [file, setFile] = useState([]);
  // console.log("file:", file);
  const [hovers, setHovers] = useState(false);
  const [openView, setOpenView] = useState(false);
  const imageTypes = ["image/png", "image/jpeg"];
  const [arrayImageURL, setArrayImageURL] = useState([]);
  // console.log("arrayImageURL:", arrayImageURL);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

  const countryData = [
    { name: "Thailand", code: "TH" },
    { name: "Afghanistan", code: "AF" },
    { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" },
    { name: "Andorra", code: "AD" },
    { name: "Angola", code: "AO" },
    { name: "Antigua and Barbuda", code: "AG" },
    { name: "Argentina", code: "AR" },
    { name: "Armenia", code: "AM" },
    { name: "Australia", code: "AU" },
    { name: "Austria", code: "AT" },
    { name: "Azerbaijan", code: "AZ" },
    { name: "Bahamas", code: "BS" },
    { name: "Bahrain", code: "BH" },
    { name: "Bangladesh", code: "BD" },
    { name: "Barbados", code: "BB" },
    { name: "Belarus", code: "BY" },
    { name: "Belgium", code: "BE" },
    { name: "Belize", code: "BZ" },
    { name: "Benin", code: "BJ" },
    { name: "Bhutan", code: "BT" },
    { name: "Bolivia", code: "BO" },
    { name: "Bosnia and Herzegovina", code: "BA" },
    { name: "Botswana", code: "BW" },
    { name: "Brazil", code: "BR" },
    { name: "Brunei", code: "BN" },
    { name: "Bulgaria", code: "BG" },
    { name: "Burkina Faso", code: "BF" },
    { name: "Burundi", code: "BI" },
    { name: "Cabo Verde", code: "CV" },
    { name: "Cambodia", code: "KH" },
    { name: "Cameroon", code: "CM" },
    { name: "Canada", code: "CA" },
    { name: "Central African Republic", code: "CF" },
    { name: "Chad", code: "TD" },
    { name: "Chile", code: "CL" },
    { name: "China", code: "CN" },
    { name: "Colombia", code: "CO" },
    { name: "Comoros", code: "KM" },
    { name: "Congo (Congo-Brazzaville)", code: "CG" },
    { name: "Costa Rica", code: "CR" },
    { name: "Croatia", code: "HR" },
    { name: "Cuba", code: "CU" },
    { name: "Cyprus", code: "CY" },
    { name: "Czechia (Czech Republic)", code: "CZ" },
    { name: "Democratic Republic of the Congo", code: "CD" },
    { name: "Denmark", code: "DK" },
    { name: "Djibouti", code: "DJ" },
    { name: "Dominica", code: "DM" },
    { name: "Dominican Republic", code: "DO" },
    { name: "Ecuador", code: "EC" },
    { name: "Egypt", code: "EG" },
    { name: "El Salvador", code: "SV" },
    { name: "Equatorial Guinea", code: "GQ" },
    { name: "Eritrea", code: "ER" },
    { name: "Estonia", code: "EE" },
    { name: 'Eswatini (fmr. "Swaziland")', code: "SZ" },
  ];

  const countryPhoneNumbers = [
    { country: "Thailand", code: "+66" },
    { country: "Australia", code: "+61" },
    { country: "United Kingdom", code: "+44" },
    { country: "United States", code: "+1" },
    { country: "Japan", code: "+81" },
  ];

  const provincesData = [
    {
      name: "Chonburi",
    },
    {
      name: "Chiang Rai",
    },
    {
      name: "Chiang Mai",
    },
  ];

  const districtData = [
    {
      name: "Akat Amnuai",
    },
    {
      name: "Amphawa",
    },
    {
      name: "Ao Luek",
    },
  ];

  const cityDistrictData = [
    {
      name: "Akat Amnuai",
    },
    {
      name: "Amphawa",
    },
    {
      name: "Ao Luek",
    },
  ];

  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmedPassword: "",
    companyName: "",
    taxId: "",
    fullName: "",
    country: "",
    countryPhoneNumber: "",
    phoneNumber: "",
    website: "",
    address: "",
    stateProvince: "",
    subDistrict: "",
    cityDistrict: "",
    zipCode: "",
    image: "",
  });
  // console.log("input:", input);

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setInput(prevInput => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleImageChange = e => {
    const fileList = e.target.files;
    // console.log("fileList:", fileList);

    const cloneFile = [...file];
    // console.log("cloneFile:", cloneFile);

    for (let i = 0; i < fileList.length; i++) {
      if (!imageTypes.includes(fileList[i].type)) {
        toast.warn(`${fileList[i].name} is wrong file type!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (fileList[i].size > 20000000) {
        toast.warn(`${fileList[i].name} has more than 20mb!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (cloneFile.length >= 1) {
        toast.warn(`Your images are more than 1!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        cloneFile.push({ image: fileList[i] });
      }
    }
    setFile(cloneFile);

    setInput(prevInput => ({
      ...prevInput,
      image: cloneFile,
    }));
  };

  const deleteImg = idx => {
    let clone = [...file];
    clone.splice(idx, 1);
    setFile(clone);
  };

  useEffect(() => {
    if (file.length < 1) return;
    const newImageUrls = [];
    // console.log(arrayImage);
    file.forEach(img => {
      // console.log("img:", img);
      if (img._id) {
        newImageUrls.push(`http://localhost:4000/images/${img.image}`);
      } else {
        newImageUrls.push(URL.createObjectURL(img.image));
      }
    });
    // console.log("newImageUrls:", newImageUrls);
    setArrayImageURL(newImageUrls);
  }, [file]);

  const handleRegister = async e => {
    e.preventDefault();

    try {
      if (input) {
        const imageDataUrl =
          input.image[0]?.image && URL.createObjectURL(input.image[0]?.image);

        const userWithoutImage = { ...input };
        delete userWithoutImage.image;

        localStorage.setItem(
          "user",
          JSON.stringify({ ...userWithoutImage, image: imageDataUrl })
        );

        setInput({
          email: "",
          password: "",
          confirmedPassword: "",
          companyName: "",
          taxId: "",
          fullName: "",
          country: "",
          countryPhoneNumber: "",
          phoneNumber: "",
          website: "",
          address: "",
          stateProvince: "",
          subDistrict: "",
          cityDistrict: "",
          zipCode: "",
          image: "",
        });
        setArrayImageURL([]);

        await toast.success("sucess register. please login to continue");
      } else {
        alert("Please enter both username and password.");
      }
    } catch (err) {
      console.log("err");
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-start py-10">
      <div className="w-[70%] h-full flex flex-col gap-6 p-6 border-2 rounded-xl shadow-lg">
        {/* top image */}
        <div className="w-full flex flex-col justify-center items-center gap-3">
          <div
            className={`w-[150px] h-[150px] border border-[#021E42] rounded-full ${
              file && file.length > 0 && hovers ? "opacity-50" : ""
            }`}
            onMouseEnter={() => setHovers(true)}
            onMouseLeave={() => setHovers(false)}
          >
            <>
              {file && file.length > 0 ? (
                <div className="w-full h-full">
                  {file.map((image, idx) => (
                    <div className="w-full h-full" key={idx}>
                      <img
                        src={arrayImageURL[idx]}
                        className="relative w-full h-full rounded-full object-cover"
                        onClick={() => inputEl.current.click()}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full h-full flex justify-center items-center">
                  <button onClick={() => inputEl.current.click()}>
                    <RiImageAddFill className="text-[58px] text-[#021E42]" />
                  </button>
                </div>
              )}{" "}
            </>

            {file && file.length > 0 && hovers && (
              <div className="w-[150px] h-[150px] flex gap-2 p-2 absolute top-40 flex justify-center items-center">
                <button onClick={() => setOpenView(!openView)}>
                  <GrView className="text-black text-xl hover:text-white" />
                </button>

                {file.map((image, idx) => (
                  <div key={idx} className="flex items-center">
                    <button onClick={() => deleteImg(idx)}>
                      <MdDelete className="text-black text-xl hover:text-red-600" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <input
            type="file"
            ref={inputEl}
            className="hidden"
            onChange={handleImageChange}
          />
        </div>

        {/* bottom form input */}
        <form
          className="w-full h-full flex flex-col flex-wrap gap-4"
          onSubmit={handleRegister}
        >
          {/* TOP  */}
          <div className="w-full h-full pb-10 flex flex-wrap justify-between items-start border-b-2">
            <div>
              <InputRejister
                title="Email"
                icon={<MdOutlineMail className="text-[24px]" />}
                type="email"
                name="email"
                placeholder="Enter your Email"
                onChange={handleChangeInput}
                value={input.email}
              />
            </div>

            <div>
              <InputRejister
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                onChange={handleChangeInput}
                value={input.password}
                check="check"
                showPassword={showPassword}
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>

            <div>
              <InputRejister
                type={showConfirmedPassword ? "text" : "password"}
                name="confirmedPassword"
                placeholder="Enter your password"
                onChange={handleChangeInput}
                value={input.confirmedPassword}
                check="check"
                showConfirmedPassword={showConfirmedPassword}
                onClick={() => setShowConfirmedPassword(!showConfirmedPassword)}
              />
            </div>
          </div>

          {/* BOTTOM */}
          <div className="w-full h-full flex flex-col flex-wrap gap-4">
            <div className="w-full h-full">
              <h1 className="text-xl text-[#255FA8] font-bold">Information</h1>
            </div>

            <div className="w-full  flex-col flex-wrap">
              {/* top */}
              <div className="w-full h-full flex flex-wrap justify-between items-start gap-6">
                <div>
                  <InputRejister
                    title="Company Name"
                    name="companyName"
                    placeholder="Enter company name"
                    onChange={handleChangeInput}
                    value={input.companyName}
                  />
                </div>

                <div>
                  <InputRejister
                    title="Tax ID"
                    name="taxId"
                    placeholder="Enter Tax ID"
                    onChange={handleChangeInput}
                    value={input.taxId}
                  />
                </div>

                <div>
                  <InputRejister
                    title="Full Name"
                    name="fullName"
                    placeholder="Enter Full name"
                    onChange={handleChangeInput}
                    value={input.fullName}
                  />
                </div>
              </div>

              {/* center */}
              <div className="w-full h-full flex flex-wrap justify-between items-start gap-6 mt-2">
                <div>
                  <label className="block mb-2 text-base font-medium text-[#000000]">
                    Country
                  </label>

                  <SelectRejister
                    name="country"
                    onChange={handleChangeInput}
                    value={input.country}
                    data={countryData}
                    title="Choose Country"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-base font-medium text-[#000000]">
                    Phone Number
                  </label>

                  <div className="md:w-[360px] w-full flex gap-2">
                    <select
                      className="w-[93px] h-[44px] flex items-center justify-start gap-2 bg-white border-2 p-2"
                      onChange={handleChangeInput}
                      name="countryPhoneNumber"
                      value={input.countryPhoneNumber}
                    >
                      <option>select</option>
                      {countryPhoneNumbers?.map((el, idx) => (
                        <option key={idx}>{el?.code}</option>
                      ))}
                    </select>

                    <InputRejister
                      name="phoneNumber"
                      placeholder="Enter Phone number"
                      onChange={handleChangeInput}
                      value={input.phoneNumber}
                    />
                  </div>
                </div>

                <div>
                  <InputRejister
                    title="Website"
                    name="website"
                    placeholder="Enter website"
                    onChange={handleChangeInput}
                    value={input.website}
                  />
                </div>
              </div>

              {/* bottom */}
              <div className="w-full h-full flex flex-wrap justify-between items-start gap-6 mt-2">
                <div className="md:w-[28%] w-full flex flex-col gap-2">
                  <label className="block mb-2 text-base font-medium text-[#000000]">
                    Address
                  </label>

                  <textarea
                    type="text"
                    name="address"
                    placeholder="Enter Address"
                    className="md:w-[360px] md:h-[136px] w-full h-full border-2 outline-none resize-none p-2"
                    onChange={handleChangeInput}
                    value={input.address}
                  />
                </div>

                <div className="w-[825px] h-full flex flex-wrap justify-between items-start gap-6">
                  <div className="w-full  flex flex-wrap justify-between items-start gap-6 ml-2">
                    <div>
                      <label className="block mb-2 text-base font-medium text-[#000000]">
                        State/Province
                      </label>

                      <SelectRejister
                        onChange={handleChangeInput}
                        name="stateProvince"
                        value={input.stateProvince}
                        data={provincesData}
                        title="Choose Province"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-base font-medium text-[#000000]">
                        Sub-District
                      </label>

                      <SelectRejister
                        onChange={handleChangeInput}
                        name="subDistrict"
                        value={input.subDistrict}
                        data={districtData}
                        title="Choose Sub-District"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-base font-medium text-[#000000]">
                        City/District
                      </label>

                      <SelectRejister
                        onChange={handleChangeInput}
                        name="cityDistrict"
                        value={input.cityDistrict}
                        data={cityDistrictData}
                        title="Choose District"
                      />
                    </div>

                    <div>
                      <InputRejister
                        title="Zip Code"
                        name="zipCode"
                        placeholder="Enter Full name"
                        onChange={handleChangeInput}
                        value={input.zipCode}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* BUTTON */}
              <div className="w-full h-full mt-6 mb-10 flex justify-between items-center p-2">
                <button
                  className="w-[160px] h-[48px] border-2 text-xl rounded-full bg-[#021E42] text-white"
                  onClick={() => setInput("")}
                >
                  Cancel
                </button>
                <button className="w-[160px] h-[48px] border-2 text-xl rounded-full bg-[#5FC198] text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {openView && (
        <Modal open={openView} onClose={() => setOpenView(false)}>
          <div className="w-full h-full">
            {file.map((image, idx) => (
              <div className="w-full h-full p-2" key={idx}>
                <img
                  src={arrayImageURL[idx]}
                  className="relative w-full h-full object-center"
                />
              </div>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
}
