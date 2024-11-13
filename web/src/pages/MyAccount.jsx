import React, { useState } from 'react';

const MyAccount = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignInClick = () => setShowSignIn(true);
  const handleSignUpClick = () => setShowSignIn(false);

  return (
      <section className="relative w-full max-w-5xl h-[650px] bg-gray bg-opacity-100 shadow-2xl font-sans overflow-hidden flex mx-auto mt-20 rounded-lg">
        {/* Aside Section */}
        <aside
          className={`absolute top-0 ${showSignIn ? 'left-0' : 'right-0'} h-full w-2/5 bg-black bg-opacity-85 rounded-lg 
          transition-all duration-700 ease-in-out transform ${showSignIn ? 'translate-x-0' : 'translate-x-'}`}
        >
          <section className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <h2 className="text-3xl text-white mb-6">
              {showSignIn ? 'Welcome Back!' : 'Join us!'}
            </h2>
            <button
              onClick={showSignIn ? handleSignUpClick : handleSignInClick}
              className="text-white border border-white py-2 px-8 rounded-full uppercase transition-colors duration-500  ease-in-out hover:bg-white hover:text-green-700 mb-6"
            >
              {showSignIn ? 'Sign In' : 'Sign Up'}
            </button>
          </section>
        </aside>

        {/* Main Section */}
        <main
          className={`absolute top-0 ${showSignIn ? 'right-0' : 'left-0'} h-full w-3/5 bg-gray-50 rounded-lg 
          transition-all duration-700 ease-in-out transform ${showSignIn ? 'translate-x-0' : 'translate-x-'}`}
        >
        <section className="absolute inset-0 flex flex-col items-center justify-center px-8  font-bold mb-6">
          <h2 className="text-4xl text-black-600 mb-7">
            {showSignIn ? 'Login to your account' : 'Create Account'}
          </h2>
          {showSignIn && (
            <div className="flex flex-row items-center mb-7 space-x-4">
              <button className="flex items-center justify-center w-1/2 h-12 rounded-md border border-gray-300 bg-white px-10 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all hover:bg-gray-100 hover:border-green-600">
                <img src="src/assets/outlook.png" alt="Microsoft" className="w-6 h-6 mr-2" />
                Outlook
              </button>
              <button className="flex items-center justify-center w-1/2 h-12 rounded-md border border-gray-300 bg-white px-10 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all hover:bg-gray-100 hover:border-green-600">
                <img src="src/assets/google.png" alt="Google" className="w-6 h-6 mr-2" />
                Google
              </button>
            </div>
          )}
          <form className="w-3/4 flex flex-col">
            {!showSignIn && (
              <>
                <label htmlFor="user_name" className="mb-2 text-lg text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  className="w-full h-12 mb-4 rounded-md border border-gray-300 bg-gray-100 px-4 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
                  placeholder="Name"
                />
              </>
            )}
            <label htmlFor="user_email" className="mb-2 text-lg text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="user_email"
              className="w-full h-12 mb-4 rounded-md border border-gray-300 bg-gray-100 px-4 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
              placeholder="Email@aui.ma"
            />

            <label htmlFor="user_password" className="mb-2 text-lg text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="user_password"
              className="w-full h-12 mb-6 rounded-md border border-gray-300 bg-gray-100 px-4 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
              placeholder="Password"
            />

            {!showSignIn && (
              <>
                <label htmlFor="confirm_password" className="mb-2 text-lg text-gray-600">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm_password"
                  className="w-full h-12 mb-4 rounded-md border border-gray-300 bg-gray-100 px-4 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
                  placeholder="Confirm your Password"
                />
              </>
            )}

            {showSignIn && (
              <>
                {/* Container for Remember Me and Forgot Password */}
                <div className="flex justify-between items-center mb-8">
                  {/* Remember Me Checkbox */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember_me"
                      className="h-4 w-4 text-blue-600 border-gray-400 rounded focus:ring-2 focus:ring-green-600"
                    />
                    <label htmlFor="remember_me" className="ml-2 text-gray-500 text-sm">
                      Remember me
                    </label>
                  </div>

                  {/* Forgot Password Link */}
                  <div>
                    <a href="#" className="text-sm text-gray-500 hover:text-green-700">
                      Forgot password?
                    </a>
                  </div>
                </div>
              </>
            )}
            <button
              type="submit"
              className="self-center text-white bg-blue-700 py-2 px-8 rounded-lg uppercase transition-colors duration-500 ease-in-out hover:bg-blue-600"
            >
              {showSignIn ? 'Sign In' : 'Sign Up'}
            </button>

            {showSignIn && (
              <>
                {/* Don't Have Account Section */}
                <div className="text-center mt-6">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{" "}
                    <a href="#" className="text-blue-600 hover:text-blue-700">
                      Create an account
                    </a>
                  </p>
                </div>
              </>
            )}

            {!showSignIn && (
              <>
                {/* Already Have Account Section */}
                <div className="text-center mt-6">
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <a href="#" className="text-blue-600 hover:text-blue-700">
                      Log in to your account
                    </a>
                  </p>
                </div>
              </>
            )}
          </form>
        </section>
      </main>
    </section>
  );
};

export default MyAccount;
