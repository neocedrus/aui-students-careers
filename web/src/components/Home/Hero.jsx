import { Search, MapPin } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-white p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="text-[#34A853]">Create</span>
                <br />
                for everyone
              </h1>
              <p className="text-xl text-muted-foreground">
                Find your next job at AUI Connect.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="space-y-2">
                <label htmlFor="role" className="text-sm font-medium">
                  Role
                </label>
                <div className="relative flex items-center border rounded-xl p-4">
                  <Search className="absolute left-3 h-5 w-5 text-muted-foreground" />
                  <input
                    id="role"
                    placeholder="Software engineer"
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-medium">
                  Where?
                </label>
                <div className="relative  flex items-center border rounded-xl p-4">
                  <MapPin className="absolute left-3 h-5 w-5 text-muted-foreground" />
                  <input
                    id="location"
                    placeholder="Los Angeles"
                    className="pl-10"
                  />
                </div>
              </div>

              <button size="xl" className=" bg-[#34A853] mt-7 p-4 rounded-full">
                Search
              </button>

            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="aspect-square overflow-hidden rounded-full border ml-10">
              <img
                src="src/assets/DSCF0193.webp"
                alt="Professional camera equipment"
                className="h-full w-full "
              />
            </div>
            <div className="absolute inset-0">
              <div className="absolute top-4 right-8 h-4 w-4 rounded-full border-2 border-[#4285F4]" />
              <div className="absolute bottom-12 right-4 h-6 w-6 rounded-full border-2 border-[#FBBC05]" />
              <div className="absolute top-1/2 -left-2 h-8 w-8 rounded-full border-2 border-[#34A853]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}