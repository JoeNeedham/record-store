import React from 'react'
import Navbar from '../components/Navbar'

const Records = () => {
    return (
    <>
        <div>
            <Navbar />  
            <section className="py-20"><div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4 mb-20 items-center justify-between">
                    <div className="w-full lg:w-auto px-4 mb-12 xl:mb-0">
                    <h2 className="text-5xl font-bold font-heading">
                        <span>Found 125 results for</span>
                        <a className="relative text-blue-300 underline" href="#">Sports</a>
                    </h2>
                    </div>
                    <div className="w-full lg:w-auto px-4 flex flex-wrap items-center">
                    <div className="w-full sm:w-auto mb-4 sm:mb-0 mr-5">
                        <select className="pl-8 py-4 bg-white text-lg border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" name="" id=""><option value="1">Sort by newest</option><option value="2">Sort by price</option><option value="3">Sort by most popular</option></select></div>
                    
                    
                    </div>
                </div>
                <div className="flex -mx-3 mb-24 flex-wrap">
                    <div className="w-full lg:hidden px-3">
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-1/2 md:w-1/3 px-2 mb-4">
                        <div className="py-6 px-2 text-center bg-gray-50">
                            <a className="font-bold font-heading" href="#">Category</a>
                            <ul className="hidden text-left mt-6"><li className="mb-4"><a href="#">New in</a></li>
                            <li className="mb-4"><a href="#">Activewear</a></li>
                            <li className="mb-4"><a href="#">Hoodies &amp; Sweatshirts</a></li>
                            <li className="mb-4"><a href="#">Jackets</a></li>
                            <li className="mb-4"><a href="#">Multipacks</a></li>
                            <li className="mb-4"><a href="#">Bags</a></li>
                            <li className="mb-4"><a href="#">Sports</a></li>
                            <li className="mb-4"><a href="#">Gifts</a></li>
                            <li><a href="#">Notes</a></li>
                            </ul></div>
                        </div>
                        <div className="w-1/2 md:w-1/3 px-2 mb-4">
                        <div className="py-6 px-2 text-center bg-gray-50">
                            <a className="font-bold font-heading" href="#">Colors</a>
                            <div className="hidden mt-6 flex flex-wrap">
                            <button className="mr-4 mb-2 rounded-full border border-blue-300 p-1">
                                <div className="rounded-full bg-blue-300 w-5 h-5"></div>
                            </button>
                            <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                                <div className="rounded-full bg-orange-300 w-5 h-5"></div>
                            </button>
                            <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                                <div className="rounded-full bg-gray-900 w-5 h-5"></div>
                            </button>
                            <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                                <div className="rounded-full bg-red-300 w-5 h-5"></div>
                            </button>
                            <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                                <div className="rounded-full bg-green-300 w-5 h-5"></div>
                            </button>
                            <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                                <div className="rounded-full bg-pink-300 w-5 h-5"></div>
                            </button>
                            <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                                <div className="rounded-full bg-yellow-300 w-5 h-5"></div>
                            </button>
                            <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                                <div className="rounded-full bg-gray-100 w-5 h-5"></div>
                            </button>
                            </div>
                        </div>
                        </div>
                        <div className="w-1/2 md:w-1/3 px-2 mb-4">
                        <div className="py-6 px-4 text-center bg-gray-50">
                            <a className="font-bold font-heading" href="#">Price</a>
                            <div className="hidden mt-6">
                            <input className="w-full mb-4 outline-none appearance-none bg-gray-100 h-1 rounded cursor-pointer" type="range" min="1" max="100" value="50" /><div className="flex justify-between">
                                <span className="inline-block text-lg font-bold font-heading text-blue-300">$0</span>
                                <span className="inline-block text-lg font-bold font-heading text-blue-300">$289</span>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="w-1/2 md:w-1/3 px-2 mb-4">
                        <div className="py-6 px-4 text-center bg-gray-50">
                            <a className="font-bold font-heading" href="#">Size</a>
                            <div className="hidden mt-6 flex flex-wrap -mx-2 -mb-2">
                            <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">36</button>
                            <button className="relative mb-2 mr-1 w-16 border rounded-md">
                                37
                                <span className="absolute bottom-0 left-0 w-full py-px bg-blue-300"></span>
                            </button>
                            <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">38</button>
                            <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">39</button>
                            <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">40</button>
                            <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">41</button>
                            <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">42</button>
                            <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">43</button>
                            <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">44</button>
                            </div>
                            <div className="hidden mt-4 text-right">
                            <a className="inline-flex underline text-blue-300 hover:text-blue-400" href="#">
                                <span className="mr-2">Show all</span>
                                <svg width="14" height="27" viewBox="0 0 14 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.83901 26.2775L0.151884 19.5904L0.987775 18.7545L6.66766 24.4343L6.66347 0.782814L7.84208 0.782814L7.84626 24.4343L13.1082 19.1724L13.9441 20.0083L7.6749 26.2775C7.44407 26.5083 7.06985 26.5083 6.83901 26.2775Z" fill="#3C60D9"></path></svg></a>
                            </div>
                        </div>
                        </div>
                        <div className="w-1/2 md:w-1/3 px-2 mb-4">
                        <div className="py-6 px-4 text-center bg-gray-50">
                            <a className="font-bold font-heading" href="#">Location</a>
                            <div className="hidden mt-6">
                            <label className="flex mb-3 items-center text-lg">
                                <input type="checkbox" /><span className="ml-2">Standard</span>
                            </label>
                            <label className="flex items-center text-lg">
                                <input type="checkbox" /><span className="ml-2">Next day (yes!)</span>
                            </label>
                            </div>
                        </div>
                        </div>
                        <div className="w-1/2 md:w-1/3 px-2 mb-4">
                        <div className="py-6 px-4 text-center bg-gray-50">
                            <a className="font-bold font-heading" href="#">Location</a>
                            <input className="hidden mt-6 w-full px-8 py-4 bg-white border rounded-md" type="serach" placeholder="City" /></div>
                        </div>
                    </div>
                    </div>
                    
                    <div className="w-full lg:w-3/4 px-3">
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                        <div className="p-6 bg-gray-50">
                            <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">-15%</span>
                            <a className="block px-6 mt-6 mb-2" href="#">
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
                        <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                        <div className="p-6 bg-gray-50">
                            <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">-15%</span>
                            <a className="block px-6 mt-6 mb-2" href="#">
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
                        <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                        <div className="bg-gray-50 p-6">
                            <span className="px-2 py-1"></span>
                            <a className="block px-6 mt-6 mb-2" href="#">
                            <img className="mb-5 mx-auto h-56 w-full object-contain" src="yofte-assets/images/basketball.png" alt="" /><h3 className="mb-2 text-xl font-bold font-heading">Nike basketball ball</h3>
                            <p className="text-lg font-bold font-heading text-blue-500">
                                <span>$34.89</span>
                                <span className="text-xs text-gray-500 font-semibold font-heading line-through">$33.69</span>
                            </p>
                            </a>
                            <a className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500" href="#">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" width="2" height="12" fill="#161616"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect></svg></a>
                        </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                        <div className="p-6 bg-gray-50">
                            <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-blue-300 rounded-full text-blue-300 bg-white">NEW</span>
                            <a className="block px-6 mt-6 mb-2" href="#">
                            <img className="mb-5 mx-auto h-56 w-full object-contain" src="yofte-assets/images/skateboard.png" alt="" /><h3 className="mb-2 text-xl font-bold font-heading">Kiteboard WH-004</h3>
                            <p className="text-lg font-bold font-heading text-blue-500">
                                <span>$19.90</span>
                                <span className="text-xs text-gray-500 font-semibold font-heading line-through">$33.69</span>
                            </p>
                            </a>
                            <a className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500" href="#">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" width="2" height="12" fill="#161616"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect></svg></a>
                        </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                        <div className="p-6 bg-gray-50">
                            <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">-10%</span>
                            <a className="block px-6 mt-6 mb-2" href="#">
                            <img className="mb-5 mx-auto h-56 w-full object-contain" src="yofte-assets/images/backpack.png" alt="" /><h3 className="mb-2 text-xl font-bold font-heading">Backpack Travel</h3>
                            <p className="text-lg font-bold font-heading text-blue-500">
                                <span>$21.99</span>
                                <span className="text-xs text-gray-500 font-semibold font-heading line-through">$24.00</span>
                            </p>
                            </a>
                            <a className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500" href="#">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" width="2" height="12" fill="#161616"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect></svg></a>
                        </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                        <div className="p-6 bg-gray-50">
                            <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">-15%</span>
                            <a className="block px-6 mt-6 mb-2" href="#">
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
                        <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                        <div className="p-6 bg-gray-50">
                            <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">-15%</span>
                            <a className="block px-6 mt-6 mb-2" href="#">
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
                        <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                        <div className="p-6 bg-gray-50">
                            <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">-15%</span>
                            <a className="block px-6 mt-6 mb-2" href="#">
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
                        <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                        <div className="p-6 bg-gray-50">
                            <span className="px-2 py-1"></span>
                            <a className="block px-6 mt-6 mb-2" href="#">
                            <img className="mb-5 mx-auto h-56 w-full object-contain" src="yofte-assets/images/basketball.png" alt="" /><h3 className="mb-2 text-xl font-bold font-heading">Nike basketball ball</h3>
                            <p className="text-lg font-bold font-heading text-blue-500">
                                <span>$34.89</span>
                                <span className="text-xs text-gray-500 font-semibold font-heading line-through">$33.69</span>
                            </p>
                            </a>
                            <a className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500" href="#">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" width="2" height="12" fill="#161616"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect></svg></a>
                        </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                        <div className="p-6 bg-gray-50">
                            <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-blue-300 rounded-full text-blue-300 bg-white">NEW</span>
                            <a className="block px-6 mt-6 mb-2" href="#">
                            <img className="mb-5 mx-auto h-56 w-full object-contain" src="yofte-assets/images/skateboard.png" alt="" /><h3 className="mb-2 text-xl font-bold font-heading">Kiteboard WH-004</h3>
                            <p className="text-lg font-bold font-heading text-blue-500">
                                <span>$19.90</span>
                                <span className="text-xs text-gray-500 font-semibold font-heading line-through">$33.69</span>
                            </p>
                            </a>
                            <a className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500" href="#">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" width="2" height="12" fill="#161616"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect></svg></a>
                        </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                        <div className="p-6 bg-gray-50">
                            <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">-10%</span>
                            <a className="block px-6 mt-6 mb-2" href="#">
                            <img className="mb-5 mx-auto h-56 w-full object-contain" src="yofte-assets/images/backpack.png" alt="" /><h3 className="mb-2 text-xl font-bold font-heading">Backpack Travel</h3>
                            <p className="text-lg font-bold font-heading text-blue-500">
                                <span>$21.99</span>
                                <span className="text-xs text-gray-500 font-semibold font-heading line-through">$24.00</span>
                            </p>
                            </a>
                            <a className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500" href="#">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" width="2" height="12" fill="#161616"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect></svg></a>
                        </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                        <div className="p-6 bg-gray-50">
                            <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">-15%</span>
                            <a className="block px-6 mt-6 mb-2" href="#">
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
                        <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                        <div className="p-6 bg-gray-50">
                            <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">-15%</span>
                            <a className="block px-6 mt-6 mb-2" href="#">
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
                        <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                        <div className="p-6 bg-gray-50">
                            <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">-15%</span>
                            <a className="block px-6 mt-6 mb-2" href="#">
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
                        <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-8">
                        <div className="p-6 bg-gray-50">
                            <span className="px-2 py-1"></span>
                            <a className="block px-6 mt-6 mb-2" href="#">
                            <img className="mb-5 mx-auto h-56 w-full object-contain" src="yofte-assets/images/basketball.png" alt="" /><h3 className="mb-2 text-xl font-bold font-heading">Nike basketball ball</h3>
                            <p className="text-lg font-bold font-heading text-blue-500">
                                <span>$34.89</span>
                                <span className="text-xs text-gray-500 font-semibold font-heading line-through">$33.69</span>
                            </p>
                            </a>
                            <a className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500" href="#">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" width="2" height="12" fill="#161616"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect></svg></a>
                        </div>
                        </div>
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
    )
}

export default Records