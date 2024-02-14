import background from "../images/Background.jpg";

export default function HomePage() {
  const backgroundImageStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "635px",
  };

  const data = [
    {
      id: 1,
      image:
        "https://s3-alpha-sig.figma.com/img/94d8/2bb2/7822ace31f33d94ee74d8731303878e0?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EuFK73hTq-qoy7Mxkivtj9fXqBdR7axb4U6h1xlYlYApqT8oedzyl~8yROB7UYTw~sElECjFcoxUW8P1Vi60KwnTav9U5lGTzCWoCOsuNPPN-a-WNmQyqyqaotYiK-SB009JKKWB76tM0ban~M45vb3xBi3kinIRD0x4yjVHBYgqDch1CDJqih69mHoCDWScDb3GZjIb3aKHV~nLYh9qWss9nR7jBHgWWvRlLTHljV7qpMH5n3M9cgRlROsi2-GSa5phFWwUWkDq9v6PrFdZd0pk7pSqBla2Ecpzy4MXZO2SHK9fNB87p8vUs6RI3yT3JAjXrX8jIf2vKHnfRkQgnA__",
      header: "Lorem ipsum",
      descriptionn:
        "One-stop Platform community for Agents and Operator in Thailand.",
    },
    {
      id: 2,
      image:
        "https://s3-alpha-sig.figma.com/img/7ab3/aea5/2d4373e1b8c47b69e9e07d411b996213?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=odGsHKwe9hQLkDhyRJ~PePTABURW3aLQJUJhcU8uen8Pb2h9gdbWPfi4ijbwOzYs43w5-Wxr3Ly7Hyy-Rmg--22d5SqfvBMqg2CqT-1Z1B0uhBxlA1E3x~g3A7RcwAe42kKVdppGrNFrGgpNqNyc5g3vQvjTb7-IzjqusGBzbIpT9kSRHerj4Ut7QswD~t8YWfsQa7CMGcYa3KtKGp76tfsVyHSnOLYsDOdRKItDdsUSh8L2gCM-dmORJkfzXAdg9x8wwOhF9LLjyH0fuR0eE4UjWITi41mzJOx2d71heD~LxGBs92a2XUI1QBeMKM97U4s2ripjFB1AxcuI~bh3Hw__",
      header: "Lorem ipsum",

      descriptionn:
        "One-stop Platform community for Agents and Operator in Thailand.",
    },

    {
      id: 3,
      image:
        "https://s3-alpha-sig.figma.com/img/114d/b870/7eb0a8cf5f20a7e1b3bfc1c3fd42eedf?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=olG2fpzD6idkierkWNSDBqZwa7879njzhbHxSIoDaZ8iX6duASqnlw7wURaRK54VC8xEGekpa0UTmaLP9pOLApUdVtjJ08JlJNri1VevEBIsrezf~VsXEeChiTpcGAHARUinm3tPUAilJfTwDwynpINwQzF4gLVbDSEusF6myNRoBXlcW1FuS7ZnGsdk2~lzXSq18IuucYSUgfyTpV0E8i-yqNdQCV7b9DnkpTuV0n8SHFZCjgrPBDSBuS8DfsrFVX52wE6qOsHLHx-A16ArSBJQ8XGNvzudjK0uArq9GQw2FR6F-PZIMoAQRNqYRKBdhuW4FpbTiX0YYMXGIMqxXw__",
      header: "Lorem ipsum",

      descriptionn:
        "One-stop Platform community for Agents and Operator in Thailand.",
    },

    {
      id: 4,
      image:
        "https://s3-alpha-sig.figma.com/img/8418/746f/8638bbdcf78e615e7eb0ee0caca7948a?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HwCv2mWhvn8hD2gzJrCSWoLbUnwNx0Kxlht2B5zJWkDaumlEOzMdP-i9hKUEUXrDN5JpDQQOIpLCcpQzxbtgr~shfzxtrXSgauAzKLFuIjsLWOUGPNGGjUNH8JA23aRQjBhY-22SW84f6YXmWcARIvVduw44HMO0R5susDeJIP4ZwBnt3Per2sY63AimD5X6v-y7~Ook1ZB5kOVcoFKYDXCBr-G4gQIc~KYxAn~nuJ5~bVvNs0Wh-VgkKsBPkpURV3DDO0JdgKruULtHrGBzQnzbyTUIgfRPI3biEwJ64jCy6A1XzDtdF7a2vNrGsZkm3oyY2GaYhfnrJLZ8JEpERg__",
      header: "Lorem ipsum",

      descriptionn:
        "One-stop Platform community for Agents and Operator in Thailand.",
    },
  ];

  // console.log("data:", data);

  return (
    <div className="max-w-[1920px] flex flex-col gap-10">
      <div
        className="w-full flex flex-col justify-center items-center gap-4"
        style={backgroundImageStyle}
      >
        <h1 className="text-white text-5xl font-bold">
          Lorem ipsum dolor sit amet consectetur.{" "}
        </h1>
        <p className="text-white text-[32px]">
          One-stop Platform community for Agents and Operator in Thailand.
        </p>
      </div>

      <div className="w-full flex flex-col justify-center items-center mb-10">
        <div>
          <h1 className="text-[32px] text-[#142B41] font-bold">Lorem ipsum</h1>
        </div>

        <div className="w-full flex flex-wrap justify-center items-center gap-6 p-6">
          {data?.map((el, idx) => (
            <div
              key={idx}
              className="w-[380px] h-[438px] border-2 rounded-lg shadow-xl"
            >
              <div className="w-full">
                <img
                  className="w-full h-[272px] object-cover rounded-tl-lg rounded-tr-lg"
                  src={el?.image}
                />
              </div>

              <div className="flex flex-col justify-center items-center gap-2 p-2">
                <div className="w-[293px] h-[81px] flex flex-col justify-center items-center">
                  <h1 className="text-lg text-[#142B41] font-bold">
                    {el?.header}
                  </h1>

                  <p className="text-[#142B41] text-[14px]">
                    {el?.descriptionn}
                  </p>
                </div>

                <div className="flex justify-center items-center">
                  <button className="bg-[#2A4B6A] text-[#FFFFFF] text-xl rounded-full  h-12 py-2 px-4 font-bold hover:bg-[#3E5F7E]">
                    Buy package
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
