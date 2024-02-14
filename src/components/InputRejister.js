export default function InputRejister({
  title,
  icon,
  type,
  name,
  placeholder,
  onChange,
  value,
}) {
  return (
    <>
      <label className="block mb-2 text-base font-medium text-[#000000]">
        {title}
      </label>

      <div className="w-[360px] h-[44px] flex items-center justify-start gap-2 bg-white border-2 p-2">
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
  );
}
