import React, { useEffect, useState } from 'react'
import woman from '../../assets/img/woman.jpg'
import man from '../../assets/img/man.jpg'

import { FaInstagram, FaRegCalendarAlt, FaMapMarkedAlt  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TfiAlarmClock } from "react-icons/tfi";
import { IoIosSend } from "react-icons/io";
import { IoChatbox } from "react-icons/io5";

export default function Index() {

    const [isVisible, setIsVisible] = useState(false);

    // const handleScroll = () => {
    //     const element = document.getElementById('in-view-container');
    //     if (element) {
    //         const rect = element.getBoundingClientRect();
    //         const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
    //         setIsVisible(isInView);

    //         console.log('check ', isInView);
    //     }
    // };

    const handleScroll = () => {
        const element = document.getElementById('in-view-container');
        if (element) {
            const rect = element.getBoundingClientRect();

            const isInView = rect.top <= window.innerHeight;
            setIsVisible(isInView);

            // if(isInView){
            //     window.removeEventListener('scroll', handleScroll);
            // }

        }
    };
    
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Panggil handleScroll sekali saat komponen dimount untuk menetapkan nilai awal
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>       
            <div className="background-image-container">

                <div className="section section1">
                    <div className="content space-y-5">
                        <p className="text-lg md:text-2xl">The Wedding Of</p>
                        <p className="sacramento text-5xl md:text-8xl">Lorem Ipsum & Ipsum Lorem</p>
                        <div className="space-x-4 text-lg md:text-2xl">
                            <span>01.01.2023</span>
                            <span>|</span>
                            <span>Manado</span>
                        </div>
                        <div className="flex space-x-2 justify-center">
                            <div className="pulse relative z-0 bg-amber-900 max-w-[6rem] w-full h-24 bg-opacity-50 rounded-lg border-2 border-white flex flex-col justify-between py-3">
                                <span className="text-lg md:text-2xl">10</span>
                                <span>Days</span>
                            </div>
                            <div className="pulse relative z-0 bg-amber-900 max-w-[6rem] w-full h-24 bg-opacity-50 rounded-lg border-2 border-white flex flex-col justify-between py-3">
                                <span className="text-lg md:text-2xl">12</span>
                                <span>Hours</span>
                            </div>
                            <div className="pulse relative z-0 bg-amber-900 max-w-[6rem] w-full h-24 bg-opacity-50 rounded-lg border-2 border-white flex flex-col justify-between py-3">
                                <span className="text-lg md:text-2xl">10</span>
                                <span>Minutes</span>
                            </div>
                            <div className="pulse relative z-0 bg-amber-900 max-w-[6rem] w-full h-24 bg-opacity-50 rounded-lg border-2 border-white flex flex-col justify-between py-3">
                                <span className="text-lg md:text-2xl">20</span>
                                <span>Seconds</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section section2">
                    <div className="content text-amber-900 space-y-16">
                        <div id="in-view-container" className={"space-y-4 container "+(isVisible ? 'visible' : '')}>
                            <p className="sacramento text-5xl md:text-7xl">We Found Love</p>
                            <div className="max-w-sm md:max-w-5xl mx-auto">
                                <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <p className="font-bold">Contoh Ayat</p>
                        </div>

                        <div className="space-y-10">
                            <p className="font-bold sacramento text-5xl">Mempelai Pria & Wanita</p>
                            <div className="md:flex md:space-x-40 justify-center space-y-14 md:space-y-0">
                                <div className="space-y-4">
                                    <img src={man} className="border border-amber-900 inline object-cover w-56 h-56 rounded-full" alt="" />
                                    <div className="w-48 leading-5 mx-auto">
                                        <p className="sacramento text-6xl font-bold">Lorem</p>
                                        <p className="font-bold">Lorem Ipsum, S.Pd</p>
                                        <p>Putra dari</p>
                                        <p>Lorem Ipsum Lorem & Lorem Ipsum Lorem</p>
                                        <div className="flex w-full justify-center border items-center border-amber-900 rounded-md mt-4 py-1">
                                            <FaInstagram className="mr-2" /> loremIpsum
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <img src={woman} className="border border-amber-900 inline object-cover w-56 h-56 rounded-full" alt="" />
                                    <div className="w-48 leading-5 mx-auto">
                                        <p className="sacramento text-6xl font-bold">Ipsum</p>
                                        <p className="font-bold">Ipsum Lorem, S.Pd</p>
                                        <p>Putri dari</p>
                                        <p>Lorem Ipsum Lorem & Lorem Ipsum Lorem</p>
                                        <div className="flex w-full justify-center border items-center border-amber-900 rounded-md mt-4 py-1">
                                            <FaInstagram className="mr-2" /> ipsumLorem
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="section section3">
                    <div className="content text-amber-900">
                        <p className="sacramento text-7xl">Save the Date</p>
                        <div className="flex justify-center">
                            <p className="max-w-sm md:max-w-5xl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        </div>
                        <div className="md:flex md:space-x-10 md:my-28 space-y-6 md:space-y-0">
                            <div className="space-y-4">
                                <div className="flex justify-end items-center text-xl font-bold">Pemberkatan Nikah</div>
                                <div className="flex justify-end items-center text-right">Sabtu, 23 Desember 2023<FaRegCalendarAlt className="ml-2 w-10 h-10" /></div>
                                <div className="flex justify-end items-center text-right">13.00 WITA<TfiAlarmClock className="ml-2 w-10 h-10" /></div>
                                <div className="flex justify-end items-center text-right">Jl. Balai Kota No.1, Tikala Ares, Kec. Tikala, Kota Manado, Sulawesi Utara<FaLocationDot className="ml-2 w-10 h-10" /></div>
                            </div>
                            <div className="border border-r border-amber-900"></div>
                            <div className="space-y-4">
                                <div className="flex justify-start items-center text-xl font-bold">Resepsi Pernikahan</div>
                                <div className="flex justify-start items-center text-left"><FaRegCalendarAlt className="mr-2 w-10 h-10" />Sabtu, 23 Desember 2023</div>
                                <div className="flex justify-start items-center text-left"><TfiAlarmClock className="mr-2 w-10 h-10" />17.00 WITA</div>
                                <div className="flex justify-start items-center text-left"><FaLocationDot className="mr-2 w-10 h-10" />Jl. Balai Kota No.1, Tikala Ares, Kec. Tikala, Kota Manado, Sulawesi Utara</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section section4">
                    <div className="content text-amber-900 w-full">
                        <p className="max-w-sm md:max-w-5xl mx-auto">Merupakan suatu kebahagiaan apabila Bapak/Ibu/Saudara/i berkenan hadir, semoga selalu diberikan kesehatan.</p>

                        <div className="mt-20 md:mx-20 space-y-4">
                            <div className="space-y-4">
                                <div className="flex items-center font-bold">Lokasi Pemberkatan <FaMapMarkedAlt className="w-5 h-5 ml-2" /></div>

                                <div className="border border-amber-900 rounded-lg">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4795462422285!2d124.8465072747778!3d1.484317698501746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3287753998474d9f%3A0x37b3cb7db64f46e0!2sKantor%20Walikota%20Manado!5e0!3m2!1sid!2sid!4v1702742378455!5m2!1sid!2sid" style={{width : '100%', height : 450, borderRadius: 10}} loading="lazy"></iframe>
                                </div>
                                <button className="px-10 py-1 bg-amber-900 rounded-2xl text-white">Google Maps</button>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="section section5">
                    <div className="content text-amber-900">
                        <p>Give a Blessing Prays</p>
                        <p className="sacramento text-5xl md:text-7xl">Wedding Wishes</p>

                        <div className="mt-10 space-y-4">
                            <input type="text" className="w-full p-3 bg-white rounded-md" placeholder="Nama" />
                            <input type="text" className="w-full p-3 bg-white rounded-md" placeholder="Relasi, contoh: Keluarga" />
                            <textarea name="" className="w-full p-3 bg-white rounded-md" id="" cols="30" rows="3" placeholder="Pesan dan Doa"></textarea>
                            <button className="flex items-center justify-center px-3 py-2 bg-amber-900 rounded-sm text-white w-full"><IoIosSend className="w-6 h-6" /> Kirim</button>
                        </div>

                        <div className="bg-amber-900 mt-10 py-4 px-5 text-white text-left rounded-sm">
                            <p>Message & Wishes</p>

                            <div className="space-y-2">
                                <div className="border-b border-amber-950 py-2">
                                    <span className="font-bold mr-2">Lorem</span>
                                    <span className="text-xs text-gray-200">Keluarga</span>
                                    <div className="text-sm flex items-center"><IoChatbox className="w-4 h-4 mr-1" />Happily Ever After, thank you for trusting us.</div>
                                </div>
                                <div className="border-b border-amber-950 py-2">
                                    <span className="font-bold mr-2">Lorem</span>
                                    <span className="text-xs text-gray-200">Keluarga</span>
                                    <div className="text-sm"><IoChatbox className="w-4 h-4 mr-1" />Happily Ever After, thank you for trusting us.</div>
                                </div>
                                <div className="border-b border-amber-950 py-2">
                                    <span className="font-bold mr-2">Lorem</span>
                                    <span className="text-xs text-gray-200">Keluarga</span>
                                    <div className="text-sm"><IoChatbox className="w-4 h-4 mr-1" />Happily Ever After, thank you for trusting us.</div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>     

        </div>
    )
}
