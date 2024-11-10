import React from "react";

function MyAccount() {
  return (
    <div className="bg-blue-300 w-full h-screen relative">
      <div className="absolute left-[125px] w-[1000px] h-[300px] object-cover border-4 border-gray-100">
        <img src="BACKGROUND.jpg" alt="Profile Pic" />

        <div
          className="bg-cover bg-center h-screen"
          style="background-image: url('BACKGROUND.jpg');"
        ></div>
        <button
          className=" absolute right-[60px] bottom-[40px] mt-8 rounded-md bg-gray-300 px-4 py-2 text-sm font-medium text-grey-500 hover:bg-gray-400 transition duration-300 ease-in-out"
          onclick="document.body.classList.toggle('dark')"
        >
          Edit Cover Picture
        </button>
      </div>

      <div className="w-[1000px] h-[900px] bg-white shadow-xl absolute top-[300px] left-[125px] rounded-b-[25px]">
        <div className=" w-full h-[172px] bg-[#f2f0ef] ">
          <img
            src="default.jpg"
            alt="Profile Pic"
            className=" absolute top-[-30px] left-[20px] w-[180px] h-[180px] rounded-full object-cover border-4 border-white"
          />

          <div className=" absolute left-[200px] top-[20px] p-[10px]">
            <h1 className="text-base font-medium text-[30px] pt-[10px] ">
              Mohamed Amine Harchi
            </h1>
            <p className=" text-slate-500 mt-[10px]">Computer Science </p>
          </div>
          <button
            className=""
            class=" absolute right-[60px] top-[40px] mt-8 rounded-md bg-gray-300 px-4 py-2 text-sm font-medium text-grey-500 hover:bg-gray-400 transition duration-300 ease-in-out"
            onclick="document.body.classList.toggle('dark') 
            
    "
          >
            Edit profile
          </button>
          <div className="h-[2px] w-[900px] bg-gray-400 m-[20px] absolute top-[150px] ml-[50px] mr-[50px]"></div>
        </div>
        <div className="absolute top-[172px] h-[60px] w-full bg-[#f2f0ef]">
          <div className="h-[55px]  theme.extend.cursor text-center w-[100px] p-[10px] m-[2px] text-[16px] rounded-md hover:bg-gray-200 transition duration-300 ease-in-out hover:text-[18px] transtion text-duration:700 ">
            About
          </div>
          <div className=" absolute left-[100px] top-0 h-[55px] theme.extend.cursor text-center w-[100px] p-[10px] m-[2px] text-[16px] rounded-md hover:bg-gray-200 transition duration-300 ease-in-out hover:text-[18px] transtion text-duration:700 ">
            Skills
          </div>
          <div className=" absolute left-[200px] top-0 h-[55px] theme.extend.cursor text-center w-[100px] p-[10px] m-[2px] text-[16px] rounded-md hover:bg-gray-200 transition duration-300 ease-in-out hover:text-[18px] transtion text-duration:700 ">
            Contact
          </div>
          <div className=" absolute left-[300px] top-0 h-[55px] theme.extend.cursor text-center w-[100px] p-[10px] m-[2px] text-[16px] rounded-md hover:bg-gray-200 transition duration-300 ease-in-out hover:text-[18px] transtion text-duration:700 ">
            More
          </div>
        </div>
        <div className="bg-white w-[360px] h-[300px] absolute left-[100px] top-[280px] rounded-lg shadow-xl">
          <div className="w-full h-[54px] pb-[4px] bg-[#f2f0ef] font-medium text-[20px] flex items-center rounded-t-lg pl-[16px]">
            <h1>About</h1>
          </div>
        </div>

        <div className="bg-white w-[360px] h-[300px] absolute left-[500px] top-[280px] rounded-lg shadow-xl">
          <div className="w-full h-[54px] pb-[4px] bg-[#f2f0ef] font-medium text-[20px] flex items-center rounded-t-lg pl-[16px]">
            <h1>Skills</h1>
          </div>
        </div>

        <div className="bg-white w-[360px] h-[300px] absolute left-[900px] top-[280px] rounded-lg shadow-xl">
          <div className="w-full h-[54px] pb-[4px] bg-[#f2f0ef] font-medium text-[20px] flex items-center rounded-t-lg pl-[16px]">
            <h1>Contact</h1>
          </div>
        </div>

        <div className="bg-white w-[360px] h-[300px] absolute left-[1300px] top-[280px] rounded-lg shadow-xl">
          <div className="w-full h-[54px] pb-[4px] bg-[#f2f0ef] font-medium text-[20px] flex items-center rounded-t-lg pl-[16px]">
            <h1>More</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
