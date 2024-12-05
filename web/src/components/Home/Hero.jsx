import { Search, MapPin } from "lucide-react";
import { Button } from "../ui/button";
// import HeroImage from "@/assets/HeroImage.svg"

export default function Component() {
  return (
    <div className="h-[100vh] flex flex-row items-center font-primay ">
      <div className="w-[35%] pl-12 h-full flex flex-col mt-[15%] space-y-6">
        <h1 className="text-7xl text-left font-semibold">
          AUI Students
          <br />
          <span className="text-slate-400">Careers</span>
        </h1>
        <p className="pl-1 text-slate-700">
          Your All-in-One students part-time application portal. 
          Discover opportunities around your campus, and get the chance to leave a fingerprint at AUI
        </p>
        <div>
          <button className="bg-slate-500 px-6 py-2 rounded-3xl text-white">
            Get Started Now
          </button>
        </div>
      </div>
      <div className="h-full">
        <img src="/src/assets/messi.svg" className="absolute bottom-20" />
      </div>
    </div>
  );
}
