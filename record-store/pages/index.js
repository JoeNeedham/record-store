import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
          <title>Joe's Crate</title>
      </Head>
      <>
          <div>
            <Navbar />
            {/* <section className="relative"><nav className="flex justify-between border-b"><div className="px-12 py-8 flex w-full items-center">
                  <a className="hidden xl:block mr-16" href="#">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 15.4688H0V17.7207H18V15.4688Z" fill="black"></path><path d="M11.0226 7.87402H0V10.126H11.0226V7.87402Z" fill="black"></path><path d="M18 0.279297H0V2.53127H18V0.279297Z" fill="black"></path></svg></a>
                  <ul className="hidden xl:flex font-semibold font-heading"><li className="mr-12"><a className="hover:text-gray-600" href="#">Home</a></li>
                    <li className="mr-12"><a className="hover:text-gray-600" href="#">Records</a></li>
                    <li className="mr-12"><a className="hover:text-gray-600" href="#">Blog</a></li>
                    <li><a className="hover:text-gray-600" href="#">About Us</a></li>
                  </ul><a className="flex-shrink-0 xl:mx-auto text-3xl font-bold font-heading" href="#">
                    </a>
                  <div className="hidden xl:inline-block mr-14">
                    <input className="py-5 px-8 w-full placeholder-gray-400 text-xs uppercase font-semibold font-heading bg-gray-50 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text" placeholder="Search" /></div>
                  <div className="hidden xl:flex items-center">
                    <a className="mr-10 hover:text-gray-600" href="#">
                      <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4998 19.2061L2.70115 9.92527C1.92859 9.14433 1.41864 8.1374 1.24355 7.04712C1.06847 5.95684 1.23713 4.8385 1.72563 3.85053V3.85053C2.09464 3.10462 2.63366 2.45803 3.29828 1.96406C3.9629 1.47008 4.73408 1.14284 5.5483 1.00931C6.36252 0.875782 7.19647 0.939779 7.98144 1.19603C8.7664 1.45228 9.47991 1.89345 10.0632 2.48319L11.4998 3.93577L12.9364 2.48319C13.5197 1.89345 14.2332 1.45228 15.0182 1.19603C15.8031 0.939779 16.6371 0.875782 17.4513 1.00931C18.2655 1.14284 19.0367 1.47008 19.7013 1.96406C20.3659 2.45803 20.905 3.10462 21.274 3.85053V3.85053C21.7625 4.8385 21.9311 5.95684 21.756 7.04712C21.581 8.1374 21.071 9.14433 20.2984 9.92527L11.4998 19.2061Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></a>
                    <a className="flex items-center hover:text-gray-600" href="#">
                      <svg className="mr-3" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg><span className="inline-block w-6 h-6 text-center bg-gray-50 rounded-full font-semibold font-heading">3</span>
                    </a>
                  </div>
                </div>
                <a className="hidden xl:flex items-center px-12 border-l font-semibold font-heading hover:text-gray-600" href="#">
                  <svg className="mr-3" width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0006 16.3154C19.1303 16.3154 21.6673 13.799 21.6673 10.6948C21.6673 7.59064 19.1303 5.07422 16.0006 5.07422C12.871 5.07422 10.334 7.59064 10.334 10.6948C10.334 13.799 12.871 16.3154 16.0006 16.3154Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M24.4225 23.8963C23.6678 22.3507 22.4756 21.0445 20.9845 20.1298C19.4934 19.2151 17.7647 18.7295 15.9998 18.7295C14.2349 18.7295 12.5063 19.2151 11.0152 20.1298C9.52406 21.0445 8.33179 22.3507 7.57715 23.8963" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg><span>Sign In</span>
                </a>
                <a className="xl:hidden flex mr-6 items-center text-gray-600" href="#">
                  <svg className="mr-2" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg><span className="inline-block w-6 h-6 text-center bg-gray-50 rounded-full font-semibold font-heading">3</span>
                </a>
                <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
                  <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM19 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H19C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5Z" fill="#8594A5"></path></svg></a>
              </nav><div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto"><div className="flex items-center mb-8">
                    <a className="mr-auto text-3xl font-bold font-heading" href="#">
                      <img className="h-9" src="yofte-assets/logos/yofte-logo.svg" alt="" width="auto" /></a>
                    <button className="navbar-close">
                      <svg className="h-2 w-2 text-gray-500 cursor-pointer" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.00002 1L1 9.00002M1.00003 1L9.00005 9.00002" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
                  </div>
                  <div className="flex mb-8 justify-between">
                    <a className="inline-flex items-center font-semibold font-heading" href="#">
                      <svg className="mr-3" width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0006 16.3154C19.1303 16.3154 21.6673 13.799 21.6673 10.6948C21.6673 7.59064 19.1303 5.07422 16.0006 5.07422C12.871 5.07422 10.334 7.59064 10.334 10.6948C10.334 13.799 12.871 16.3154 16.0006 16.3154Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M24.4225 23.8963C23.6678 22.3507 22.4756 21.0445 20.9845 20.1298C19.4934 19.2151 17.7647 18.7295 15.9998 18.7295C14.2349 18.7295 12.5063 19.2151 11.0152 20.1298C9.52406 21.0445 8.33179 22.3507 7.57715 23.8963" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg><span>Sign In</span>
                    </a>
                    <div className="flex items-center">
                      <a className="mr-10" href="#">
                        <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4998 19.2061L2.70115 9.92527C1.92859 9.14433 1.41864 8.1374 1.24355 7.04712C1.06847 5.95684 1.23713 4.8385 1.72563 3.85053V3.85053C2.09464 3.10462 2.63366 2.45803 3.29828 1.96406C3.9629 1.47008 4.73408 1.14284 5.5483 1.00931C6.36252 0.875782 7.19647 0.939779 7.98144 1.19603C8.7664 1.45228 9.47991 1.89345 10.0632 2.48319L11.4998 3.93577L12.9364 2.48319C13.5197 1.89345 14.2332 1.45228 15.0182 1.19603C15.8031 0.939779 16.6371 0.875782 17.4513 1.00931C18.2655 1.14284 19.0367 1.47008 19.7013 1.96406C20.3659 2.45803 20.905 3.10462 21.274 3.85053V3.85053C21.7625 4.8385 21.9311 5.95684 21.756 7.04712C21.581 8.1374 21.071 9.14433 20.2984 9.92527L11.4998 19.2061Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></a>
                      <a className="flex items-center" href="#">
                        <svg className="mr-3" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg><span className="inline-block w-6 h-6 text-center bg-gray-100 rounded-full font-semibold font-heading">3</span>
                      </a>
                    </div>
                  </div>
                  <input className="block mb-10 py-5 px-8 bg-gray-100 rounded-md border-transparent focus:ring-blue-300 focus:border-blue-300 focus:outline-none" type="search" placeholder="Search" /><ul className="text-3xl font-bold font-heading"><li className="mb-8"><a href="#">Home</a></li>
                    <li className="mb-8"><a href="#">Records</a></li>
                    <li className="mb-8"><a href="#">Blog</a></li>
                    <li><a href="#">About Us</a></li>
                  </ul></nav></div>
            </section> */}
                      
            <section className="py-20"><div className="container mx-auto px-4">
                <h2 className="mb-16 md:mb-24 text-4xl md:text-5xl font-bold font-heading">Featured Records</h2>
                <div className="flex flex-wrap -mx-4 mb-24">
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:px-10 mb-20">
                    <div className="p-6 bg-white">
                      <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">-15%</span>
                      <a className="block px-6 mt-8 mb-2" href="#">
                        <img className="mb-5 mx-auto h-56 w-full object-contain" src="yofte-assets/images/waterbottle.png" alt="" /><h3 className="mb-2 text-xl font-bold font-heading">BRILE water filter</h3>
                        <p className="text-lg font-bold font-heading text-blue-500">
                          <span>$29.89</span>
                          <span className="text-xs text-gray-500 font-semibold font-heading line-through">$33.69</span>
                        </p>
                      </a>
                      <a className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500" href="#">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" width="2" height="12" fill="#161616"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect></svg></a>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:px-10 mb-20">
                    <div className="p-6 bg-white h-full">
                      <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">-10%</span>
                      <a className="block px-6 mt-8 mb-2" href="#">
                        <img className="mb-5 mx-auto h-56 w-full object-contain" src="yofte-assets/images/cycle.png" alt="" /><h3 className="mb-2 text-xl font-bold font-heading">Bicycle S20</h3>
                        <p className="text-lg font-bold font-heading text-blue-500">
                          <span>$14.30</span>
                          <span className="text-xs text-gray-500 font-semibold font-heading line-through">$15.90</span>
                        </p>
                      </a>
                      <a className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500" href="#">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" width="2" height="12" fill="#161616"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect></svg></a>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:px-10 mb-20 lg:mb-0">
                    <div className="p-6 bg-white">
                      <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-blue-300 rounded-full text-blue-300 uppercase bg-white">New</span>
                      <a className="block px-6 mt-8 mb-2" href="#">
                        <img className="mb-5 mx-auto h-56 w-full object-contain" src="yofte-assets/images/skateboard.png" alt="" /><h3 className="mb-2 text-xl font-bold font-heading">Kiteboard WH-004</h3>
                        <p className="text-lg font-bold font-heading text-blue-500">$199.90</p>
                      </a>
                      <a className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500" href="#">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" width="2" height="12" fill="#161616"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect></svg></a>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:px-10 mb-20 lg:mb-0">
                    <div className="p-6 bg-white h-full">
                      <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-blue-300 rounded-full text-blue-300 uppercase bg-white">New</span>
                      <a className="block px-6 mt-8 mb-2" href="#">
                        <img className="mb-5 mx-auto h-56 w-full object-contain" src="yofte-assets/images/backpack.png" alt="" /><h3 className="mb-2 text-xl font-bold font-heading">Backpack travel</h3>
                        <p className="text-lg font-bold font-heading text-blue-500">$29.89</p>
                      </a>
                      <a className="ml-auto mr-4 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500" href="#">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" width="2" height="12" fill="#161616"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect></svg></a>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:px-10 mb-20 md:mb-0">
                    <div className="p-6 bg-white">
                      <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">-15%</span>
                      <a className="block px-6 mt-8 mb-2" href="#">
                        <img className="mb-5 mx-auto h-56 w-full object-contain" src="yofte-assets/images/waterbottle.png" alt="" /><h3 className="mb-2 text-xl font-bold font-heading">BRILE water filter</h3>
                        <p className="text-lg font-bold font-heading text-blue-500">
                          <span>$29.89</span>
                          <span className="text-xs text-gray-500 font-semibold font-heading line-through">$33.69</span>
                        </p>
                      </a>
                      <a className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500" href="#">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" width="2" height="12" fill="#161616"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect></svg></a>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:px-10">
                    <div className="p-6 bg-white h-full">
                      <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">-10%</span>
                      <a className="block px-6 mt-8 mb-2" href="#">
                        <img className="mb-5 mx-auto h-56 w-full object-contain" src="yofte-assets/images/tennisball.png" alt="" /><h3 className="mb-2 text-xl font-bold font-heading">Tennis ball (2)</h3>
                        <p className="text-lg font-bold font-heading text-blue-500">
                          <span>$14.30</span>
                          <span className="text-xs text-gray-500 font-semibold font-heading line-through">$15.90</span>
                        </p>
                      </a>
                      <a className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500" href="#">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" width="2" height="12" fill="#161616"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect></svg></a>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <a className="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-6 px-8 rounded-md uppercase" href="#">Show More</a>
                </div>
              </div>
            </section>
          </div>
      </>
    </>
  )
}
