import React from "react";

function MyAccount() {
  return (
    <div className="w-full h-screen bg-[#ffffe3]">
      <div className="w-4/5 h-screen bg-white p-10 m-auto mt-[20px] pr-[200px]">
        <div className=" bg-blue-500 h-[250px] w-full mt-0 p-0 rounded-t-[32px]">
          <img src="" alt="" />
          <div>
            <img
              src="default-img.jpg"
              alt="Profil Pic"
              class="w-32 h-32 rounded-full object-cover border-2 mt-[220px] ml-[20px]"
            />
          </div>
        </div>
        <p className="font-serif text-[40px] ml-[190px] mt-[20px]">Mohamed Amine Harchi</p>
      </div>
    </div>
  );
}

export default MyAccount;
