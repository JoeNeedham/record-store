import React from 'react'
import Navbar from '../components/Navbar'

const Cart = () => {
    return (
    <>
        <div>
            <Navbar />  
            <section class="py-20"><div class="container mx-auto px-4">
                <div class="p-8 lg:p-20 bg-white">
                    <h2 class="mb-8 text-4xl font-bold font-heading">Shopping Cart</h2>
                    <p class="mb-10 md:mb-16 text-gray-500">Fusce pharetra lectus felis, eget temp.</p>
                    <div class="mb-12 pb-12 border-b">
                    <div class="flex mb-8 flex-wrap items-center justify-between">
                        <div class="w-full lg:w-auto mb-8 xl:mb-0 flex flex-wrap items-center">
                        <div class="flex items-center justify-center h-32 mb-4 lg:mb-0 bg-gray-100">
                            <img class="h-full object-contain" src="yofte-assets/images/waterbottle.png" alt="" /></div>
                        <div class="w-full md:w-auto md:pl-4 md:pl-8">
                            <h3 class="mb-2 text-xl font-bold font-heading">BRILE water filter carafe</h3>
                            <p class="mb-8 text-gray-500">Maecenas 0.7 commodo sit</p>
                            <p class="text-gray-500">In Stock</p>
                        </div>
                        </div>
                        <div class="w-full lg:w-auto flex flex-wrap -mx-4 items-center">
                        <div class="order-0 w-1/2 md:w-1/3 px-4 mb-4 md:mb-0">
                            <div class="inline-flex items-center px-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md">
                            <button class="py-2 hover:text-gray-700">
                                <svg width="12" height="2" viewbox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.35"><rect x="12" width="2" height="12" transform="rotate(90 12 0)" fill="currentColor"></rect></g></svg></button>
                            <input class="w-12 m-0 px-2 py-4 text-center md:text-right border-0 focus:ring-transparent focus:outline-none rounded-md" type="number" placeholder="1" /><button class="py-2 hover:text-gray-700">
                                <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.35"><rect x="5" width="2" height="12" fill="currentColor"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="currentColor"></rect></g></svg></button>
                            </div>
                        </div>
                        <div class="order-2 md:order-1 w-full md:w-1/3 px-4"><a class="inline-block mr-16 px-8 py-4 text-white font-bold font-heading uppercase bg-red-300 hover:bg-red-400 rounded-md" href="#">Remove</a></div>
                        <div class="order-1 md:order-2 w-1/2 md:w-1/3 px-4 text-right mb-4 md:mb-0">
                            <span class="text-lg font-bold font-heading text-blue-300">$29.89</span>
                        </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap items-center justify-between">
                        <div class="w-full lg:w-auto mb-8 xl:mb-0 flex flex-wrap items-center">
                        <div class="flex items-center justify-center h-32 mb-4 lg:mb-0 bg-gray-100">
                            <img class="h-full object-contain" src="yofte-assets/images/basketball.png" alt="" /></div>
                        <div class="w-full md:w-auto md:pl-4 md:pl-8">
                            <h3 class="mb-2 text-xl font-bold font-heading">Nike basketball ball</h3>
                            <p class="mb-8 text-gray-500">Lorem ipsum dolor L</p>
                            <p class="text-gray-500">In Stock</p>
                        </div>
                        </div>
                        <div class="w-full lg:w-auto flex flex-wrap -mx-4 items-center">
                        <div class="order-0 w-1/2 md:w-1/3 px-4 mb-4 md:mb-0">
                            <div class="inline-flex items-center px-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md">
                            <button class="py-2 hover:text-gray-700">
                                <svg width="12" height="2" viewbox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.35"><rect x="12" width="2" height="12" transform="rotate(90 12 0)" fill="currentColor"></rect></g></svg></button>
                            <input class="w-12 m-0 px-2 py-4 text-center md:text-right border-0 focus:ring-transparent focus:outline-none rounded-md" type="number" placeholder="1" /><button class="py-2 hover:text-gray-700">
                                <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.35"><rect x="5" width="2" height="12" fill="currentColor"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="currentColor"></rect></g></svg></button>
                            </div>
                        </div>
                        <div class="order-2 md:order-1 w-full md:w-1/3 px-4"><a class="inline-block mr-16 px-8 py-4 text-white font-bold font-heading uppercase bg-red-300 hover:bg-red-400 rounded-md" href="#">Remove</a></div>
                        <div class="order-1 md:order-2 w-1/2 md:w-1/3 px-4 text-right mb-4 md:mb-0">
                            <span class="text-lg font-bold font-heading text-blue-300">$29.89</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="mb-10">
                    <div class="py-3 px-10 bg-gray-100 rounded-full">
                        <div class="flex justify-between">
                        <span class="font-medium">Subtotal</span>
                        <span class="font-bold font-heading">$89.67</span>
                        </div>
                    </div>
                    <div class="py-3 px-10 rounded-full">
                        <div class="flex justify-between">
                        <span class="font-medium">Shipping</span>
                        <span class="font-bold font-heading">$11.00</span>
                        </div>
                    </div>
                    <div class="py-3 px-10 bg-gray-100 rounded-full">
                        <div class="flex justify-between">
                        <span class="font-medium">Tax</span>
                        <span class="font-bold font-heading">$0.00</span>
                        </div>
                    </div>
                    <div class="py-3 px-10 rounded-full">
                        <div class="flex justify-between">
                        <span class="text-base md:text-xl font-bold font-heading">Order Total</span>
                        <span class="font-bold font-heading">$100.67</span>
                        </div>
                    </div>
                    </div>
                    <div class="text-right"><a class="inline-block mb-4 md:mb-0 mr-6 w-full md:w-auto px-8 py-4 bg-gray-100 hover:bg-gray-200 text-center font-bold font-heading uppercase rounded-md transition duration-200" href="#">Continue Shopping</a><a class="inline-block w-full md:w-auto px-8 py-4 bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading uppercase rounded-md transition duration-200" href="#">Go to Checkout</a></div>
                </div>
                </div>
            </section>
        </div>
    </>
    )
}

export default Cart