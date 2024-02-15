export default function SelectRejister({ onChange, value, title, data, name }) {
  return (
    <>
      <select
        className="md:w-[360px] md:h-[44px] w-full h-full flex items-center justify-start gap-2 bg-white border-2 p-2"
        onChange={onChange}
        name={name}
        value={value}
      >
        <option value="" disabled>
          {title}
        </option>
        {data?.map((el, idx) => (
          <option key={idx}>{el?.name}</option>
        ))}
      </select>
    </>
  );
}
