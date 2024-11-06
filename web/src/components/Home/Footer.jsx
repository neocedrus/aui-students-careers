export default function Footer(){
    return(
    <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <div className='flex items-center gap-4'>
            <img src="src/assets/AUI.jpeg" alt="NeoCode Logo" width={120} height={40} className='rounded-xl'/>
            <img src="src/assets/neocedrus.png" alt="NeoCode Logo" width={120} height={40} className='rounded-xl'/>
            <img src="src/assets/IEEE.jpeg" alt="NeoCode Logo" width={120} height={40} className='rounded-xl'/>
          </div>
          <p className="text-gray-400 mt-4">Connecting students with campus opportunities.</p>
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {['About Us', 'Job Listings', 'For Universities', 'Contact'].map((link, index) => (
              <li key={index} className="text-gray-400 hover:text-white cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button type="submit" className="bg-green-600 hover:bg-purple-700 rounded-r-md px-4 py-2 text-white transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>© 2024 NeoCode. All rights reserved.</p>
      </div>
    </div>
  </footer>
    )
}