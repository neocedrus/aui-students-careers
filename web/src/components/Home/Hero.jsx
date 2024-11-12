import { Search, MapPin } from "lucide-react"
// import HeroImage from "@/assets/HeroImage.svg"

export default function Component() {
  return (
    <div className="h-[80vh] flex flex-row items-center">
      <div className="w-1/3 pl-12 h-full bg-red-100 flex flex-col justify-center">
        <h1 className="text-7xl text-left">AUI Students<br/>Carreers</h1>
      </div>
      <div className="w-2/3 bg-blue-500 h-full">
        <img src="/src/assets/messi.svg" className="absolute -bottom-1" />
      </div>
    </div>
  )
}