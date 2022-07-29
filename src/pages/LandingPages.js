import React from 'react';

const LandingPages = () => {
    return (
        <main className="dark:bg-grey-800 bg-grey-300 bg-opacity-50 relative overflow-hidden h-screen">
            <header className="h-24 sm:h-32 flex items-center z-30 w-full mt-5">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <div className="uppercase text-grey-800 dark:text-white font-black text-3xl">
                        <img src="https://o.remove.bg/downloads/e5826ba2-016b-495c-805e-99e9295f5538/image-removebg-preview.png" alt="" width="80" />
                    </div>
                    <div className="flex items-center">
                        <nav className="text-grey-800 dark:text-white text-lg lg:flex items-center hidden">
                            <button className="font-semibold py-2 px-6 flex text-grey-800 uppercase border-b-2 border-grey-800">
                                Home
                            </button>
                        </nav>
                        <button className="lg:hidden flex flex-col ml-4">
                            <span className="w-6 h-1 bg-grey-800 dark:bg-white mb-1">
                            </span>
                            <span className="w-6 h-1 bg-grey-800 dark:bg-white mb-1">
                            </span>
                            <span className="w-6 h-1 bg-grey-800 dark:bg-white mb-1">
                            </span>
                        </button>
                    </div>
                </div>
            </header>
            <div className="bg-transparent dark:bg-grey-800 flex relative z-20 items-center">
                <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-8">
                    <div className="flex flex-col">
                        <h1 className="font-semibold w-full uppercase text-center text-4xl sm:text-5xl dark:text-white text-grey-800">
                            My name is Andreas Sibua ♡
                        </h1>
                        <h2 className="font-light max-w-2xl mx-auto uppercase w-full text-xl dark:text-white text-grey-800 text-center py-8">
                            Haii, perkenalkan nama saya <b className='font-bold'>Andreas Sibua</b>, asal dari Maluku Utara lebih tepatnya kota Tobelo Kabupaten Halmahera Utara
                        </h2>
                        <div className="flex items-center justify-center mt-4">
                            <i className="py-2 px-4 text-grey-900 text-lg mr-4">
                                Follow me on instagram ♡
                            </i>
                            <a href='https://www.instagram.com/andreassibua_/' target='_blank' rel="noreferrer" className="py-2 px-4 bg-transparent border-2 border-grey-900 text-grey-900 text-lg mr-2 hover:bg-grey-100 rounded-md">
                                @andreassibua_
                            </a>
                        </div>
                    </div>
                    <br />
                    <div className="block w-full mx-auto mt-6 md:mt-0 relative">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15952.034642455461!2d127.98346509305983!3d1.7257423137569508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x329a61bb0afb0dcf%3A0xed92b856242bad82!2sTobelo%2C%20Gamsungi%2C%20Tobelo%2C%20North%20Halmahera%20Regency%2C%20North%20Maluku!5e0!3m2!1sen!2sid!4v1659072273568!5m2!1sen!2sid" title="Maps tobelo" width="600" height="450" style={{ "border": "0" }} className="max-w-xs md:max-w-2xl m-auto" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        {/* <img src="https://o.remove.bg/downloads/e5826ba2-016b-495c-805e-99e9295f5538/image-removebg-preview.png" className="max-w-xs md:max-w-2xl m-auto" alt='' /> */}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LandingPages