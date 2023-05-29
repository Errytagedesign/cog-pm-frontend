import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image';
import Dashboard from '../../components/Layout/Dashboard';

const Prospects = () => {

    const [openPopup, setOpenPopup] = useState(false)

    const popupRef = useRef()

    const togglePopupHandler = (e) => {
        setOpenPopup(val => !val)
    }
    const closePopupHandler = (e) => {
        setOpenPopup(false)
    }


    const recentActivities = <div className="mr-10">
        {
            [...Array(4)].map((_, i) => (
                <div key={i} className="flex gap-x-10 p-4 border-b-[#E8E8EE] border-b-2 mr-10">
                    <figure className="bg-[#9FF1CA] grid place-items-center rounded-[50%] h-[50px] w-[50px]">
                        <img src="/assets/images/arrow-down.svg" alt="file-icon-white" />
                    </figure>
                    <div className="flex flex-col gap-y-3">
                        <h1 className="text-[#19191A] text-[18px] font-semibold">New tenant lead for Ikorodu property</h1>
                        <p className="text-[#B1B1B4]">Fri Jun 15,2022 GMT 13:00</p>
                    </div>
                </div>
            ))
        }
    </div>


    return (
        <Dashboard>
            <main className="p-10">
                
                <nav className="flex justify-between">
                    <div>
                        <h1 className="text-[#4B4B4B] text-[38px] font-bold">Prospects</h1>
                    </div>
                    <div>
                        <div className="flex items-center gap-x-12 mb-2">
                            <figure><Image
                                src="/assets/images/notification.svg"
                                alt="Notification"
                                width={24}
                                height={24}
                            /></figure>
                            <div className="h-[58px] w-[58px] rounded-[50%] bg-[#E0CA04] grid place-items-center">
                                <span className="font-bold text-[20px]">PA</span>
                            </div>
                        </div>
                        <p className="text-[#4B4B4B] text-[14px] text-right">User ID: 12345678</p>
                    </div>
                </nav>

                <section className="mt-5 pr-5">
                    <div className="flex">
                        <div className="relative ml-auto">
                            <button className="bg-[#386A8B] text-white rounded-[4px] px-6 py-2 ml-auto" onClick={togglePopupHandler}>Prospect manager</button>

                            {
                                openPopup && <div className="absolute right-0 top-[45px] bg-white border-[#62909F] border-[1px] text-[15px]" ref={popupRef}>
                                    <span className="flex p-2 gap-x-2 hover:bg-[#D2F4FF] cursor-pointer whitespace-no-wrap" onClick={closePopupHandler}>
                                        <Image src="/assets/images/fi_add.svg" alt="Add Icon" width={20} height={20} /> Add New Project
                                    </span>
                                    <span className="flex p-2 gap-x-2 hover:bg-[#D2F4FF] cursor-pointer whitespace-no-wrap" onClick={closePopupHandler}>
                                        <Image src="/assets/images/fi_eye.svg" alt="Eye Icon" width={20} height={20} /> View all prospects
                                    </span>
                                </div>
                            }
                        </div>
                    </div>

                    <div className="pt-10 flex justify-between gap-x-5">

                        <div className="w-full max-w-[367px] bg-[#386A8B] border-2 border-[#386A8B] p-5 text-white border-2">
                            <div className="flex justify-end pb-1">
                                <Image src="/assets/images/file-icon-white.svg" alt="file-icon-white" width={15} height={19} />
                            </div>
                            <h1 className="font-semibold">Total prospects</h1>
                            <h1 className="font-bold text-[32px] mt-6 mb-8">10</h1>
                            <p className="font-semibold">+ Increased by 30% since July 2022</p>
                        </div>

                        <div className="w-full max-w-[367px] border-2 border-[#386A8B] p-5">
                            <div className="flex justify-end pb-1">
                                <Image src="/assets/images/file-icon-blue.svg" alt="file-icon-white" width={15} height={19} />
                            </div>
                            <h1 className="font-semibold">Converted propsects</h1>
                            <h1 className="font-bold text-[32px] mt-6 mb-8">10</h1>
                            <p className="text-[#049561] font-semibold">+ Increased by 30% since July 2022</p>
                        </div>

                        <div className="w-full max-w-[367px] border-2 border-[#386A8B] p-5">
                            <div className="flex justify-end pb-1">
                                <Image src="/assets/images/file-icon-blue.svg" alt="file-icon-white" width={15} height={19} />
                            </div>
                            <h1 className="font-semibold">Pending prospects</h1>
                            <h1 className="font-bold text-[32px] mt-6 mb-8">10</h1>
                            <p className="text-[#E00525] font-semibold">+ Increased by 30% since July 2022</p>
                        </div>

                    </div>

                    <div className="flex pt-10">
                        <div className="relative ml-auto">
                            <button className="text-[#386A8B] border-[#62909F] border-[1px] font-semibold bg-white rounded-[4px] px-6 py-2 ml-auto">View custom report</button>
                        </div>
                    </div>

                    <div className="mt-20 border-[#62909F] border-2">
                        <div className="py-5 px-8 flex justify-between items-center border-b-[#E8E8EE] border-b-2 mr-10">
                            <h1 className="text-[#4B4B4B] text-[22px] font-bold">Recent Activities</h1>
                            <span className="text-[#62909F] text-[20px] font-semibold underline">View All</span>
                        </div>
                        {
                            [].length !== 0
                                ?
                                recentActivities
                                :
                                <div className="px-10 py-5 grid grid-cols-2 gap-x-10">
                                    <div>
                                        <div className="max-w-[30rem] text-center pt-20 text-[#4B4B4B]">
                                            <h1 className='font-bold mb-10'>You have no recent activities</h1>
                                            <p>Create a new prospect by through the Prospect manager dropdown</p>
                                            <p>Go to Prospect manager &gt; Add new prospect.</p>
                                        </div>
                                    </div>
                                    <figure>
                                        <img src="/assets/images/no-recent-act.svg" alt="file-icon-white" />
                                    </figure>
                                </div>
                        }
                    </div>
                </section>

            </main>
        </Dashboard>
    )
}

export default Prospects