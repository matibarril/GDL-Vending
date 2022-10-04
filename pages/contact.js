import React from 'react';
import Layout from '../components/layout/Layout';
import TextEffect from "../components/elements/TextEffect"
import Link from "next/link";

const Contact = () => {
    return (
        <>
            <Layout>
            {/*<section className="relative -mt-24 pt-24">
                    <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-inherit-100 z-0" style={{ "z-index": "-1" }}></div>
                    <div className="container">
                        <div className="flex flex-wrap items-center -mx-3">
                            <div className="w-full lg:w-1/2 px-3">
                                <div className="py-12">
                                    <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                                        <h2 className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animatedanimated animate__fadeIn">
                                            Committed to <span className="text-blue-500">People</span> and the future
                                        </h2>
                                        <p className="text-blueGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn">
                                            We are <strong className="text-blue-500">Limay Dev</strong>, a Creative Design <span className="typewrite d-inline text-brand" data-period="3000" data-type='["Web Agency", "Social Marketing" ]'></span>
                                        </p>
                                        <p className="text-blueGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn mt-3 text-sm">Helping you maximize operations management with digitization</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-3 lg:bg-blueGray-10 mb-12 lg:mb-0 pb-10">
                                <div className="flex items-center justify-center">
                                    <img className="lg:max-w-sm" src="/assets/imgs/backgrounds/limaydev-logo14.png" alt="LimayDev" />
                                </div>
                            </div>
                        </div>
                    </div>
    </section> */}
                <section className="py-20">
                    <div className="container">
                        <div className="max-w-2xl mx-auto text-center">
                            <div className="max-w-md mb-8 mx-auto">
                                <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animatedanimated animate__fadeIn" data-wow-delay=".1s">
                                    Contactenos
                                </span>
                                <h2 className="mt-2 text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeIn" data-wow-delay=".s">
                                    Estaremos <span className="text-blue-500">encantados</span> de saber de Usted!
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>
 
            </Layout>
        </>
    );
};

export default Contact;