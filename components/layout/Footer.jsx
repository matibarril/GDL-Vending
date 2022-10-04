import React from "react";
import Link from "next/link"

const Footer = () => {
    return (
        <>
            <section className="py-10">
                <div className="container px-4 mx-auto wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                    <div className="flex flex-wrap mb-12 lg:mb-30 -mx-3 text-center lg:text-left">
                        <div className="w-full lg:w-1/5 px-3 mb-6 lg:mb-0">
                            <Link href="/">
                                <a className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none">
                                    <img className="h-25" src="/assets/imgs/logos/logo_20.png" alt="GDL_Vending" />
                                </a>
                            </Link>
                        </div>
                        <div className="w-full lg:w-2/5 px-3 py-10 mb-8 lg:mb-0">
                            <p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg text-blueGray-400 leading-relaxed">
                                Tu <strong>Snack</strong> 24/7
                            </p>
                        </div>
                        <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
                            <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">Oficina</p>
                            <p className="lg:text-lg text-blueGray-400">Guadalajara, Jalisco, México.</p>
                        </div>
                        <div className="w-full lg:w-1/5 px-3">
                            <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">Contacto</p>
                            <p className="lg:text-lg text-blueGray-400">rizo_sandra@hotmail.com</p>
                            <p className="lg:text-lg text-blueGray-400"></p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center lg:justify-between">
                        <p className="text-sm text-blueGray-400">
                            &copy; 2022. All rights reserved. Designed by{" "}
                            <a className="text-blue-400" href="https://alithemes.com" target="_blank">
                                GDL-Vending.com
                            
                            </a>
                        </p>
                    
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
